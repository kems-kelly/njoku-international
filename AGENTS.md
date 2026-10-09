# Njoku International website

- Vite + React, JavaScript only. Plain CSS with tokens in src/styles/variables.css.
- No Tailwind, no UI libraries, no animation library.
- All copy lives in src/data/content.js. Client-supplied copy is verbatim; lines marked DRAFT need client approval.
- Never invent company facts: clients, offices, certifications, stats, phone numbers, guarantees.
- Contact is mailto links only. No form unless a backend is added.
- Animations: CSS only, must respect prefers-reduced-motion.
- Run `npm run build` before every commit. Use conventional commit messages.
- Do not push to GitHub or deploy without asking.

DESIGN SYSTEM RULES

- Only use colors from variables.css. Never hardcode hex, rgb or hsl values in section CSS. If a new color is needed, ask first.
- All spacing uses a fixed scale defined as tokens (4, 8, 12, 16, 24, 32, 48, 64, 96, 128px). No arbitrary pixel values.
- Type scale is defined once as tokens (clamp-based). Only two font families: the serif for headings, Inter for body.
- Radius tokens: 4px and 8px only. One shadow token. One transition duration and easing token.
- Buttons: exactly two variants (primary, secondary), defined once in Button.jsx and reused everywhere.
- Section padding, container width and heading styles come from shared classes, not repeated per section.
