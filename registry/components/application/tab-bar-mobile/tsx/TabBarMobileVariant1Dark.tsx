import type { ReactNode } from 'react'

export type TabBarItem = {
  label: string
  icon: ReactNode
  href: string
  active?: boolean
  badge?: number
}

export type TabBarMobileVariant1DarkProps = {
  items: TabBarItem[]
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Fixed bottom mobile tab bar:
 * icon + label per tab, an active tab shown via color, and an optional numeric
 * badge.
 */
export function TabBarMobile({ items, className }: TabBarMobileVariant1DarkProps) {
  return (
    <nav aria-label="Primary" className={`w-full rounded-2xl border border-gray-800 bg-gray-900 shadow-sm ${className ?? ''}`}>
      <ul className="flex items-stretch">
        {items.map((item) => (
          <li key={item.label} className="relative flex-1">
            <a
              href={item.href}
              aria-current={item.active ? 'page' : undefined}
              className={`flex flex-col items-center gap-1 py-2.5 ${item.active ? 'text-indigo-400' : 'text-gray-500 hover:text-gray-300'}`}
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
