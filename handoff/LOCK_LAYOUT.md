# Layout Lock Contract

## Protected Directories
The following directories define the structural integrity of the site and must NOT be modified by content injection agents:
- `/app/layout.tsx`
- `/components/layout/**`
- `/components/primitives/**`
- `/styles/globals.css` (except for token values if strictly necessary)

## Safe Injection Zones
Content injection is permitted ONLY within:
- String literals in `/components/sections/**` (mapped via `COMPONENT_SLOT_MAP.json`)
- `/content/**` (if used for dynamic data)
- `/styles/tokens.css` (only for brand color/font updates, NOT spacing/layout)

## Layout Definitions
- **Layout Change**: Any modification to CSS grid/flex properties, padding/margin classes, or DOM nesting structure.
- **Content Update**: Changing text strings, image `src` attributes, or `href` targets.

**INJECTORS MUST ONLY PERFORM CONTENT UPDATES.**
