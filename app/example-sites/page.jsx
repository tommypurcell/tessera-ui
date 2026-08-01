import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import { getExampleSites } from '../../src/data/example-sites'
import BaseHero from '../ui/BaseHero'

export const metadata = {
  title: 'Example Websites',
  description:
    'A portfolio of example websites built with the Tessera UI component library by agents.',
}

export default function ExampleSitesPage() {
  const sites = getExampleSites()

  return (
    <>
      <BaseHero
        title="Example Websites"
        description="This is a portfolio of example websites built with our UI component library by agents."
      />
      <main id="main-content" className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sites.map((site) => (
            <Link
              key={site.slug}
              href={site.route}
              className="group relative block rounded-xl border border-gray-200 bg-white p-6 transition hover:border-gray-300"
            >
              <h2 className="text-lg font-medium text-gray-950">{site.title}</h2>
              <div className="mt-1 flex items-center justify-between">
                <p className="text-sm text-gray-500">{site.category}</p>
                <ArrowRight className="size-4 shrink-0 text-gray-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
