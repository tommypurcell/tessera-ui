import type { ReactNode } from 'react'

export type TabBarItem = {
  label: string
  icon: ReactNode
  href: string
  active?: boolean
  badge?: number
}

export type TabBarMobileVariant1Props = {
  items: TabBarItem[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Fixed bottom mobile tab bar: icon + label per
 * tab, an active tab shown via color (not shape) so it stays distinguishable at
 * icon-only sizes, and an optional numeric badge. Distinct from Dock, which is a
 * floating macOS-style icon launcher rather than an app-shell navigation bar.
 */
export function TabBarMobile({ items, className }: TabBarMobileVariant1Props) {
  return (
    <nav aria-label="Primary" className={`w-full rounded-2xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`}>
      <ul className="flex items-stretch">
        {items.map((item) => (
          <li key={item.label} className="relative flex-1">
            <a
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              className={`flex flex-col items-center gap-1 py-2.5 ${item.active ? 'text-indigo-600' : 'text-gray-400 hover:text-gray-600'}`}
            >
              <span className="relative">
                {item.icon}
                {item.badge ? (
                  <span className="absolute -top-1 -right-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-red-500 px-1 text-[9px] font-semibold text-white">
                    {item.badge}
                  </span>
                ) : null}
              </span>
              <span className="text-[11px] font-medium">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
