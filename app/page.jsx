import Link from 'next/link'

import { getCollection } from '../src/lib/content'
import { SEO_DESCRIPTION_SITE, SEO_TITLE_SITE } from '../src/constants/seo'
import CollectionFeature from './ui/CollectionFeature'

export const metadata = { title: SEO_TITLE_SITE, description: SEO_DESCRIPTION_SITE }

export default function HomePage() {
  const application = getCollection('application').slice(0, 9)
  const marketing = getCollection('marketing').slice(0, 9)
  const neobrutalism = getCollection('neobrutalism').slice(0, 9)

  return <main id="main-content">
    <section className="border-b border-gray-200 bg-white"><div className="mx-auto max-w-4xl px-4 py-14 text-center md:py-24"><p className="text-sm font-medium text-gray-600">Open source component registry</p><h1 className="mt-4 text-5xl font-semibold tracking-tight text-gray-950 md:text-7xl">Tessera UI</h1><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Reusable Tailwind CSS components that people and coding agents can search, understand, and install.</p></div></section>
    <div className="mx-auto max-w-7xl divide-y divide-gray-200 px-4"><section className="py-16"><div className="flex flex-col gap-6 rounded-xl border border-gray-200 bg-gray-50 p-8 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="text-2xl font-semibold">Component tools</h2><p className="mt-2 max-w-xl text-gray-600">Generate dark-mode variants and map typography scales directly in your browser.</p></div><Link href="/tools" className="inline-flex w-fit rounded-md bg-gray-950 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">Browse tools</Link></div></section><CollectionFeature title="Application Components" description="Components for product interfaces and application workflows." category="application" components={application} /><CollectionFeature title="Marketing Components" description="Components for marketing sites and landing pages." category="marketing" components={marketing} /><CollectionFeature title="Neobrutalism Components" description="Components for bold neobrutalist designs." category="neobrutalism" components={neobrutalism} /></div>
  </main>
}
