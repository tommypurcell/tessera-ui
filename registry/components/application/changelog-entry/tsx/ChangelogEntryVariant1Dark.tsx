import type { HTMLAttributes } from 'react'

export type ChangelogCategory = 'New' | 'Improved' | 'Fixed'

export type ChangelogSection = {
  category: ChangelogCategory
  items: string[]
}

export type ChangelogEntryVariant1DarkProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  version: string
  date: string
  isoDate: string
  title: string
  sections: ChangelogSection[]
}

const categoryStylesDark: Record<ChangelogCategory, { badge: string; heading: string }> = {
  New: { badge: 'bg-green-900/50 text-green-400', heading: 'text-green-400' },
  Improved: { badge: 'bg-blue-900/50 text-blue-400', heading: 'text-blue-400' },
  Fixed: { badge: 'bg-amber-900/50 text-amber-400', heading: 'text-amber-400' },
}

/**
 * Copy-and-own Tailwind component. Dated release card taking a real
 * version/sections contract — pass your own changelog data instead of hand-editing markup.
 */
export function ChangelogEntryDark({ className, version, date, isoDate, title, sections, ...props }: ChangelogEntryVariant1DarkProps) {
  return (
    <article className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`} {...props}>
      <div className="flex items-center gap-2.5">
        <span className="inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-gray-900">{version}</span>
        <time dateTime={isoDate} className="text-sm text-gray-400">
          {date}
        </time>
      </div>

      <h3 className="mt-2.5 text-base font-semibold text-white">{title}</h3>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {sections.map((section) => (
          <span key={section.category} className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${categoryStylesDark[section.category].badge}`}>
            {section.category}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-3">
        {sections.map((section) => (
          <div key={section.category}>
            <h4 className={`text-xs font-medium uppercase tracking-wide ${categoryStylesDark[section.category].heading}`}>{section.category}</h4>
            <ul className="mt-1.5 list-disc space-y-1 pl-4 text-sm text-gray-400">
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
