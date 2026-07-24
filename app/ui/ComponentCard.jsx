import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ComponentCard({ component }) {
  const count = component.components.length + component.components.filter((item) => item.dark).length
  return (
    <li>
      <Link href={`/components/${component.category}/${component.slug}`} className="group relative block rounded-lg border border-gray-200 bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-lg">
        <h3 className="text-xl font-medium text-gray-950">{component.title}</h3>
        <div className="mt-2 flex items-center justify-between"><p className="text-sm text-gray-600">{count} components</p><ArrowRight className="size-5 text-gray-400 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" /></div>
      </Link>
    </li>
  )
}
