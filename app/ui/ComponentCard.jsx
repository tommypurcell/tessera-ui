import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ComponentCard({ component }) {
  const count = component.components.length + component.components.filter((item) => item.dark).length
  return (
    <li>
      <Link
        href={`/components/${component.category}/${component.slug}`}
        className="group relative block rounded-xl border border-gray-200 bg-white p-6 transition hover:border-gray-300"
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-medium text-gray-950">{component.title}</h3>
          {component.updated && (
            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">
              <span className="size-1.5 rounded-full bg-blue-600" />
              Updated
            </span>
          )}
        </div>
        <div className="mt-1 flex items-center justify-between">
          <p className="text-sm text-gray-500">{count} components</p>
          <ArrowRight className="size-4 shrink-0 text-gray-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      </Link>
    </li>
  )
}
