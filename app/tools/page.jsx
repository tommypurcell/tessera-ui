import Link from 'next/link'
import { getTools } from '../../src/lib/content'
import { SEO_DESCRIPTION_TOOLS, SEO_TITLE_TOOLS } from '../../src/constants/seo'
import BaseHero from '../ui/BaseHero'

export const metadata = { title: SEO_TITLE_TOOLS, description: SEO_DESCRIPTION_TOOLS, alternates: { canonical: '/tools' } }

export default function ToolsPage() {
  const tools = getTools().sort((a, b) => (a.href ?? a.title).localeCompare(b.href ?? b.title))
  return <><BaseHero title="Tools" description="Browser-based tools for generating, checking, and adapting reusable Tailwind CSS components." /><main id="main-content" className="mx-auto max-w-7xl px-4 py-10"><ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{tools.map((tool) => <li key={tool.id} className="rounded-lg border border-gray-200 bg-white p-6"><span className="inline-flex rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">{tool.status === 'coming-soon' ? 'Coming soon' : 'Beta'}</span><h2 className="mt-4 text-xl font-semibold">{tool.title}</h2><p className="mt-2 text-sm leading-6 text-gray-600">{tool.description}</p>{tool.href && <Link href={tool.href} className="mt-5 inline-flex text-sm font-medium text-gray-950 underline underline-offset-4">Open tool</Link>}</li>)}</ul></main></>
}
