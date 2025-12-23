import { chromium } from '@playwright/test';

const url = 'https://zwinafoundation.org/product/7';
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1000);

const data = await page.evaluate(() => {
  const norm = (s) => (s ?? '').replace(/\s+/g, ' ').trim();
  const title = norm(document.querySelector('h1')?.textContent) || null;

  const priceCandidate = Array.from(document.querySelectorAll('*'))
    .map((el) => norm(el.textContent))
    .find((t) => /^€\s?\d+(?:\.\d+)?/.test(t)) ?? null;

  const badge = Array.from(document.querySelectorAll('*'))
    .map((el) => norm(el.textContent))
    .find((t) => /artisan-made/i.test(t)) ?? null;

  const sectionTitles = Array.from(document.querySelectorAll('h2,h3'))
    .map((h) => norm(h.textContent))
    .filter(Boolean);

  // Grab label/value pairs by scanning bold-ish headings then following paragraph.
  const blocks = [];
  for (const heading of Array.from(document.querySelectorAll('h3,h4,strong')))
  {
    const label = norm(heading.textContent);
    if (!label) continue;
    if (!['Description','Materials','The Story','Care Instructions','Your Impact'].some((k) => label.toLowerCase().includes(k.toLowerCase()))) continue;
    const container = heading.closest('section,div') ?? heading.parentElement;
    if (!container) continue;
    const text = norm(container.textContent);
    blocks.push({ label, text });
  }

  const thumbs = Array.from(document.querySelectorAll('img'))
    .map((img) => ({ src: img.currentSrc || img.src, alt: img.alt }))
    .filter((i) => i.src && !i.src.startsWith('data:'));

  const buttons = Array.from(document.querySelectorAll('button,a'))
    .map((el) => ({ tag: el.tagName.toLowerCase(), text: norm(el.textContent), href: (el instanceof HTMLAnchorElement) ? el.href : null }))
    .filter((b) => b.text.length > 0)
    .slice(0, 60);

  return { title, priceCandidate, badge, sectionTitles: sectionTitles.slice(0, 30), blocks, thumbs: thumbs.slice(0, 30), buttons };
});

console.log(JSON.stringify(data, null, 2));

await browser.close();
