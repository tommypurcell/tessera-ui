import { getBlogPosts } from '../../src/lib/content'
import { absoluteUrl, siteUrl } from '../../src/lib/site'

export const dynamic = 'force-static'

function escapeXml(value) {
  return value.replace(/[<>&'"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character])
}

export async function GET() {
  const items = getBlogPosts().map((post) => `<item><title>${escapeXml(post.title)}</title><description>${escapeXml(post.description)}</description><link>${absoluteUrl(`/blog/${post.slug}`)}</link><guid>${absoluteUrl(`/blog/${post.slug}`)}</guid><pubDate>${new Date(post.pubDate).toUTCString()}</pubDate></item>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Tessera UI Blog</title><link>${siteUrl}</link><description>Guides to reusable UI and coding-agent workflows.</description>${items}</channel></rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } })
}
