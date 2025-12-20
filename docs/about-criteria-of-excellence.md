# About page — criteria of excellence (Zwina)

Date: 20 Dec 2025

This document defines what “excellent” looks like for the About page in this repo.

## Success definition (15‑second test)
A first-time visitor should be able to answer, in under ~15 seconds (without scrolling much):

1. What you do
2. Where you work
3. How you create impact
4. Why you’re credible
5. How to help (donate/volunteer/partner)

## Information architecture (must match)
The page must remain a set of scannable modules (not an essay):

1. Hero: 1 sentence + 2 primary actions
2. “On this page” anchor bar under hero
3. At a glance: 3–4 short facts (not paragraphs)
4. Mission and model: Mission (2–3 lines) + “How we work” (3 steps)
5. Values: max 5 chips
6. Proof of work: 1 featured initiative + outcomes + link to Projects
7. Team: 3–6 person cards max + link for more
8. Transparency: 3 link/cards
9. Final CTA band: 1 ask + 2 actions (+ optional email capture)

## Content completeness (non-negotiable)
All text content from the current live About page must appear somewhere on the page.

Minimum coverage checklist:
- Origin story blocks: “From Students to Changemakers”, “With no funding…”, “Our first steps were small but meaningful…”, “Underlying everything is a simple belief…”
- Approach pillars: Decentralised Leadership, Sustainability, Youth Activation, Low‑Cost High‑Impact, Collaborative Growth (titles + their descriptions)
- Team content: names, roles, bios, locations
- Newsletter block: heading + description + Subscribe CTA
- Join/CTA copy: “Join Us in Rethinking Development” + “Whether you donate…”

## Visual consistency (design system)
- Use existing primitives only: `Section`, `Container`, `Typography`, `Button`, `Link`, and existing tokens.
- Borders/dividers: prefer `border-foreground/10` + `bg-surface` / `bg-background` / `bg-secondary`.
- Typography: headings use `Typography` variants; body copy should use `text-muted-foreground` consistently.
- Buttons: only existing variants (`primary`, `outline`, `ghost`) with existing motion effects.

## Motion excellence (Framer Motion)
Motion should feel cohesive and intentional, not random.

Required:
- Section/module entrances: consistent reveal (same easing, similar distance), ideally staggered within grids.
- Reduced motion: everything must remain readable/usable with reduced-motion (no hidden text).
- Performance: avoid heavy continuous animations; prefer in-view reveals.

Suggested pattern (house style):
- Use `Reveal` for modules and cards.
- Use `AnimatedTextReveal` for short hero/mission lines only (not long paragraphs).
- Prefer `once={true}` for reveals to reduce distraction.

## Accessibility
- Anchor navigation should work with keyboard and screen readers.
- Headings should be semantically correct and in order.
- Images must have meaningful `alt` text.
- Links must be descriptive (no “click here”).

## Performance & UX
- Maintain fast initial readability (no scroll-gated text effects for mission/hero).
- Keep cards content short; push longer copy into clearly labeled story blocks.
- Avoid layout shift: set image containers with fixed aspect ratios.

## Iteration log
### v1 (baseline)
- Page rebuilt into the new module IA.
- All live About-page text present.

### v2 (motion + consistency)
Targets:
- Apply consistent `Reveal`/stagger across all modules.
- Use `AnimatedTextReveal` only where it improves polish (hero subheading, mission line).
- Enforce team constraint: max 3–6 cards, move remaining bios into a compact “Additional team” list.
