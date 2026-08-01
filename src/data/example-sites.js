export const exampleSites = [
  {
    slug: 'agent-workspace',
    title: 'Agent Workspace',
    summary: 'A SaaS marketing site composed strictly from Tessera UI registry sections and marketing components.',
    description:
      'This example website is a portfolio-ready landing page composed strictly from Tessera UI registry sections and marketing components. It shows an agent using the open source library as the source of truth instead of creating bespoke interface sections.',
    category: 'SaaS landing page',
    componentsUsed: [
      'rebuilt-sections-agent-workspace-hero',
      'rebuilt-sections-agent-workspace-trust-strip',
      'rebuilt-sections-agent-workspace-workflow',
      'rebuilt-sections-agent-workspace-pricing',
      'rebuilt-sections-agent-workspace-closing-cta',
    ],
    route: '/example-sites/agent-workspace',
  },
  {
    slug: 'ops-console',
    title: 'Ops Console',
    summary: 'An operations dashboard composed strictly from Tessera UI application components and rebuilt dashboard sections.',
    description:
      'This example website is a dashboard-style application surface composed strictly from Tessera UI application components and rebuilt dashboard sections. It shows how an agent can build a denser, workflow-oriented interface while staying inside the component library.',
    category: 'Operations dashboard',
    componentsUsed: [
      'rebuilt-dashboard-ops-dashboard-workspace',
    ],
    route: '/example-sites/ops-console',
  },
  {
    slug: 'docs-site',
    title: 'Docs Site',
    summary: 'A documentation website composed strictly from Tessera UI application and marketing components.',
    description:
      'This example website is a documentation site shell composed strictly from Tessera UI components — a top bar, a grouped sidebar nav, prose content, a terminal-style code block, and a callout. It shows how an agent can assemble a content-first surface entirely from the component library.',
    category: 'Documentation site',
    componentsUsed: [
      'rebuilt-sections-docs-site-workspace',
    ],
    route: '/example-sites/docs-site',
  },
]

export function getExampleSites() {
  return exampleSites
}

export function getExampleSite(slug) {
  return exampleSites.find((site) => site.slug === slug) ?? null
}
