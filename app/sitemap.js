import { getBlogPosts, getCollection, getCollectionNames } from '../src/lib/content'
import { getExampleSites } from '../src/data/example-sites'
import { absoluteUrl } from '../src/lib/site'

export const dynamic = 'force-static'

export default function sitemap() {
  const base = [
    '',
    '/blog',
    '/rss.xml',
    '/tools',
    '/tools/dark-mode-generator',
    '/tools/typography-mapper',
    '/example-sites',
  ]

  const componentUrls = getCollectionNames().flatMap((category) => [
    `/components/${category}`,
    ...getCollection(category).map((component) => `/components/${category}/${component.slug}`),
  ])

  const exampleSiteUrls = getExampleSites().map((site) => site.route)

  return [...base, ...componentUrls, ...exampleSiteUrls, ...getBlogPosts().map((post) => `/blog/${post.slug}`)].map((path) => ({
    url: absoluteUrl(path || '/'),
    lastModified: new Date().toISOString(),
  }))
}
