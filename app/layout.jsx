import './globals.css'

import { getSearchItems } from '../src/lib/content'
import { SITE_DESCRIPTION, SITE_TITLE } from '../src/constants/seo'
import { siteUrl } from '../src/lib/site'
import SiteFooter from './ui/SiteFooter'
import SiteHeader from './ui/SiteHeader'

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: SITE_TITLE, template: `%s | ${SITE_TITLE}` },
  description: SITE_DESCRIPTION,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: 'Tessera UI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/og.jpg'],
  },
}

export default function RootLayout({ children }) {
  const searchItems = getSearchItems()

  return (
    <html lang="en" className="scroll-smooth scroll-pt-16">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "try { const theme = localStorage.getItem('tessera-ui-theme'); if (theme === 'dark' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) document.documentElement.classList.add('dark') } catch {}",
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a href="#main-content" className="sr-only fixed top-4 left-1/2 z-60 -translate-x-1/2 rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-900 shadow-lg focus:not-sr-only">
          Skip to content
        </a>
        <SiteHeader searchItems={searchItems} />
        <div className="flex flex-1 flex-col [&>*]:w-full">{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
