# Background Surfaces Audit (3-surface system)

Goal: Use exactly three background surface types across the site.

- **Light Blue**: primary ambient page surface (calm, airy)
- **White**: content/paper surface (clarity, reading)
- **Light Yellow**: warm hero/feature surface (welcome, optimism)

## Where surfaces are used today
- `bg-background`: used on body and some cards (`VisionStatsSection`), and in header translucency.
- `bg-secondary`: used for section backgrounds (footer, campaign, program highlight, etc.).
- `bg-surface`: used for outlines / paper-like components.
- `background-soft`: used specifically for hero.

## Current token mapping
- `--background` (light blue): `#e6f2fb`
- `--secondary`: `var(--background)` (same light blue)
- `--surface` (white): `#ffffff`
- `--background-soft` (light yellow): `#fff3ea`

## Criteria of excellence
1. **Distinctness**: At a glance, blue vs white vs yellow are clearly different.
2. **Contrast**: Body text stays readable (foreground vs each surface).
3. **Hierarchy**: White reads as the “card/paper” layer above blue/yellow.
4. **Brand warmth**: Yellow feels welcoming, not orange-heavy.
5. **Consistency**: Section backgrounds use `secondary`; cards use `surface` or `background` deliberately.
6. **Compatibility**: Existing gradients/aurora overlays look intentional on each surface.

## Suggested iteration approach
- Keep three-surface mapping as-is (background/secondary = light blue; surface = white; background-soft = light yellow).
- Only tune the two non-white surfaces until:
  - The blue surface reads slightly more blue than gray.
  - The yellow surface reads warm without overpowering the brand colors.
- Avoid changing `--foreground` unless contrast issues appear.

## Next iteration (applied)
- Slightly increase the blue tint for `--background` while keeping it very light.
- Keep `--background-soft` as a pale warm yellow.
