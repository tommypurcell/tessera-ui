import { getCollection } from '../src/lib/content'
import { SEO_DESCRIPTION_SITE, SEO_TITLE_SITE } from '../src/constants/seo'
import CollectionFeature from './ui/CollectionFeature'

export const metadata = { title: SEO_TITLE_SITE, description: SEO_DESCRIPTION_SITE }

export default function HomePage() {
  const application = getCollection('application').slice(0, 9)
  const marketing = getCollection('marketing').slice(0, 9)
  const buildingBlocks = getCollection('building-blocks').slice(0, 9)
  const templates = getCollection('templates').slice(0, 9)
  const neobrutalism = getCollection('neobrutalism').slice(0, 9)

  return <main id="main-content">
    <section className="border-b border-gray-200 bg-white"><div className="mx-auto max-w-4xl px-4 py-14 text-center md:py-24"><p className="text-sm font-medium text-gray-600">Open source component registry</p><h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-950 md:text-7xl">Tessera UI</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Reusable Tailwind CSS components that people and coding agents can search, understand, and install.</p></div></section>
    <div className="mx-auto max-w-7xl divide-y divide-gray-200 px-4"><CollectionFeature title="Product UI" description="Components for product interfaces and application workflows." category="application" components={application} /><CollectionFeature title="Marketing Components" description="Components for marketing sites and landing pages." category="marketing" components={marketing} /><CollectionFeature title="Building Blocks" description="Small composable primitives for consistent product UI." category="building-blocks" components={buildingBlocks} /><CollectionFeature title="Templates" description="Full-page layouts for product and marketing surfaces." category="templates" components={templates} /><CollectionFeature title="Neobrutalism Components" description="Components for bold neobrutalist designs." category="neobrutalism" components={neobrutalism} /></div>
  </main>
}
