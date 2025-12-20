# Validation Guide

This project includes a comprehensive validation suite to ensure pixel parity with the reference site.

## Prerequisites
- Node.js installed
- Dependencies installed (`npm install`)
- Playwright browsers installed (`npx playwright install`)

## Configuration
Configuration for routes and viewports is located in `scripts/validation-config.json`.

## Workflow

### 1. Start the Development Server
Ensure your local build is running:
```bash
npm run dev
```

### 2. Capture Reference Screenshots
This script visits the live site (`https://zwinafoundation.org`) and captures screenshots for all defined routes and viewports.
```bash
npm run validate:capture-ref
```
*Output: `/docs/reference/`*

### 3. Capture Build Screenshots
This script visits your local server (`http://localhost:3000`) and captures screenshots.
```bash
npm run validate:capture-build
```
*Output: `/docs/build/`*

### 4. Run Comparison
This script compares the reference and build screenshots using `pixelmatch` and generates diff images and a report.
```bash
npm run validate:compare
```
*Output: `/docs/diff/`*

## Automated Full Run
To run all steps in sequence (ensure dev server is running in a separate terminal):
```bash
npm run validate:all
```

## Thresholds
The comparison script uses a threshold of `0.1` (10%) for pixel sensitivity. You can adjust this in `scripts/compare.js`.
