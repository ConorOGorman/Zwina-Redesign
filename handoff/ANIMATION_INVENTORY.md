# Animation Inventory

## Global Motion Tokens
Defined in `/styles/tokens.css`:
- `--motion-duration-fast`: 200ms
- `--motion-duration-normal`: 300ms
- `--motion-duration-slow`: 500ms
- `--motion-ease-default`: cubic-bezier(0.4, 0, 0.2, 1)

## Component Animations
### Primitives
- **Button**: `transition-colors` on hover/focus.
- **Link**: `transition-colors` on hover.

### Sections
- **ProductCarouselSection**:
  - Image hover overlay: `opacity-0 group-hover:opacity-100 transition-opacity`
  - Title hover color: `group-hover:text-[var(--primary)]`
- **PartnersLogosSection**:
  - Grayscale toggle: `opacity-70 grayscale hover:grayscale-0 transition-all duration-500`
- **ProjectsGridSection**:
  - Card hover shadow: `hover:shadow-lg transition-shadow`

## DO NOT TOUCH
Injectors must preserve all `transition-*`, `duration-*`, `ease-*`, and `animate-*` classes.
