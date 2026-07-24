import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { notFound } from 'next/navigation'

import { getBlogPost, getBlogPosts } from '../../../src/lib/content'
import { absoluteUrl } from '../../../src/lib/site'

function readingTime(content) {
  return Math.max(1, Math.ceil(content.trim().split(/\s+/).length / 200))
}

export function generateStaticParams() {
  return getBlogPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) {return {}}
  return { title: post.title, description: post.description, alternates: { canonical: `/blog/${post.slug}` }, openGraph: { type: 'article', publishedTime: post.pubDate, modifiedTime: post.updatedDate, title: post.title, description: post.description } }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) {notFound()}
  const displayDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(post.updatedDate))
  const schema = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: post.title, description: post.description, mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`), datePublished: post.pubDate, dateModified: post.updatedDate, author: { '@type': 'Organization', name: 'Tessera UI' }, publisher: { '@type': 'Organization', name: 'Tessera UI', url: absoluteUrl('/') } }

  return <main id="main-content" className="mx-auto max-w-3xl px-4 py-10 md:py-16"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><article><Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-950"><ArrowLeft className="size-4" />Back to blog</Link><header className="mt-8 border-b border-gray-200 pb-8"><div className="flex items-center gap-4 text-sm text-gray-600"><span className="inline-flex items-center gap-1.5"><Calendar className="size-4" /><time dateTime={post.updatedDate}>{displayDate}</time></span><span className="inline-flex items-center gap-1.5"><Clock className="size-4" />{readingTime(post.content)} min read</span></div><h1 className="mt-5 text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">{post.title}</h1><p className="mt-4 text-xl leading-8 text-gray-600">{post.description}</p></header><div className="prose prose-gray mt-8 max-w-none prose-headings:font-semibold prose-a:text-gray-950"><MDXRemote source={post.content} /></div><footer className="mt-16 border-t border-gray-200 pt-8"><Link href="/blog" className="inline-flex items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50"><ArrowLeft className="size-4" />Back to all articles</Link></footer></article></main>
}
