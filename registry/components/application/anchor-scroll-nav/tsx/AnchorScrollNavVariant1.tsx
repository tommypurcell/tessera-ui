export type AnchorScrollNavSection = {
  id: string
  label: string
}

export type AnchorScrollNavVariant1Props = {
  title?: string
  sections: AnchorScrollNavSection[]
  activeId: string
}

/**
 * Copy-and-own Tailwind component. Sticky in-page section list with a left
 * indicator bar on the currently active heading. Drive `activeId` from your own
 * IntersectionObserver-based scrollspy logic watching each section's heading.
 */
export function AnchorScrollNav({ title = 'On this page', sections, activeId }: AnchorScrollNavVariant1Props) {
  return (
    <nav aria-label={title} className="w-48">
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">{title}</p>
      <ul role="list" className="flex flex-col border-l border-gray-200">
        {sections.map((section) => {
          const isActive = section.id === activeId
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? 'location' : undefined}
                className={`-ml-px block border-l-2 py-1.5 pl-3 text-sm ${
                  isActive ? 'border-gray-900 font-medium text-gray-900' : 'border-transparent text-gray-500 hover:text-gray-900'
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
