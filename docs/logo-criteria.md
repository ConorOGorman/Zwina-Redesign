# Zwina Logo — Criteria of Excellence

This rubric defines what “excellent” looks like for the Zwina header logo.

## 1) Readability (25%)
- **Small-size legibility**: Reads clearly at ~120px wide and on mobile headers.
- **Contrast**: Letters + underline remain visible on `bg-background/90` and `bg-background-soft`.
- **Letter spacing**: No letter collisions; consistent rhythm.

## 2) Brand Fidelity (20%)
- **Color consistency**: Uses the brand palette (tokens) with stable assignments per letter.
- **Tone**: Feels playful/warm without looking childish or noisy.
- **Recognizability**: Still “ZWINA” at a glance.

## 3) Shape & Balance (15%)
- **Baseline alignment**: Letters sit on a coherent baseline.
- **Underline**: Supports the wordmark (doesn’t dominate) and visually anchors it.
- **Optical balance**: Even visual weight; no letter feels heavier/lighter.

## 4) Motion & Delight (15%)
- **Hover delight**: Subtle and crisp (no jarring movement).
- **Stagger**: Micro-stagger can add polish.
- **Reduced motion**: Honors `prefers-reduced-motion` and stays readable.

## 5) Accessibility (15%)
- **Semantics**: Proper link label (`aria-label`) and no duplicated announcement.
- **Keyboard focus**: Clear focus ring; animation doesn’t interfere.

## 6) Implementation Quality (10%)
- **Token-driven**: No hard-coded colors in components.
- **No layout shift**: Hover effects don’t change header height/width.
- **Performance**: Avoid heavy filters/continuous animations in the header.

---

## Current iteration checks
- **Readability**: Good at standard size; ensure yellow letters remain visible.
- **Brand fidelity**: Must keep the distinctive warm yellow in the wordmark.
- **Motion**: Use subtle translate/scale with reduced-motion fallbacks.

## Next iteration goals
1. Keep letter colors stable (including warm yellow).
2. Preserve the simple blue underline.
3. Polish hover with reduced-motion safety.
