import { chromium } from '@playwright/test';

const url = process.argv[2] ?? 'https://zwinafoundation.org/product/7';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(1500);
await page.screenshot({ path: 'handoff/zwina-product-7.png', fullPage: true });

const data = await page.evaluate(() => {
  const norm = (s) => (s ?? '').replace(/\s+/g, ' ').trim();
  const title = norm(document.querySelector('h1')?.textContent) || null;
  const h2s = Array.from(document.querySelectorAll('h2')).map((h) => norm(h.textContent)).filter(Boolean);
  const price = Array.from(document.querySelectorAll('*'))
    .map((el) => norm(el.textContent))
    .find((t) => /^€\s?\d+(?:\.\d+)?/.test(t) || /^€\d+/.test(t)) ?? null;

  const images = Array.from(document.images)
    .map((img) => ({ src: img.currentSrc || img.src, alt: img.alt }))
    .filter((i) => i.src && !i.src.startsWith('data:'));

  return {
    url: location.href,
    title,
    price,
    h2s: h2s.slice(0, 20),
    images: images.slice(0, 50),
  };
});

console.log(JSON.stringify(data, null, 2));

await browser.close();
