# Shop hero — criteria of excellence (Zwina)

Date: 21 Dec 2025

This document defines what “excellent” looks like for the **Shop hero** (the first section on `/shop`).

## Success definition (15‑second test)
A first-time visitor should immediately understand:

1. This shop is **mission-led**, not a typical collection
2. The **benefit split** (50/50) and who it supports
3. How to **order** (primary CTA) and how to learn more (secondary CTA)

## Content requirements (non‑negotiable)
The hero must include (in some form):

- Headline: “This is not a collection.”
- Explanation: co-created with the women of Talat Minoun; built for economic sustainability; reduces dependency on donations
- Proof/clarity: profits split equally — **50% to the community**, **50% to the Foundation**
- Ordering note: tailor-made; contact for fit and unique product
- Actions:
  - Primary: “Contact via WhatsApp”
  - Secondary: “Instagram”

## Layout & hierarchy
- **Two-column on desktop**: story (left) + structured callout/CTAs (right)
- **Single-column on mobile** with a logical order:
  1) caption + headline + description
  2) profit split callout + CTAs
  3) tailor-made note
- **Header offset**: the hero must clear the fixed header (no text hidden behind it).

## CTA excellence
- CTAs should be **easy to spot** and **easy to tap**.
- On mobile:
  - CTAs should stack cleanly with consistent widths.
- On desktop:
  - CTAs should sit side-by-side and feel balanced.

## Visual consistency (design system)
- Use existing primitives only: `Section`, `Container`, `Typography`, `Button`, `Link`, `Reveal`.
- Use existing surfaces/borders:
  - `bg-secondary`, `bg-background`, `bg-surface`
  - `border-foreground/10` (or nearby existing border tokens already used in the repo)
- Avoid introducing new colors, fonts, or custom shadows.

## Motion
- Motion should **support** readability.
- Use short, consistent reveals (small stagger).
- Respect reduced-motion (content remains visible/usable).

## Accessibility
- Semantic heading (`h1`) for the hero title.
- Buttons/links have visible focus states (already handled by `Button`).
- External links remain descriptive (no “click here”).

## Performance
- Avoid unnecessary re-renders.
- Keep markup shallow.
- No layout shift: consistent padding, stable grid.

## Iteration checklist
1. Hero clears fixed header at all breakpoints.
2. Headline + description feel “first” (not buried).
3. Profit split callout reads in one pass.
4. WhatsApp is visually primary; Instagram is secondary.
5. CTA layout looks intentional on mobile + desktop.
6. No redundant hero modules above the listings.

## Iteration log
- v1: Hero content moved into `ShopListingsSection` (replacing generic page header)
- v2 (current): Refine hero layout: right column stacks callout + tailor-made note; CTA row/grid improved; add header offset
