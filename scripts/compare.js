const fs = require('fs');
const path = require('path');
const PNG = require('pngjs').PNG;
const pixelmatch = require('pixelmatch');
const config = require('./validation-config.json');

const referenceDir = path.join(process.cwd(), 'docs', 'reference');
const buildDir = path.join(process.cwd(), 'docs', 'build');
const diffDir = path.join(process.cwd(), 'docs', 'diff');

async function compareScreenshots() {
  console.log('Starting pixel comparison...');
  let totalDiff = 0;
  let comparisons = 0;

  for (const route of config.routes) {
    const routeSlug = route === '/' ? 'home' : route.replace(/\//g, '');
    
    for (const viewportName of Object.keys(config.viewports)) {
      const refPath = path.join(referenceDir, routeSlug, `${viewportName}.png`);
      const buildPath = path.join(buildDir, routeSlug, `${viewportName}.png`);
      const diffPath = path.join(diffDir, routeSlug, `${viewportName}-diff.png`);
      const diffOutputDir = path.join(diffDir, routeSlug);

      if (!fs.existsSync(refPath) || !fs.existsSync(buildPath)) {
        console.warn(`Missing screenshots for ${routeSlug} - ${viewportName}. Skipping.`);
        continue;
      }

      if (!fs.existsSync(diffOutputDir)) {
        fs.mkdirSync(diffOutputDir, { recursive: true });
      }

      const img1 = PNG.sync.read(fs.readFileSync(refPath));
      const img2 = PNG.sync.read(fs.readFileSync(buildPath));
      const { width, height } = img1;
      const diff = new PNG({ width, height });

      // Resize img2 if dimensions don't match (simple crop/expand for now, ideally they match)
      if (img1.width !== img2.width || img1.height !== img2.height) {
         console.warn(`Dimension mismatch for ${routeSlug} - ${viewportName}. Ref: ${img1.width}x${img1.height}, Build: ${img2.width}x${img2.height}`);
         // Continue but results might be skewed
      }

      const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });
      const totalPixels = width * height;
      const diffPercentage = (numDiffPixels / totalPixels) * 100;

      fs.writeFileSync(diffPath, PNG.sync.write(diff));

      console.log(`${routeSlug} [${viewportName}]: ${diffPercentage.toFixed(2)}% mismatch`);
      
      totalDiff += diffPercentage;
      comparisons++;
    }
  }

  if (comparisons > 0) {
    console.log(`\nAverage Mismatch: ${(totalDiff / comparisons).toFixed(2)}%`);
  } else {
    console.log('No comparisons performed.');
  }
}

compareScreenshots();
