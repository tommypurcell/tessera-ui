import type { HTMLAttributes, ReactNode } from 'react'

export type SplitViewListItem = {
  id: string
  title: string
  subtitle: string
  active?: boolean
}

export type SplitViewLayoutVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SplitViewLayout({
  className,
  listTitle,
  items,
  detailTitle,
  detailSubtitle,
  children,
  onSelectItem,
  onCollapseList,
  ...props
}: SplitViewLayoutVariant1Props) {
  return (
    <div className={`flex h-96 overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <div className="flex w-72 shrink-0 flex-col border-r border-gray-200">
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3">
          <span className="text-sm font-semibold text-gray-900">{listTitle}</span>
          <button type="button" aria-label="Collapse list" onClick={onCollapseList} className="text-gray-400 hover:text-gray-600">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>

        <div className="flex-1 divide-y divide-gray-100 overflow-y-auto">
          {items.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-current={item.active}
              onClick={() => onSelectItem?.(item)}
              className={`block w-full px-4 py-3 text-left ${item.active ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
            >
              <p className="text-sm font-medium text-gray-900">{item.title}</p>
              <p className="mt-0.5 truncate text-xs text-gray-500">{item.subtitle}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="w-1.5 shrink-0 cursor-col-resize bg-gray-100 hover:bg-gray-200" role="separator" aria-orientation="vertical" aria-label="Resize panels" />

      <div className="flex flex-1 flex-col">
        <div className="border-b border-gray-200 px-5 py-3">
          <h2 className="text-sm font-semibold text-gray-900">{detailTitle}</h2>
          <p className="mt-0.5 text-xs text-gray-500">{detailSubtitle}</p>
        </div>
        <div className="flex-1 overflow-y-auto p-5 text-sm leading-relaxed text-gray-600">{children}</div>
      </div>
    </div>
  )
}
