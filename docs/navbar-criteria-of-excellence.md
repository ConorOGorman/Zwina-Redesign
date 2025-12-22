# Navbar — criteria of excellence (Zwina)

Date: 21 Dec 2025

This document defines what “excellent” looks like for the site navigation (`components/layout/Header.tsx`).

## Success definition (5‑second test)
A first-time visitor should be able to:

1. Instantly recognize the brand (logo legible, stable, not “jumpy”)
2. See the primary routes (clear labels + spacing)
3. Find Cart and Language quickly
4. Navigate on mobile with one thumb (menu is obvious and easy to close)

## Visual hierarchy (calm + confident)
- Header feels light: no heavy boxes inside boxes, no noisy gradients.
- Navigation links are readable at a glance (uppercase + tracking, but not too faint).
- Active route is obvious without shouting (subtle pill/underline + color).
- Right-side utilities (Language + Cart) look like tools, not CTAs.

## Interaction & motion
- Hover states are subtle and consistent (same easing/duration, no “liquid” effects).
- No layout shift on hover (header height never changes).
- Clear focus rings for keyboard users; all controls are tabbable in a logical order.
- Mobile menu opens/closes smoothly, supports `Escape`, and closes on route change.
- Respect `prefers-reduced-motion`.

## Responsiveness
- Desktop: links in-line; utilities grouped on the right.
- Tablet: links remain readable; spacing collapses gracefully.
- Mobile: menu button is prominent; menu items have generous tap targets (≥44px).

## Internationalization
- Language switcher is always visible (desktop) and accessible in the mobile menu.
- Switching language updates UI copy consistently across pages.
- Missing translations fall back gracefully to English (never show raw keys).

## Performance
- No continuous animations in the header.
- Avoid expensive blur/filters beyond what’s already used for the sticky header.

