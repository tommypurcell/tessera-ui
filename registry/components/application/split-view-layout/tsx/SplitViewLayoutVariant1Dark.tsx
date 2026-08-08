import type { HTMLAttributes, ReactNode } from 'react'

export type SplitViewListItem = {
  id: string
  title: string
  subtitle: string
  active?: boolean
}

export type SplitViewLayoutVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  listTitle: string
  items: SplitViewListItem[]
  detailTitle: string
  detailSubtitle: string
  children: ReactNode
  onSelectItem?: (item: SplitViewListItem) => void
  onCollapseList?: () => void
}

/**
 * Copy-and-own Tailwind component. Master-detail split view taking a real
 * items/detail contract — pass your own list data and detail content as children.
 */
export function SplitViewLayoutDark({
  className,
  listTitle,
  items,
  detailTitle,
  detailSubtitle,
  children,
  onSelectItem,
  onCollapseList,
  ...props
}: SplitViewLayoutVariant1DarkProps) {
  return (
    <div className={`flex h-96 overflow-hidden rounded-xl border border-gray-800 ${className ?? ''}`} {...props}>
      <div className="flex w-72 shrink-0 flex-col border-r border-gray-800 bg-gray-900">
        <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
          <span className="text-sm font-semibold text-white">{listTitle}</span>
          <button type="button" aria-label="Collapse list" onClick={onCollapseList} className="text-gray-500 hover:text-gray-300">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>

        <div className="flex-1 divide-y divide-gray-800 overflow-y-auto">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-current={item.active}
              onClick={() => onSelectItem?.(item)}
              className={`block w-full px-4 py-3 text-left ${item.active ? 'bg-gray-800' : 'hover:bg-gray-800'}`}
            >
              <p className="text-sm font-medium text-white">{item.title}</p>
              <p className="mt-0.5 truncate text-xs text-gray-400">{item.subtitle}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="w-1.5 shrink-0 cursor-col-resize bg-gray-800 hover:bg-gray-700" role="separator" aria-orientation="vertical" aria-label="Resize panels" />

      <div className="flex flex-1 flex-col bg-gray-900">
        <div className="border-b border-gray-800 px-5 py-3">
          <h2 className="text-sm font-semibold text-white">{detailTitle}</h2>
          <p className="mt-0.5 text-xs text-gray-500">{detailSubtitle}</p>
        </div>
        <div className="flex-1 overflow-y-auto p-5 text-sm leading-relaxed text-gray-400">{children}</div>
      </div>
    </div>
  )
}
