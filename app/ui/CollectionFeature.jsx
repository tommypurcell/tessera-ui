import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ComponentCard from './ComponentCard'

export default function CollectionFeature({ title, description, category, components }) {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">{components.map((component) => <ComponentCard key={component.slug} component={component} />)}</ul>
      <Link href={`/components/${category}`} className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-gray-950">View all {category} components <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
    </section>
  )
}
