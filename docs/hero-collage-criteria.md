# Hero Collage (Home Header) — Criteria of Excellence

This document defines the quality bar for the **homepage hero right-side image collage** (the “Hatamex-style” mosaic).

## Non‑Negotiables

- **No background behind the collage**
  - No black (or any solid) background plate behind the images.
  - Gutters between tiles must show the *underlying hero background* (i.e. transparent collage wrapper).
- **Desktop-only**
  - The collage must **not render on mobile or tablet**.
  - Only show at `lg` and above.
- **Motion matches reference**
  - Left column scrolls **up**; right column scrolls **down**.
  - Motion is **infinite** (a carousel loop) with more images continuously entering/exiting.
  - Movement must be **continuous** (no easing “pause” at endpoints).
- **Edge fade**
  - Top and bottom edges have a **blurred fade** so images softly disappear.
- **Accessibility**
  - Respect `prefers-reduced-motion`: motion stops (static images).
  - Meaningful `alt` text on each image.

## Visual Fidelity

### Layout
- **2-column mosaic** with varied tile sizes.
- **Hard edges** (no rounded corners) to match the reference.
- **Consistent gutters** between tiles.
- **No visible borders** around the tiles unless the reference shows them.

### Image Treatment
- Tiles are **masked** (overflow hidden) and images use **cover**.
- No stretching; no letterboxing.
- Crops should feel intentional (faces not awkwardly cut, key subject centered when possible).

## Motion Fidelity

### Motion Profile
- Motion should be **continuous** (no easing “stops” at the endpoints).
- Two independent columns move in **opposite directions**.
- The loop is seamless (no visible “jump” when it wraps).

### Engineering Requirements
- Motion must be GPU-friendly:
  - Use `transform` animations only.
  - Avoid layout thrash.
- Avoid hydration issues:
  - Collage is implemented in a **Client Component**.

## Performance
- Don’t ship unnecessarily large images.
- Avoid heavy re-renders.
- Keep the collage DOM shallow.

## Iteration Checklist

Use this as the loop:

1. Confirm: wrapper has **no background** (transparent).
2. Confirm: gutters show the **hero background** (blue/white rule still holds).
3. Confirm: collage is **hidden** below `lg`.
4. Confirm: tiles are **sharp-edged** and evenly spaced.
5. Confirm: columns move **up/down** with a seamless loop.
6. Confirm: top/bottom **blur fade** looks natural.
7. Confirm: `prefers-reduced-motion` disables movement.
8. Confirm: no runtime errors in dev.

## Iteration Log

- v1: Initial collage grid (cards) — replaced placeholders.
- v2: Mosaic grid with continuous drift motion — removed card styling.
- v3 (current target): Remove any background plate; make gutters transparent and refine motion to match reference timing.
