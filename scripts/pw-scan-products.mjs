import { chromium } from '@playwright/test';

const start = Number(process.argv[2] ?? 1);
const end = Number(process.argv[3] ?? 20);

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

const results = [];

for (let id = start; id <= end; id += 1) {
  const url = `https://zwinafoundation.org/product/${id}`;
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 });
    await page.waitForTimeout(500);

    const data = await page.evaluate(() => {
      const norm = (s) => (s ?? '').replace(/\s+/g, ' ').trim();
      const title = norm(document.querySelector('h1')?.textContent) || null;
      const price = Array.from(document.querySelectorAll('*'))
        .map((el) => norm(el.textContent))
        .find((t) => /^€\s?\d+(?:\.\d+)?/.test(t)) ?? null;

      const images = Array.from(document.querySelectorAll('img'))
        .map((img) => ({ src: img.currentSrc || img.src, alt: img.alt }))
        .filter((i) => i.src && !i.src.startsWith('data:'))
        .map((i) => ({ ...i, src: i.src.split('?')[0] }))
        .filter((i, idx, arr) => arr.findIndex((j) => j.src === i.src) === idx)
        .slice(0, 12);

      const getSection = (label) => {
        const el = Array.from(document.querySelectorAll('h2,h3,h4'))
          .find((h) => norm(h.textContent).toLowerCase() === label.toLowerCase());
        if (!el) return null;
        const container = el.parentElement;
        if (!container) return null;
        // Find following paragraphs within same container.
        const paragraphs = Array.from(container.querySelectorAll('p'))
          .map((p) => norm(p.textContent))
          .filter((t) => t.length > 0);
        return paragraphs.join('\n\n') || null;
      };

      return {
        title,
        price,
        images,
        description: getSection('Description'),
        materials: getSection('Materials'),
        story: getSection('The Story'),
        care: getSection('Care Instructions'),
      };
    });

    if (!data.title || data.title.length < 2) {
      results.push({ id, url, ok: false, reason: 'no-title' });
      continue;
    }

    results.push({ id, url, ok: true, ...data });
  } catch (err) {
    results.push({ id, url, ok: false, reason: String(err?.message ?? err) });
  }
}

console.log(JSON.stringify({ start, end, results }, null, 2));

await browser.close();
