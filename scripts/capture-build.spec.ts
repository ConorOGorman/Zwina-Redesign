import { test } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';
import config from './validation-config.json';

const outputDir = path.join(process.cwd(), 'docs', 'build');

test.describe('Capture Build Screenshots', () => {
  for (const route of config.routes) {
    const routeSlug = route === '/' ? 'home' : route.replace(/\//g, '');
    
    for (const [viewportName, viewportSize] of Object.entries(config.viewports)) {
      test(`${route} - ${viewportName}`, async ({ page }) => {
        await page.setViewportSize(viewportSize);
        await page.goto(`${config.buildBaseUrl}${route}`, { waitUntil: 'networkidle' });
        
        // Ensure directory exists
        const dir = path.join(outputDir, routeSlug);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        await page.screenshot({ 
          path: path.join(dir, `${viewportName}.png`),
          fullPage: true 
        });
      });
    }
  }
});
