import { useState } from 'react'

export type Clause = {
  id: string
  title: string
  body: string
}

export type ClauseAccordionVariant1Props = {
  clauses: Clause[]
  defaultOpenId?: string
  className?: string
}

/**
 * Copy-and-own Tailwind component. Numbered legal-clause list: each clause has
 * an expand/collapse header, a stable anchor link (for deep-linking to a
 * specific clause), and body text that reveals independently of the others.
 * Distinct from the generic Accordions component in numbering and the
 * per-clause anchor-link affordance, both conventions specific to legal docs.
 */
export function ClauseAccordion({ clauses, defaultOpenId, className }: ClauseAccordionVariant1Props) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId ?? clauses[0]?.id ?? null)

  return (
    <div className={`rounded-lg border border-gray-200 bg-white ${className ?? ''}`}>
      {clauses.map((clause, index) => {
        const isOpen = openId === clause.id
        const isLast = index === clauses.length - 1
        return (
          <div key={clause.id} className={isLast ? '' : 'border-b border-gray-200'}>
            <div className="flex items-center justify-between px-4 py-3">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={clause.id}
                onClick={() => setOpenId(isOpen ? null : clause.id)}
                className="flex flex-1 items-center gap-3 text-left"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-gray-100 text-xs font-semibold text-gray-600">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-gray-900">{clause.title}</span>
              </button>
              <div className="flex items-center gap-2">
                <a href={`#${clause.id}`} aria-label={`Copy link to ${clause.title}`} className="text-gray-400 hover:text-gray-600">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z" />
                    <path d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z" />
                  </svg>
                </a>
                <svg
                  className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            {isOpen ? (
              <div id={clause.id} className="pl-13 px-4 pb-4 text-sm text-gray-600">
                {clause.body}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}
