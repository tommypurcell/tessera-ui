import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import BaseHero from '../ui/BaseHero'
import ComponentsSidebar from '../ui/ComponentsSidebar'
import { collectionTitles, getCollection, getCollectionNames } from '../../src/lib/content'

const collectionDescriptions = {
  application: 'Dashboards, forms, tables, controls, and authenticated product workflows.',
  marketing: 'Landing-page sections, conversion blocks, and ecommerce-oriented site UI.',
  'building-blocks':
    'Small composable primitives for spacing, hierarchy, status, text, and layout.',
  templates: 'Full-page starters and larger patterns when you need structure fast.',
  neobrutalism: 'Bold, high-contrast variants when you want a stronger visual style.',
}

const primaryPaths = [
  ['application', 'marketing', 'building-blocks'],
  ['templates', 'neobrutalism'],
]

const commonNeeds = [
  {
    title: 'Build a dashboard',
    description: 'Start with workspace structure, then add charts, data views, and tables.',
    links: [
      ['/components/application/rebuilt-dashboard', 'Operations dashboards'],
      ['/components/application/charts', 'Charts'],
      ['/components/application/stats', 'Stats'],
      ['/components/application/tables', 'Tables'],
      ['/components/application/rebuilt-data', 'Data views'],
    ],
  },
  {
    title: 'Build a form or workflow',
    description: 'Inputs, selectors, validation surfaces, and step-based flows.',
    links: [
      ['/components/application/inputs', 'Inputs'],
      ['/components/application/selects', 'Selects'],
      ['/components/application/checkboxes', 'Checkboxes'],
      ['/components/application/radio-groups', 'Radio groups'],
      ['/components/application/steps', 'Steps'],
    ],
  },
  {
    title: 'Build a landing page',
    description: 'Move from headers and feature sections to pricing and closing CTAs.',
    links: [
      ['/components/marketing/rebuilt-sections', 'Example-site sections'],
      ['/components/marketing/headers', 'Headers'],
      ['/components/marketing/feature-grids', 'Feature grids'],
      ['/components/marketing/pricing', 'Pricing'],
      ['/components/marketing/ctas', 'CTAs'],
    ],
  },
  {
    title: 'Polish the system',
    description: 'Refine hierarchy, spacing, surfaces, typography, and visual signals.',
    links: [
      ['/components/building-blocks/hierarchy-patterns', 'Hierarchy patterns'],
      ['/components/building-blocks/layout-primitives', 'Layout primitives'],
      ['/components/building-blocks/surfaces', 'Surfaces'],
      ['/components/building-blocks/typography-primitives', 'Typography primitives'],
      ['/components/building-blocks/color-signals', 'Color signals'],
    ],
  },
]

export const metadata = {
  title: 'Components',
  description:
    'Browse Tessera UI components by what you are building and the section you need next.',
}

function CollectionLinkCard({ category }) {
  const title = collectionTitles[category] ?? category
  const description = collectionDescriptions[category]
  const count = getCollection(category).length

  return (
    <Link
      href={`/components/${category}`}
      className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-950">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
        </div>
        <span className="rounded-full bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-500 ring-1 ring-gray-200">
          {count} groups
        </span>
      </div>
      <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-700 group-hover:text-gray-950">
        Browse
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}

export default function ComponentsIndexPage() {
  const validCategories = new Set(getCollectionNames())
  const sidebarGroups = getCollectionNames().map((category) => ({
    category,
    title: collectionTitles[category] ?? category,
    components: getCollection(category),
  }))

  return (
    <>
      <BaseHero
        title="Components"
        description="Start with what you are building, then jump straight to the section you need instead of scanning a long list."
      />
      <div className="flex w-full items-start">
        <ComponentsSidebar groups={sidebarGroups} />
        <main id="main-content" className="min-w-0 flex-1 px-4 py-12 xl:px-8">
          <div className="mx-auto max-w-6xl space-y-10">
            <section className="rounded-3xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-950">Start here</h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Pick the broad surface first. This keeps the first decision small.
                </p>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {primaryPaths.map((row, index) => (
                  <div key={index} className="grid gap-4 sm:grid-cols-3">
                    {row
                      .filter((category) => validCategories.has(category))
                      .map((category) => (
                        <CollectionLinkCard key={category} category={category} />
                      ))}
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
                  Common needs
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  These are the fastest paths for the sections people usually look for first.
                </p>
              </div>
              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {commonNeeds.map((group) => (
                  <section
                    key={group.title}
                    className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <h3 className="text-lg font-semibold text-gray-950">{group.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{group.description}</p>
                    <ul className="mt-5 space-y-2">
                      {group.links.map(([href, label]) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="group flex items-center justify-between rounded-xl border border-transparent bg-white px-4 py-3 text-sm font-medium text-gray-700 ring-1 ring-gray-200 transition hover:border-gray-300 hover:text-gray-950"
                          >
                            <span>{label}</span>
                            <ArrowRight className="size-4 text-gray-400 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-gray-950">
                  Browse every collection
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  If you already know the family you want, jump straight into that collection.
                </p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {Array.from(validCategories).map((category) => (
                  <CollectionLinkCard key={category} category={category} />
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
