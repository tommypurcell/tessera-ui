import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { getBlogPosts } from '../../src/lib/content'
import { absoluteUrl } from '../../src/lib/site'
import { SEO_DESCRIPTION_BLOG, SEO_TITLE_BLOG } from '../../src/constants/seo'
import BaseHero from '../ui/BaseHero'

export const metadata = { title: SEO_TITLE_BLOG, description: SEO_DESCRIPTION_BLOG, alternates: { canonical: '/blog' } }

function readingTime(content) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))
}

export default function BlogPage() {
  const posts = getBlogPosts()
  const schema = { '@context': 'https://schema.org', '@type': 'Blog', name: 'Tessera UI Blog', description: SEO_DESCRIPTION_BLOG, url: absoluteUrl('/blog'), blogPost: posts.map((post) => ({ '@type': 'BlogPosting', headline: post.title, description: post.description, datePublished: post.pubDate, dateModified: post.updatedDate, url: absoluteUrl(`/blog/${post.slug}`) })) }

  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><BaseHero title="Tessera UI Blog" description="Practical guides to reusable UI, component registries, and coding-agent workflows." /><main id="main-content" className="mx-auto max-w-7xl divide-y divide-gray-200 px-4">{posts.map((post) => <Link key={post.slug} href={`/blog/${post.slug}`} className="group block py-6 first:pt-10 hover:bg-gray-50"><article className="grid gap-3 sm:grid-cols-[10rem_1fr_auto] sm:gap-8"><time className="pt-1 text-sm text-gray-500" dateTime={post.updatedDate}>{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(post.updatedDate))}</time><div><h2 className="text-xl font-semibold tracking-tight text-gray-950 transition-colors group-hover:text-gray-600">{post.title}</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-gray-600">{post.description}</p><span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-gray-700">Read article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></div><span className="hidden pt-1 text-sm text-gray-500 sm:block">{readingTime(post.content)} min read</span></article></Link>)}</main></>
}
