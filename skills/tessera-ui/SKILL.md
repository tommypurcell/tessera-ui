---
name: tessera-ui
description: Discover, inspect, plan, install, and validate editable Tessera UI components with the tessera-ui npm CLI. Use when an agent needs to add an exact Tailwind, React, TypeScript, or HTML component through npx; search the Tessera registry by intent; choose a component variant; or safely copy component source into a project's own folder structure.
---

# Tessera UI

Use the `tessera-ui` npm CLI as a copy-and-own component installer. Install only the selected
source file and its declared dependencies, then edit the installed file directly in the target
project.

## Work safely

- Run commands from the target project's root.
- Inspect the worktree before writing. Preserve unrelated and existing changes.
- Prefer `npx tessera-ui@latest`; do not add `tessera-ui` as a runtime dependency.
- Use JSON output for discovery and planning when parsing results programmatically.
- Match the project's design before installing (see "Match the project's design"). Installed
  components ship neutral defaults; without a confirmed theme they will not match the user's
  colors, radius, or fonts, and you will end up hand-editing the source to fit.
- Select an explicit variant in non-interactive sessions.
- Preview the exact destinations and dependencies before installation.
- Do not use `--overwrite` unless the user explicitly wants an existing file replaced and the
  current file has been reviewed or backed up.
- Do not use `--skip-deps` unless dependencies are already satisfied or the user requests it.

## Initialize the project

Inspect the framework, source layout, lockfile, TypeScript use, Tailwind setup, and any existing
`tessera-ui.json`. If no configuration exists, initialize it:

```sh
npx tessera-ui@latest init
```

The default destination is `components/ui`. For a source-directory layout, configure it
explicitly:

```sh
npx tessera-ui@latest init --directory src/components/ui
```

Never replace an existing `tessera-ui.json` automatically. Read it and honor its
`componentDirectory`, `typescript`, and registry settings.

## Match the project's design

`init` only records where to put files and whether the project uses TypeScript and Tailwind. It
does **not** read the project's colors, spacing, typography, or existing components. Installed
components therefore ship neutral defaults. Do this step before installing so components inherit
the user's brand instead of forcing you to rewrite their source afterward.

Tessera applies a project's design through a CSS-variable layer: components read canonical
variables (`--color-brand`, `--color-brand-fg`, `--color-surface`, `--radius`, `--font-sans`,
`--font-mono`, `--shadow`) with fallbacks, so theming never rewrites the copied source. `eject`
writes those variables into a `theme.css` the project imports once.

There are two ways to supply the design; check for an existing design document first.

**If the project already documents its design** (`design.md`, `design.json`, or `docs/design.md`),
it is authoritative — import it directly, no review needed:

```sh
npx tessera-ui@latest theme scan --json      # auto-detects and imports a design doc if present
# or point at it explicitly:
npx tessera-ui@latest theme import ./docs/design.md --json
```

A `design.md` may carry tokens as a fenced `json` block, a fenced `css` block of custom
properties, or a simple `| Label | Value |` table.

**Otherwise, scan the codebase.** The scanner reads, in priority order, the Tailwind config,
Tailwind v4 `@theme` / `:root` CSS variables, class-usage frequency, and font imports. It never
invents values: every proposed token cites its evidence, and anything ambiguous (e.g. two close
brand-color candidates, or a missing font) becomes an entry under `_review.questions`.

```sh
npx tessera-ui@latest theme scan --json      # writes tessera-theme.proposed.json
```

Scanning does not apply anything on its own — it writes `tessera-theme.proposed.json` for review.
This is the confirmation step: read `_review.confidence`, `_review.evidence`, and
`_review.questions`, correct any token values, resolve the questions, and — when the user's input
is needed to resolve an ambiguous or missing token — ask the user before confirming. Then promote
it:

```sh
npx tessera-ui@latest theme confirm --json   # writes the theme into tessera-ui.json (schemaVersion 2)
npx tessera-ui@latest theme show --json      # inspect the active/proposed theme at any time
npx tessera-ui@latest theme eject            # write theme.css (@theme + :root variables)
```

`theme eject` also auto-imports the generated `theme.css` into the project's global stylesheet
(the file that loads Tailwind, e.g. `app/globals.css`), inserting `@import './theme.css';` right
after the Tailwind import. This is idempotent and skips a stylesheet that already imports it; pass
`--no-link` to skip it and wire the import yourself. Without this import the variables never load
and nothing renders differently. Once a theme is confirmed, `add` refreshes `theme.css`
automatically; if an unconfirmed proposal is present, `add` reminds you to run `theme confirm`.

