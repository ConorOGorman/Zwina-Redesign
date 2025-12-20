# Decisions Log

## Dependency Policy
- **Next.js**: Core framework for routing and server-side rendering.
- **Tailwind CSS**: Utility-first styling for rapid development and token mapping.
- **clsx / tailwind-merge**: Essential for robust class composition in reusable components.
- **Lucide React**: Lightweight icon library (used as placeholder for now).
- **Framer Motion**: Included for complex animations if needed (currently using CSS transitions for performance).

## Design Decisions
- **Tokens**: Extracted to `/styles/tokens.css` to allow for easy theming and handoff.
- **Section Architecture**: Strict separation of sections into `/components/sections` to enforce reuse and modularity.
- **Placeholder Content**: Used descriptive placeholders where exact copy/images were not available or required to be generic.

## Deviations
- **Exact Tokens**: Without direct DevTools access to the live site, tokens are inferred from standard design patterns and the "Zwina" brand context (warm, earthy tones). These should be updated in `tokens.css` with exact values during the first visual QA pass.
