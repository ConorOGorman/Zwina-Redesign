import { chromium } from '@playwright/test';

const url = 'https://zwinafoundation.org/shop';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(2000);
await page.screenshot({ path: 'handoff/zwina-shop.png', fullPage: true });

const data = await page.evaluate(() => {
  const text = (el) => (el?.textContent ?? '').replace(/\s+/g, ' ').trim();

  const headings = Array.from(document.querySelectorAll('h1,h2,h3'))
    .map((el) => ({ tag: el.tagName.toLowerCase(), text: text(el) }))
    .filter((h) => h.text.length > 0)
    .slice(0, 40);

  const images = Array.from(document.images)
    .map((img) => ({ src: img.currentSrc || img.src, alt: img.alt }))
    .filter((i) => i.src && !i.src.startsWith('data:'))
    .slice(0, 200);

  // Heuristic product cards: elements with an image + a heading + a price-like string.
  const priceRegex = /(€\s?\d+)|(\d+\s?€)|(EUR\s?\d+)/i;
  const candidates = Array.from(document.querySelectorAll('article, li, div'))
    .filter((el) => el.querySelector('img') && el.querySelector('h2,h3,h4'))
    .slice(0, 2000);

  const products = [];
  for (const el of candidates) {
    const img = el.querySelector('img');
    const titleEl = el.querySelector('h2,h3,h4');
    const blockText = text(el);
    if (!priceRegex.test(blockText)) continue;

    const title = text(titleEl);
    const src = img?.currentSrc || img?.src;
    if (!title || !src) continue;

    // Try to find a price substring.
    const priceMatch = blockText.match(priceRegex)?.[0] ?? null;

    products.push({ title, image: { src, alt: img.alt || title }, priceText: priceMatch, blockText });
    if (products.length >= 50) break;
  }

  return { title: document.title, url: location.href, headings, imagesCount: document.images.length, products };
});

console.log(JSON.stringify(data, null, 2));

await browser.close();
