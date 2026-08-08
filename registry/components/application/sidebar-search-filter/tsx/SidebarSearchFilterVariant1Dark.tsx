import { useMemo, useState } from 'react'

export type SidebarNavItemDark = {
  id: string
  label: string
  href: string
}

export type SidebarSearchFilterVariant1DarkProps = {
  items: SidebarNavItemDark[]
  placeholder?: string
}

function highlight(label: string, query: string) {
  if (!query) return label
  const index = label.toLowerCase().indexOf(query.toLowerCase())
  if (index === -1) return label
  return (
    <>
      {label.slice(0, index)}
      <mark className="rounded-sm bg-blue-400/20 text-white">{label.slice(index, index + query.length)}</mark>
      {label.slice(index + query.length)}
    </>
  )
}

/**
 * Copy-and-own Tailwind component. Search input pinned above a nav list that
 * live-filters items by label as the user types, highlighting the matched
 * substring and showing a "no matches" message when nothing matches.
 */
export function SidebarSearchFilterDark({ items, placeholder = 'Filter pages…' }: SidebarSearchFilterVariant1DarkProps) {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase())), [items, query])

  return (
    <div className="w-56">
      <label htmlFor="sidebar-nav-filter" className="sr-only">
        Filter navigation
      </label>
      <div className="flex items-center rounded-md border border-gray-600 bg-gray-900 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400">
        <span className="flex items-center pl-2.5 text-gray-500">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </span>
        <input
          type="text"
          id="sidebar-nav-filter"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className="h-8 w-full border-0 bg-transparent px-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-0"
        />
      </div>

      {filtered.length > 0 ? (
        <ul role="list" className="mt-2 flex flex-col gap-0.5">
          {filtered.map((item) => (
            <li key={item.id}>
              <a href={item.href} className="block rounded-md px-2.5 py-1.5 text-sm text-white">
                {highlight(item.label, query)}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p role="status" className="mt-3 px-2.5 text-sm text-gray-500">
          No pages match &quot;{query}&quot;.
        </p>
      )}
    </div>
  )
}
