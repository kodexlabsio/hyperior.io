<p align="center">
<a target="_blank" href="https://kodexlabs.io/"><img width="150" height="150" src="./.kodex/icons/logo-icon.svg"></a>
</p>
<p align="center">
<a href="https://github.com/kodexlabsio/hyperior.io/actions/workflows/deploy.yml"><img src="https://github.com/kodexlabsio/hyperior.io/actions/workflows/deploy.yml/badge.svg" alt="Deploy to GitHub Pages"></a>&nbsp;<a href="https://svelte.dev/" target="_blank"><img src="https://img.shields.io/badge/Svelte-FF3E00?logo=svelte&logoColor=white" alt="Svelte"></a>&nbsp;<a href="https://vite.dev/" target="_blank"><img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="Vite"></a>
<br />
<a href="https://hyperior.io/" target="_blank">hyperior.io</a>
</p>

Landing page for [Hyperior Limited](https://hyperior.io), a UK joint venture between [Kodex Labs Ltd](https://kodexlabs.io) and [Atlantic Cedar Limited](https://www.atlanticcedar.com).

## Development

```bash
npm i                # install dependencies
npm run dev          # start the dev server
npm run build        # build for production (outputs to dist/)
npm run preview      # preview the production build
npm run check        # type-check the project
npm run lint         # lint with ESLint
npm run format       # format with Prettier
npm run format:check # verify formatting without writing
```

## Project structure

```
src/
├── App.svelte            # Root component — centred logo with ambient glow
├── main.ts               # Entry point; mounts the app
├── app.css               # Global styles and CSS custom properties
└── lib/
    └── assets/           # Logo SVGs
public/
├── favicon.ico           # Generated from the Hyperior icon (16/32/48 px)
└── favicon.svg           # Hyperior icon SVG
```

## Code style

Linting uses [ESLint](https://eslint.org/) (flat config in `eslint.config.mjs`) with `typescript-eslint` and `eslint-plugin-svelte`. Formatting uses [Prettier](https://prettier.io/) (`.prettierrc`) with `prettier-plugin-svelte` and `prettier-plugin-organize-imports`; `eslint-config-prettier` defers all formatting rules to Prettier.
