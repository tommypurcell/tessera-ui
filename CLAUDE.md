# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

Tailwind CSS v4, Astro 6, Cloudflare Pages (via Wrangler), Playwright (E2E tests). No package to install for end users — this repo is the documentation site for the component library.

## Commands

```bash
pnpm dev                          # start dev server (also runs wrangler types first)
pnpm run css:component --watch    # compile component preview CSS (run alongside dev)
pnpm run css:blog                 # compile blog CSS (one-off)
pnpm build                        # production build
pnpm test                         # run Playwright E2E tests (requires dev server running)
pnpm lint                         # ESLint
pnpm format                       # Prettier
pnpm run generate:git-metadata    # regenerate src/data/git-metadata.json from git history
```

## Architecture

### Content Collections

Components are defined in MDX files under `src/content/collection/{application,marketing,neobrutalism}/`. Each MDX file's frontmatter declares the collection metadata and a `components` array — each entry in that array corresponds to a numbered HTML file. The MDX body is minimal (typically just a `<BaseHero>` import).

The three categories map to Astro content collections defined in `src/content.config.ts`, which also reads `src/data/git-metadata.json` to attach `updated` (commit + date) metadata to each collection entry.

### Component HTML Files

The actual component markup lives in `public/examples/{category}/{slug}/{n}.html` (light) and `public/examples/{category}/{slug}/{n}-dark.html` (dark). These are standalone HTML pages loaded in iframes by the `<component-preview>` custom element.

Dark variants can be generated using the browser-based dark mode generator tool at `/tools/dark-mode-generator`.

### Preview System

`ComponentPreview.astro` defines a `<component-preview>` custom element. Preview controls (breakpoints, copy, view toggle, direction) are separate custom elements that communicate with `<component-preview>` via namespaced `CustomEvent`s on `document`, keyed by the component's src path (e.g., `preview:copy:/examples/application/accordions/1.html`).

### Page Routing

- `/components/{category}` → `src/pages/components/{category}/index.astro`
- `/components/{category}/{slug}` → `src/pages/components/{category}/[...slug].astro` → `ComponentPost.astro` layout
- `/blog/{slug}` → MDX content from `src/content/blog/`

### Adding a New Component

1. Add an entry to the `components` array in the relevant MDX file under `src/content/collection/`.
2. Create the corresponding HTML file(s) in `public/examples/{category}/{slug}/`.
3. If dark mode is supported, add `dark: true` to the frontmatter entry and provide a `{n}-dark.html` file.

### Theme system (CLI)

The `tessera-ui theme` command learns a project's design tokens and applies them to installed components via a CSS-variable layer (no component-source rewriting). Code lives in `scripts/theme/`:

- `scan.mjs` — infers tokens from Tailwind config, v4 `@theme`/`:root` CSS, class-usage frequency, and font imports. Never invents values; ambiguity becomes a `questions[]` entry.
- `import-design.mjs` — parses an authoritative `design.md`/`design.json` (json/css fenced blocks + label tables).
- `tokens.mjs` — shared token vocabulary + `cssVariableMap` (the canonical `--color-brand`, `--radius`, `--font-sans`, … that themeable components read with fallbacks).
- `eject.mjs` — renders confirmed tokens into `theme.css` (`@theme` + `:root`).

Flow: `theme scan` writes `tessera-theme.proposed.json` (agent review) → `theme confirm` promotes it into `tessera-ui.json` (bumps to `schemaVersion: 2`, adds a `theme` block) → `theme eject` writes `theme.css`. A present `design.md` is authoritative and imported directly, skipping the review file. Tests are in `tests/cli.test.js` (`pnpm test:cli`).

## PR Title Format

```
<Feature|Bugfix|Update|Epic> - Description in sentence case
```
