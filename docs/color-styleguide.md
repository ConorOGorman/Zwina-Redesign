# Color Style Guide (Tokens)

This project uses CSS variables (design tokens) defined in `styles/tokens.css` and mapped into Tailwind in `tailwind.config.ts`.

## Core surfaces
- `background`: default page background
- `surface`: cards / panels on top of background
- `secondary`: section background blocks (soft tint)
- `background-soft`: hero/featured soft background tint

## Text
- `foreground`: primary text color
- `muted-foreground`: secondary text (descriptions, captions)

## Brand
- `accent`: primary brand/interaction color (used by primary buttons)
- `primary`: secondary brand highlight (links/hover accents)

## Usage rules (keep it clean)
- Prefer `border-foreground/10` (or `/15`) over `border-black/...`.
- Prefer `bg-foreground/5` (or `/10`) over `bg-black/...` for subtle panels/placeholders.
- For overlays, prefer `bg-foreground/35` instead of pure black.
- Avoid introducing new hex colors in components—use tokens or Tailwind opacity on token colors.