Registry components ship with literal palette classes (e.g. `bg-indigo-600`), so a freshly
installed component does not read the theme variables until you rewrite it. After installing
components, run `theme apply` to rewrite the **installed** files so their brand/radius/font classes
read the CSS variables (with the original value kept as a fallback):

```sh
npx tessera-ui@latest theme apply --json     # rewrites files in the component directory
```

This only edits files already copied into the project, never the registry, and is idempotent.
After `theme apply` plus an imported `theme.css`, installed components inherit the brand instead of
showing their default palette.

Skip this step only when the user explicitly wants the neutral defaults, or the project has no
discernible design system yet.

## Discover the exact component

Search by the user's intent rather than guessing an identifier:

```sh
npx tessera-ui@latest search "pricing table" --json
```

Use `list --json` when broad enumeration is needed. Inspect the best candidates, including their
intended and discouraged use cases and available variants:

```sh
npx tessera-ui@latest info marketing-pricing --json
```

Read each variant's `props` before installing it. Every prop includes its TypeScript type,
required status, default, description, and example. Generated variants support content slots and
explicit `default`, `loading`, `empty`, and `error` states; specialized variants expose their own
data props. Omitting optional props preserves the original component UI.

Choose the closest existing component. If the request is ambiguous, present the strongest few
matches and ask the user only when the choice would materially change the result.

The CLI returns screenshot URLs during discovery: `search --json` includes a representative
preview, while `info --json` includes the exact URL for every variant. To retrieve one directly,
run `npx tessera-ui@latest preview <component-id> --variant <variant-id> --json`.

The CLI returns a URL, not image bytes — a raw image URL is not viewable inline. To actually see a
variant, download the image and then open the downloaded file:

```sh
curl -sL "<screenshotUrl>" -o preview.jpg
# then open/read preview.jpg to view the pixels
```

Treat screenshots as optional supporting evidence after text discovery, not as a substitute for
reading the component description and requirements. The complete screenshot index is also available
at `https://www.tessera-ui.com/screenshots/manifest.json`.

## Plan before writing

Choose `tsx` for React TypeScript projects and `html` for plain HTML projects. Pass the exact
variant returned by `info`:

```sh
npx tessera-ui@latest plan application-buttons \
  --variant buttons-1 \
  --format tsx \
  --json
```

Confirm that every destination stays inside the intended component directory. Review declared
npm dependencies and ensure the detected package manager matches the project's lockfile. Use
`add ... --dry-run` when a human-readable plan is more useful.

## Install one selected variant

Repeat the reviewed component, variant, format, and directory exactly. Use the CLI's `--yes` flag
to avoid an interactive confirmation in agent sessions:

```sh
npx tessera-ui@latest add application-buttons \
  --variant buttons-1 \
  --format tsx \
  --yes
```

The CLI verifies the source checksum, refuses to replace existing files by default, writes the
selected source into the project, and installs declared dependencies using npm, pnpm, Yarn, or
Bun based on the target lockfile.

## Validate and integrate

Validate with the same selection options used during installation:

```sh
npx tessera-ui@latest validate application-buttons \
  --variant buttons-1 \
  --format tsx
```

Then:

1. Inspect the installed source and resulting dependency changes.
2. Prefer the documented props for content and behavior changes. Edit the copied source when the
   required customization is intentionally outside that API.
3. Run the project's relevant formatter, lint, typecheck, tests, and build.
4. Report the installed path, variant, dependencies, verification results, and any remaining
   integration work.

## Troubleshoot

- If `theme scan` reports no sources or few tokens, the project has little to infer from: set the
  missing tokens by editing `tessera-theme.proposed.json` (or ask the user) before `theme confirm`,
  or have the user provide a `design.md`.
- If `theme confirm` reports no proposal, run `theme scan` first; if `theme eject` reports no active
  theme, run `theme confirm` first.
- If the CLI requires a variant, rerun `info <component-id> --json` and pass one returned variant
  with `--variant`.
- If a destination exists, preserve it and report the conflict. Use `--overwrite` only with clear
  authorization.
- If the packaged registry is unavailable, reinstall the npm package or use an approved hosted
  registry through `--registry-url` or `TESSERA_UI_REGISTRY_URL`.
- If dependency installation fails, keep the copied source, report the failed package-manager
  command, and resolve the project's package-manager issue before retrying.
