import { chromium } from '@playwright/test';

const url = 'https://zwinafoundation.org/shop';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);

// Build a product list from visible cards.
const products = await page.evaluate(() => {
  const norm = (s) => (s ?? '').replace(/\s+/g, ' ').trim();
  const cards = Array.from(document.querySelectorAll('a, button, div, article, li'))
    .filter((el) => el.querySelector('img') && el.querySelector('h3,h2,h4'))
    .slice(0, 2000);

  const priceRe = /€\s?\d+(?:\.\d+)?/;
  const out = [];
  for (const el of cards) {
    const titleEl = el.querySelector('h3,h2,h4');
    const img = el.querySelector('img');
    const text = norm(el.textContent);
    const title = norm(titleEl?.textContent);
    const price = text.match(priceRe)?.[0] ?? null;
    const href = el instanceof HTMLAnchorElement ? el.href : el.querySelector('a')?.href ?? null;
    if (!title || !price || !img) continue;

    out.push({
      title,
      price,
      href: href && href.startsWith(location.origin) ? href : null,
      image: { src: img.currentSrc || img.src, alt: img.alt || title },
    });
    if (out.length >= 50) break;
  }

  // Deduplicate.
  const seen = new Set();
  return out.filter((p) => {
    const k = `${p.title}|${p.price}|${p.image.src}`;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
});

// Try opening each product detail (if link exists) and capture copy.
const details = [];
for (const p of products) {
  if (!p.href) {
    details.push({ ...p, detail: null });
    continue;
  }

  const detailPage = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await detailPage.goto(p.href, { waitUntil: 'networkidle', timeout: 60000 });
  await detailPage.waitForTimeout(1000);

  const detail = await detailPage.evaluate(() => {
    const norm = (s) => (s ?? '').replace(/\s+/g, ' ').trim();
    const h1 = document.querySelector('h1');
    const title = norm(h1?.textContent) || null;

    // Grab the first substantial paragraph-ish copy.
    const paras = Array.from(document.querySelectorAll('p'))
      .map((p) => norm(p.textContent))
      .filter((t) => t.length > 40);

    // Capture bullet points if present.
    const bullets = Array.from(document.querySelectorAll('li'))
      .map((li) => norm(li.textContent))
      .filter((t) => t.length > 0)
      .slice(0, 12);

    // Find a WhatsApp link if present.
    const whatsapp = Array.from(document.querySelectorAll('a'))
      .map((a) => a.href)
      .find((href) => href.includes('wa.me') || href.includes('whatsapp'));

    return {
      title,
      paragraphs: paras.slice(0, 5),
      bullets,
      whatsapp: whatsapp ?? null,
    };
  });

  await detailPage.close();
  details.push({ ...p, detail });
}

console.log(JSON.stringify({ url, extractedAt: new Date().toISOString(), products: details }, null, 2));

await browser.close();
