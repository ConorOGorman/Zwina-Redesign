# Trusted By — Criteria of Excellence

## Purpose
A compact, credibility-building strip that quickly communicates legitimacy via recognizable partner/brand marks without distracting from the page’s primary CTA.

## Criteria of Excellence

### 1) Visual hierarchy & balance
- Headline (“Trusted By”) is present but secondary (caption-level, low contrast).
- Logos have consistent *optical weight* (not identical dimensions, but visually balanced).
- No single logo forces excessive whitespace or dominates the section.

### 2) Layout & spacing
- Section height stays compact on desktop and mobile (no large empty bands).
- Horizontal and vertical spacing are controlled independently (`gap-x` vs `gap-y`) so wrap doesn’t create huge vertical gaps.
- Logos remain centered and aligned across rows when wrapping.

### 3) Consistency
- Each logo sits within a consistent “slot” (same baseline/center alignment, similar max height).
- Opacity/hover behavior is consistent across all marks.

### 4) Responsiveness
- On small screens, logos wrap cleanly without overlapping.
- Largest logo is constrained by viewport (`max-w` guardrails) so it never breaks layout.
- Tap targets remain reasonable and content stays readable.

### 5) Accessibility
- Every logo image has an accurate `alt` (brand/partner name).
- Decorative-only marks would use empty alt, but partner logos should remain descriptive.

### 6) Performance & reliability
- Uses local assets (no flaky remote fetches).
- SVG/PNG/WebP handled via `next/image` with appropriate `sizes`.
- Avoids layout shifts (stable container sizing).

## Iteration notes
- If one logo needs emphasis (e.g., The Hague University), prefer increasing width and/or modest height within the same row height, rather than dramatically increasing container height (which increases the row’s line height and creates large vertical whitespace).
- Use `gap-x-*` + `gap-y-*` instead of a single `gap-*` when wrapping.
