import type { HTMLAttributes } from 'react'

export type ChangelogCategory = 'New' | 'Improved' | 'Fixed'

export type ChangelogSection = {
  category: ChangelogCategory
  items: string[]
}

export type ChangelogEntryVariant1Props = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  version: string
  date: string
  isoDate: string
  title: string
  sections: ChangelogSection[]
}

const categoryStyles: Record<ChangelogCategory, { badge: string; heading: string }> = {
  New: { badge: 'bg-green-100 text-green-700', heading: 'text-green-700' },
  Improved: { badge: 'bg-blue-100 text-blue-700', heading: 'text-blue-700' },
  Fixed: { badge: 'bg-amber-100 text-amber-700', heading: 'text-amber-700' },
}

/**
 * Copy-and-own Tailwind component. Dated release card taking a real
 * version/sections contract — pass your own changelog data instead of hand-editing markup.
 */
export function ChangelogEntry({ className, version, date, isoDate, title, sections, ...props }: ChangelogEntryVariant1Props) {
  return (
    <article className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`} {...props}>
      <div className="flex items-center gap-2.5">
        <span className="inline-flex items-center rounded-full bg-gray-900 px-2.5 py-0.5 text-xs font-medium text-white">{version}</span>
        <time dateTime={isoDate} className="text-sm text-gray-500">
          {date}
        </time>
      </div>

      <h3 className="mt-2.5 text-base font-semibold text-gray-900">{title}</h3>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {sections.map((section) => (
          <span key={section.category} className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${categoryStyles[section.category].badge}`}>
            {section.category}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {sections.map((section) => (
          <div key={section.category}>
            <h4 className={`text-xs font-medium uppercase tracking-wide ${categoryStyles[section.category].heading}`}>{section.category}</h4>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm text-gray-600">
              {section.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  )
}
