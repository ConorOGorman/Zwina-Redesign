# Shop listings — criteria of excellence (Zwina)

Date: 21 Dec 2025

This document defines what “excellent” looks like for the Shop listings experience (`/shop`) in this repo.

## Success definition (10‑second test)
A first-time visitor should be able to answer quickly:

1. What the products are (handcrafted, made to order)
2. What’s available (clear grid of items)
3. How to take the next step (tap a product → overview; contact for sizing/order)

## Visual hierarchy (minimalist)
- No “card chrome”: avoid heavy borders, nested boxes, or stacked panels that feel busy.
- Product tile must read in this order: image → name → price.
- Keep supporting metadata small and optional (e.g., category).
- Use whitespace to separate items; avoid grid “gap-px” dividers.

## Interactions
- Whole tile is clickable and has a clear focus state for keyboard users.
- Hover should be subtle: small lift/zoom + title color shift (no loud overlays).
- Keep motion respectful of `prefers-reduced-motion`.

## Controls (filtering)
- Filtering must work without a page reload.
- Inputs should be simple and consistent with the site: rounded button radius, light borders, no “flashy” effects.
- Provide: search by name, category filter, sort by price, and a clear/reset action.

## Content constraints
- Do not show long paragraphs inside tiles.
- Care instructions stay on the product detail page only.

