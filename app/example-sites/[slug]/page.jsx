import { notFound } from 'next/navigation'

import { AgentWorkspaceClosingCta } from '../../../registry/components/marketing/rebuilt-sections/tsx/AgentWorkspaceClosingCta'
import { AgentWorkspaceHero } from '../../../registry/components/marketing/rebuilt-sections/tsx/AgentWorkspaceHero'
import { AgentWorkspacePricing } from '../../../registry/components/marketing/rebuilt-sections/tsx/AgentWorkspacePricing'
import { AgentWorkspaceTrustStrip } from '../../../registry/components/marketing/rebuilt-sections/tsx/AgentWorkspaceTrustStrip'
import { AgentWorkspaceWorkflow } from '../../../registry/components/marketing/rebuilt-sections/tsx/AgentWorkspaceWorkflow'
import { DocsSiteWorkspace } from '../../../registry/components/marketing/rebuilt-sections/tsx/DocsSiteWorkspace'
import { OpsDashboardWorkspace } from '../../../registry/components/application/rebuilt-dashboard/tsx/OpsDashboardWorkspace'
import { getExampleSite, getExampleSites } from '../../../src/data/example-sites'

export function generateStaticParams() {
  return getExampleSites().map((site) => ({ slug: site.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const site = getExampleSite(slug)
  if (!site) {
    return {}
  }

  return {
    title: `${site.title} | Example Websites`,
    description: site.description,
  }
}

function AgentWorkspaceSite() {
  return (
    <div className="bg-white">
      <main id="main-content">
        <AgentWorkspaceHero />
        <AgentWorkspaceTrustStrip />
        <AgentWorkspaceWorkflow />
        <AgentWorkspacePricing />
        <AgentWorkspaceClosingCta />
      </main>
    </div>
  )
}

function OpsConsoleSite() {
  return (
    <div className="bg-white">
      <main id="main-content">
        <OpsDashboardWorkspace />
      </main>
    </div>
  )
}

function DocsSite() {
  return (
    <div className="bg-white">
      <main id="main-content">
        <DocsSiteWorkspace />
      </main>
    </div>
  )
}

export default async function ExampleSitePage({ params }) {
  const { slug } = await params
  const site = getExampleSite(slug)

  if (!site) {
    notFound()
  }

  if (slug === 'agent-workspace') {
    return <AgentWorkspaceSite />
  }

  if (slug === 'ops-console') {
    return <OpsConsoleSite />
  }

  if (slug === 'docs-site') {
    return <DocsSite />
  }

  notFound()
}
