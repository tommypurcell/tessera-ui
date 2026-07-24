export default function BaseHero({ title, description, backHref, backLabel }) {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:py-16">
        {backHref && <a href={backHref} className="mb-6 inline-flex text-sm text-gray-600 transition-colors hover:text-gray-950">← {backLabel}</a>}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-gray-950 md:text-6xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">{description}</p>
      </div>
    </section>
  )
}
