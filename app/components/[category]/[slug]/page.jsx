import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { notFound } from 'next/navigation'

import { absoluteUrl } from '../../../../src/lib/site'
import {
  collectionTitles,
  getCollection,
  getCollectionNames,
  getComponent,
  getExampleMarkup,
  getRegistryTsxSource,
} from '../../../../src/lib/content'
import BaseHero from '../../../ui/BaseHero'
import ComponentCard from '../../../ui/ComponentCard'
import ComponentPreview from '../../../ui/ComponentPreview'
import ComponentsSidebar from '../../../ui/ComponentsSidebar'

export const dynamicParams = false

export function generateStaticParams() {
  return getCollectionNames().flatMap((category) =>
    getCollection(category).map((component) => ({
      category: String(category),
      slug: String(component.slug),
    })),
  )
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params
  const component = getComponent(category, slug)
  if (!component) {
    return {}
  }
  return {
    title: `Free Tailwind CSS ${component.title}`,
    description: component.description,
    alternates: { canonical: `/components/${category}/${slug}` },
  }
}

export default async function ComponentPage({ params }) {
  const { category, slug } = await params
  if (!getCollectionNames().includes(category)) {
    notFound()
  }
  const component = getComponent(category, slug)
  if (!component) {
    notFound()
  }

  const previews = component.components.flatMap((item, position) => {
    const index = position + 1
    const base = {
      ...item,
      dark: false,
      hasDarkVariant: Boolean(item.dark),
      index,
      id: `component-${index}`,
    }
    return item.dark
      ? [
          base,
          {
            ...item,
            dark: true,
            index,
            id: `component-${index}-dark`,
            title: `${item.title} (Dark)`,
          },
        ]
      : [base]
  })
  const related = getCollection(category)
    .filter(
      (item) => item.slug !== slug && item.terms.some((term) => component.terms.includes(term)),
    )
    .slice(0, 5)
  const sidebarGroups = getCollectionNames().map((collectionCategory) => ({
    category: collectionCategory,
    title: collectionTitles[collectionCategory] ?? collectionCategory,
    components: getCollection(collectionCategory),
  }))
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `Free Tailwind CSS ${component.title}`,
    description: component.description,
    url: absoluteUrl(`/components/${category}/${slug}`),
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: previews.map((preview, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: preview.title,
        url: `${absoluteUrl(`/components/${category}/${slug}`)}#${preview.id}`,
      })),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BaseHero
        title={component.title}
        description={component.description}
        backHref={`/components/${category}`}
        backLabel={`Back to ${collectionTitles[category] ?? `${category} components`}`}
      />
      <div className="flex w-full items-start">
        <ComponentsSidebar groups={sidebarGroups} />
        <main id="main-content" className="min-w-0 flex-1 px-4 py-10 xl:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-8 flex items-center gap-2 text-sm text-gray-600">
              <span>
                {previews.filter((item) => item.dark).length}/{component.components.length}{' '}
                dark-mode variants
              </span>
              {component.updated?.date && (
                <>
                  <span aria-hidden="true">•</span>
                  <span>
                    Updated{' '}
                    {new Intl.DateTimeFormat('en-US', {
                      dateStyle: 'medium',
                      timeZone: 'UTC',
                    }).format(new Date(component.updated.date))}
                  </span>
                </>
              )}
            </div>
            <div className="space-y-8">
              {previews.map((preview) => (
                <ComponentPreview
                  key={preview.id}
                  component={preview}
                  category={category}
                  slug={slug}
                  markup={getExampleMarkup(category, slug, preview.index, preview.dark)}
                  tsxMarkup={getRegistryTsxSource(category, slug, preview.index, preview.dark)}
                  themeVisibility={
                    preview.dark
                      ? 'hidden dark:block'
                      : preview.hasDarkVariant
                        ? 'dark:hidden'
                        : undefined
                  }
                />
              ))}
            </div>
            <section className="mt-16 border-t border-gray-200 pt-10">
              {related.length > 0 && (
                <>
                  <h2 className="text-2xl font-semibold">Related components</h2>
                  <ul className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {related.map((item) => (
                      <ComponentCard key={item.slug} component={item} />
                    ))}
                  </ul>
                </>
              )}
              <Link
                href={`/components/${category}`}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-950"
              >
                View all {category} components{' '}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </section>
          </div>
        </main>
      </div>
    </>
  )
}
