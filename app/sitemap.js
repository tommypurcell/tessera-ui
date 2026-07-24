import { getBlogPosts, getCollection, getCollectionNames } from '../src/lib/content'
import { absoluteUrl } from '../src/lib/site'
export const dynamic = 'force-static'
export default function sitemap() { const base = ['', '/blog', '/rss.xml', '/tools', '/tools/dark-mode-generator', '/tools/typography-mapper']; const componentUrls = getCollectionNames().flatMap((category) => [`/components/${category}`, ...getCollection(category).map((component) => `/components/${category}/${component.slug}`)]); return [...base, ...componentUrls, ...getBlogPosts().map((post) => `/blog/${post.slug}`)].map((path) => ({ url: absoluteUrl(path || '/'), lastModified: new Date().toISOString() })) }
