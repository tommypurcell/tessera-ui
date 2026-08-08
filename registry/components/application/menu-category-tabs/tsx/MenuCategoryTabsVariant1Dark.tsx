import { useState } from 'react'

export type MenuItem = {
  name: string
  description: string
  price: string
}

export type MenuCategoryTabsVariant1DarkProps = {
  categories: string[]
  itemsByCategory: Record<string, MenuItem[]>
}

/**
 * Copy-and-own Tailwind component. Sticky pill-tab strip for restaurant
 * menu categories, swapping the item list below as the active category
 * changes.
 */
export function MenuCategoryTabsDark({ categories, itemsByCategory }: MenuCategoryTabsVariant1DarkProps) {
  const [active, setActive] = useState(categories[0])
  const items = itemsByCategory[active] ?? []

  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-gray-700 bg-gray-900">
      <div className="sticky top-0 z-10 border-b border-gray-800 bg-gray-900/95 px-3 py-3 backdrop-blur">
        <div role="tablist" aria-label="Menu categories" className="flex gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={category === active}
              onClick={() => setActive(category)}
              className={
                category === active
                  ? 'shrink-0 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-gray-900'
                  : 'shrink-0 rounded-full px-4 py-1.5 text-sm font-medium text-gray-400 hover:bg-gray-800'
              }
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <ul className="divide-y divide-gray-800">
        {items.map((item) => (
          <li key={item.name} className="flex items-start justify-between gap-4 p-4">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">{item.name}</p>
              <p className="mt-0.5 text-sm text-gray-400">{item.description}</p>
            </div>
            <span className="shrink-0 text-sm font-semibold text-white">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
