# Little Lemon — Static React Design

A component-based, responsive restaurant landing page built with React, TypeScript/Vite entry point, JSX components, and plain CSS.

## Run locally

1. Install Node.js (Node 20.19+ or a compatible version for the Vite version in `package.json`).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown in the terminal.

## Build

Run `npm run build` to check TypeScript and create the production build in `dist/`.

## Component structure

- `src/App.tsx` — combines the page sections.
- `src/components/Header.jsx` — brand and static anchor navigation.
- `src/components/Hero.jsx` — main introduction section.
- `src/components/Specials.jsx` — menu cards rendered from data.
- `src/components/SectionHeading.jsx` — reusable section heading.
- `src/components/Testimonials.jsx` — guest review cards.
- `src/components/About.jsx` — restaurant story.
- `src/components/Visit.jsx` — address and opening hours.
- `src/components/Footer.jsx` and `Brand.jsx` — footer and reusable logo.
- `src/data/menuItems.js` — menu data kept separate from presentation.
- `src/index.css` — design tokens, layout, typography and responsive styles.

## Scope

This is intentionally a static visual design: there are no React state hooks, booking forms, API calls, shopping/cart behavior, or other dynamic interactions. The navigation uses normal page-section anchors only.
