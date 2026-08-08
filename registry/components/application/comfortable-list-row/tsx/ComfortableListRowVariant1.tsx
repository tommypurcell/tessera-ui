export type ComfortableListItem = {
  id: string
  avatarUrl: string
  title: string
  subtitle: string
  meta: string
  href?: string
}

export type ComfortableListRowVariant1Props = {
  items: ComfortableListItem[]
}

/**
 * Copy-and-own Tailwind component. Spacious two-line list row with a
 * leading avatar, title/subtitle pair, and trailing meta text with a
 * chevron — the "comfortable" density variant of a list item.
 */
export function ComfortableListRow({ items }: ComfortableListRowVariant1Props) {
  return (
    <ul className="w-full max-w-md divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm">
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.href ?? '#'} className="flex items-center gap-4 p-5 hover:bg-gray-50">
            <img src={item.avatarUrl} alt="" className="size-12 shrink-0 rounded-full" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-gray-900">{item.title}</p>
              <p className="mt-0.5 truncate text-sm text-gray-500">{item.subtitle}</p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="text-xs text-gray-400">{item.meta}</span>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4 text-gray-300">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
