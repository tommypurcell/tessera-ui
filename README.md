# Tessera UI

A copy-and-own Tailwind CSS component registry for product interfaces, marketing sites, and application workflows. Tessera installs editable component source directly into your project, similar to shadcn/ui.

## Quick start

Initialize a project:

```sh
npx tessera-ui@latest init
```

Search and inspect the registry:

```sh
npx tessera-ui@latest search "pricing table"
npx tessera-ui@latest info marketing-pricing
npx tessera-ui@latest preview marketing-pricing --variant pricing-2
```

Install a component:

```sh
npx tessera-ui@latest add application-buttons
```

When a collection has multiple options, select one interactively or pass it explicitly:

```sh
npx tessera-ui@latest add application-buttons --variant buttons-1
```

The command previews every file and dependency before writing. Installed source is placed in `components/ui` by default and belongs to your project—you can edit it directly.

## React props and states

Run `info <component-id> --json` to inspect the exact props supported by each variant. Prop metadata includes the TypeScript type, whether it is required, its default, a description, and an example.

Generated React variants preserve their original UI when rendered without props. They also accept `children`, `renderContent`, `before`, and `after` for composition, plus explicit `loading`, `empty`, and `error` states with replaceable state content. Components that already model structured data—such as chat bubbles, navigation, marquees, and transcript ribbons—retain their specialized props.

## Configuration

`init` creates `tessera-ui.json`:

```json
{
  "schemaVersion": 1,
  "componentDirectory": "components/ui",
  "typescript": true,
  "tailwind": true,
  "aliases": {
    "components": "@/components"
  }
}
```

Set `registryUrl` to use a deployed Tessera registry. You can also pass `--registry-url` or set `TESSERA_UI_REGISTRY_URL`. Without a remote URL, the CLI uses its verified packaged registry so installation also works offline.

Useful installation flags:

```sh
npx tessera-ui@latest add application-buttons --dry-run
npx tessera-ui@latest add application-buttons --format html
npx tessera-ui@latest add application-buttons --directory src/components/ui
npx tessera-ui@latest add application-buttons --overwrite
npx tessera-ui@latest add application-buttons --skip-deps
```

The CLI detects npm, pnpm, Yarn, or Bun from the target project lockfile when a component declares package dependencies.

## Match your brand (theming)

Tessera can learn your site's design tokens (colors, radius, fonts, shadows) and apply them to installed components through a CSS-variable layer — the copied component source is never rewritten, so components stay yours to edit and simply inherit your brand.

There are two ways to supply your design.

**1. You already have a `design.md` (or `design.json`).** It's treated as authoritative:

```sh
npx tessera-ui@latest theme scan       # auto-detects design.md and imports it
npx tessera-ui@latest theme import ./docs/design.md
```

A `design.md` can carry tokens as a fenced ` ```json ` block, a fenced ` ```css ` block of custom properties, or a simple table:

```md
| Token       | Value                        |
| ----------- | ---------------------------- |
| Brand color | #4f46e5                      |
| Radius      | 0.5rem                       |
| Font        | Inter, system-ui, sans-serif |
```

**2. Let the CLI scan your codebase.** It reads (in priority order) your Tailwind config, Tailwind v4 `@theme` / `:root` CSS variables, class-usage frequency, and font imports. It never invents values — every proposed token cites its evidence, and anything ambiguous becomes a question for review:

```sh
npx tessera-ui@latest theme scan       # writes tessera-theme.proposed.json
```

The proposal is written for **your agent to confirm or correct** before it's trusted. Have the agent review/edit `tessera-theme.proposed.json` (resolving the `_review.questions`), then:

```sh
npx tessera-ui@latest theme confirm    # promotes the proposal into tessera-ui.json
npx tessera-ui@latest theme show       # print the active/proposed theme
npx tessera-ui@latest theme eject      # write theme.css (@theme + :root vars)
```

Import the generated `theme.css` in your global stylesheet (`@import './theme.css';`). After a theme is confirmed, `add` refreshes `theme.css` automatically; if an unconfirmed proposal exists, `add` reminds you to run `theme confirm`.

Freshly installed components ship literal palette classes (e.g. `bg-indigo-600`), so run `theme apply` to rewrite the installed files to read your theme variables (with the original value kept as a fallback). It only touches files already copied into your project and is idempotent:

```sh
npx tessera-ui@latest theme apply
```

Confirming a theme upgrades `tessera-ui.json` to `schemaVersion: 2` with a `theme` block; v1 configs are still read.

## Agent skill

An agent-ready workflow for safe, non-interactive component discovery and installation is included at [`skills/tessera-ui/SKILL.md`](./skills/tessera-ui/SKILL.md). It ships in the npm package alongside the CLI.

## Visual previews

Every installable variant has a generated desktop screenshot. `search` returns a representative preview, while `info`, `preview`, `plan`, and `add` return the exact URL for the selected variant. JSON output exposes the same URLs for agents. The complete index remains available at [`/screenshots/manifest.json`](https://www.tessera-ui.com/screenshots/manifest.json).

Regenerate and verify previews locally:

```sh
pnpm screenshots:generate
pnpm screenshots:verify
```

## Local development

```sh
pnpm install
pnpm dev
```

Use `pnpm release:check` before publishing. The site is statically exported to `out/`.

## Attribution

Tessera UI started from HyperUI. Mark Mead holds the copyright to HyperUI's original component catalog and released it under the MIT License.

Tessera extends that foundation with a Next.js catalog, structured component metadata, React and TypeScript variants, agent-facing registry artifacts, validation and packaging tools, and a copy-and-own CLI. See NOTICE for full attribution.

## License

Available under the [MIT License](./LICENSE).
