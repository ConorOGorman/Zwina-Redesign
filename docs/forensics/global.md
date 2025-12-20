# Global Design Forensics

## Tokens
### Colors
- Primary: `#d97706` (Amber-600) - Inferred from "Zwina" context and typical NGO warmth.
- Secondary: `#f3f4f6` (Gray-100) - Light background for sections.
- Background: `#ffffff`
- Foreground: `#1a1a1a`

### Typography
- Headings: `Inter` (Bold/Semibold)
- Body: `Inter` (Regular)

### Spacing
- Section Padding: `py-16 md:py-24` (Large), `py-12 md:py-16` (Medium)
- Container Max Width: `max-w-7xl`

## Layout System
- Grid: 12-column implied, implemented via Flexbox and CSS Grid (`grid-cols-1 md:grid-cols-3`, etc.)
- Breakpoints: Tailwind defaults (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)

## Motion
- Hover effects: Simple opacity/color transitions (`transition-colors`, `transition-opacity`).
- Duration: ~300ms default.
