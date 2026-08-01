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

## Agent skill

An agent-ready workflow for safe, non-interactive component discovery and installation is included at [`skills/tessera-ui/SKILL.md`](./skills/tessera-ui/SKILL.md). It ships in the npm package alongside the CLI.

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
