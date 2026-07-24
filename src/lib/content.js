import fs from 'node:fs'
import path from 'node:path'

import matter from 'gray-matter'

const contentRoot = path.join(process.cwd(), 'src', 'content')
const metadataPath = path.join(process.cwd(), 'src', 'data', 'git-metadata.json')
const registryRoot = path.join(process.cwd(), 'registry', 'components')
const collections = [
  'application',
  'marketing',
  'neobrutalism',
  'templates',
  'building-blocks',
  'custom',
]

function readDirectory(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(directory, entry.name)
    return entry.isDirectory()
      ? readDirectory(entryPath)
      : entry.name.endsWith('.mdx')
        ? [entryPath]
        : []
  })
}

function readMetadata() {
  return JSON.parse(fs.readFileSync(metadataPath, 'utf8'))
}

function toIsoDate(value) {
  if (!value) {
    return null
  }
  return new Date(value).toISOString()
}

function sortByTitle(items) {
  return [...items].sort((a, b) => a.title.localeCompare(b.title))
}

export function getCollectionNames() {
  return collections
}

export function getCollection(category) {
  if (!collections.includes(category)) {
    return []
  }

  const metadata = readMetadata()
  const directory = path.join(contentRoot, 'collection', category)

  return sortByTitle(
    readDirectory(directory).map((filePath) => {
      const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
      const slug = data.slug ?? path.basename(filePath, '.mdx')
      const updated = metadata[`${category}/${slug}`]

      return {
        ...data,
        category,
        slug,
        components: data.components ?? [],
        terms: data.terms ?? [],
        content,
        updated: updated ? { ...updated, date: toIsoDate(updated.date) } : null,
      }
    }),
  )
}

export function getComponent(category, slug) {
  return getCollection(category).find((component) => component.slug === slug) ?? null
}

export function getBlogPosts() {
  const directory = path.join(contentRoot, 'blog')

  return readDirectory(directory)
    .map((filePath) => {
      const { data, content } = matter(fs.readFileSync(filePath, 'utf8'))
      return {
        ...data,
        slug: data.slug ?? path.basename(filePath, '.mdx'),
        pubDate: toIsoDate(data.pubDate),
        updatedDate: toIsoDate(data.updatedDate ?? data.pubDate),
        terms: data.terms ?? [],
        content,
      }
    })
    .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
}

export function getBlogPost(slug) {
  return getBlogPosts().find((post) => post.slug === slug) ?? null
}

export function getTools() {
  const toolsPath = path.join(process.cwd(), 'src', 'data', 'tools.json')
  return JSON.parse(fs.readFileSync(toolsPath, 'utf8'))
}

export function getSearchItems() {
  const componentItems = collections.flatMap((category) =>
    getCollection(category).map((component) => ({
      title: component.title,
      description: component.description,
      href: `/components/${category}/${component.slug}`,
      type: 'Component',
      terms: component.terms,
    })),
  )
  const blogItems = getBlogPosts().map((post) => ({
    title: post.title,
    description: post.description,
    href: `/blog/${post.slug}`,
    type: 'Article',
    terms: post.terms,
  }))

  return [...componentItems, ...blogItems]
}

export function getExampleMarkup(category, slug, index, dark) {
  const filename = `${index}${dark ? '-dark' : ''}.html`
  const filePath = path.join(process.cwd(), 'public', 'examples', category, slug, filename)
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf8').trim()
  }

  const fallbackPath = path.join(process.cwd(), 'public', 'examples', category, slug, '1.html')
  return fs.existsSync(fallbackPath) ? fs.readFileSync(fallbackPath, 'utf8').trim() : ''
}

export function getRegistryTsxSource(category, slug, index, dark) {
  const registryFilePath = path.join(registryRoot, category, slug, 'registry.json')

  if (!fs.existsSync(registryFilePath)) {
    return null
  }

  const registryEntry = JSON.parse(fs.readFileSync(registryFilePath, 'utf8'))
  const expectedHtmlFilename = `${index}${dark ? '-dark' : ''}.html`
  const registryVariant =
    registryEntry.variants.find(({ source }) => source.html.endsWith(expectedHtmlFilename)) ??
    registryEntry.variants[index - 1] ??
    registryEntry.variants[0]

  if (!registryVariant) {
    return null
  }

  const tsxSourcePath = path.resolve(path.dirname(registryFilePath), registryVariant.source.tsx)
  return fs.readFileSync(tsxSourcePath, 'utf8').trim()
}
