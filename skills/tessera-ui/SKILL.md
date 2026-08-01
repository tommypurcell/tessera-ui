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

Choose the closest existing component. If the request is ambiguous, present the strongest few
matches and ask the user only when the choice would materially change the result.

When visual comparison would improve the choice, read
`https://www.tessera-ui.com/screenshots/manifest.json`, match `componentId` and `variantId`, and
inspect the listed screenshot URL. Treat screenshots as optional supporting evidence after text
discovery, not as a requirement for installing a known component.

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
2. Adapt imports, content, behavior, and styling to the surrounding project without treating the
   copied file as an immutable package.
3. Run the project's relevant formatter, lint, typecheck, tests, and build.
4. Report the installed path, variant, dependencies, verification results, and any remaining
   integration work.

## Troubleshoot

- If the CLI requires a variant, rerun `info <component-id> --json` and pass one returned variant
  with `--variant`.
- If a destination exists, preserve it and report the conflict. Use `--overwrite` only with clear
  authorization.
- If the packaged registry is unavailable, reinstall the npm package or use an approved hosted
  registry through `--registry-url` or `TESSERA_UI_REGISTRY_URL`.
- If dependency installation fails, keep the copied source, report the failed package-manager
  command, and resolve the project's package-manager issue before retrying.
