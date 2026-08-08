export type AnchorScrollNavSectionDark = {
  id: string
  label: string
}

export type AnchorScrollNavVariant1DarkProps = {
  title?: string
  sections: AnchorScrollNavSectionDark[]
  activeId: string
}

/**
 * Copy-and-own Tailwind component. Sticky in-page section list with a left
 * indicator bar on the currently active heading. Drive `activeId` from your own
 * IntersectionObserver-based scrollspy logic watching each section's heading.
 */
export function AnchorScrollNavDark({ title = 'On this page', sections, activeId }: AnchorScrollNavVariant1DarkProps) {
  return (
    <nav aria-label={title} className="w-48">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-500">{title}</p>
      <ul role="list" className="flex flex-col border-l border-gray-700">
        {sections.map((section) => {
          const isActive = section.id === activeId
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-3 text-sm ${
                  isActive ? 'border-blue-300 font-medium text-white' : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                {section.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
