import { notFound } from 'next/navigation'

import { getCollection, getCollectionNames } from '../../../src/lib/content'
import BaseHero from '../../ui/BaseHero'
import ComponentCard from '../../ui/ComponentCard'

const descriptions = {
  application: 'Reusable Tailwind CSS components for dashboards, workflows, and product interfaces.',
  marketing: 'Reusable Tailwind CSS components for landing pages, marketing sites, and ecommerce.',
  neobrutalism: 'Big, bold Tailwind CSS components with high-contrast neobrutalist styling.',
  templates: 'Complete, reusable Tailwind CSS page templates for common product and marketing layouts.',
  imports: 'Curated open-source components with preserved source files, licenses, and registry metadata.',
  'building-blocks': 'Small, composable Tailwind CSS building blocks for assembling consistent interfaces without starting from raw utilities.',
  custom: 'Original Tessera UI components designed for clear, polished product and marketing experiences.',
}

const categoryTitles = { custom: 'Custom Made Components', 'building-blocks': 'Building Blocks' }

export function generateStaticParams() {
  return getCollectionNames().map((category) => ({ category }))
}

export async function generateMetadata({ params }) {
  const { category } = await params
  const title = categoryTitles[category] ?? `${category?.[0]?.toUpperCase()}${category?.slice(1)} Components`
  return { title, description: descriptions[category] }
}

export default async function CollectionPage({ params }) {
  const { category } = await params
  if (!getCollectionNames().includes(category)) {notFound()}
  const title = categoryTitles[category] ?? `${category[0].toUpperCase()}${category.slice(1)} Components`
  const components = getCollection(category)

  return <><BaseHero title={title} description={descriptions[category]} /><main id="main-content" className="mx-auto max-w-7xl px-4 py-10"><h2 className="sr-only">{title}</h2><ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{components.map((component) => <ComponentCard key={component.slug} component={component} />)}</ul></main></>
}
