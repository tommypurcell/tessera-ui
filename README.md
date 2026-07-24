# Tessera UI

An open-source collection of Tailwind CSS components for product interfaces, marketing sites, and application workflows.

Built with Next.js and React. All active UI routes and components are JSX.

## Use the components

1. Browse the catalog.
2. Copy the markup for a component.
3. Adapt it in your Tailwind CSS project.

## Component authoring

New registry React components use Tailwind utilities as their primary styling API. Use custom CSS only when a utility cannot express the requirement, such as isolated preview documents or a genuinely custom animation. Keep building blocks small and composable so they can be assembled into larger product components.

## Run locally

```shell
pnpm install
pnpm dev
```

The app runs at [http://localhost:3000](http://localhost:3000). Use `pnpm build` to create the static export in `out/`.

## License

This project is available under the MIT License. See [LICENSE](./LICENSE).
