import type { ReactNode } from 'react'

export type SettingsNavItem = {
  id: string
  label: string
  href: string
  icon: ReactNode
}

export type SettingsNavGroup = {
  title: string
  items: SettingsNavItem[]
}

export type SettingsNavListVariant1Props = {
  groups: SettingsNavGroup[]
  activeId: string
}

/**
 * Copy-and-own Tailwind component. Grouped vertical settings menu with section
 * headers, icon+label items, and a highlighted active item. Pass your own icon
 * elements (e.g. from lucide-react) per item.
 */
export function SettingsNavList({ groups, activeId }: SettingsNavListVariant1Props) {
  return (
    <nav aria-label="Settings" className="w-56">
      {groups.map((group, index) => (
        <div key={group.title} className={index === 0 ? '' : 'mt-5'}>
          <p className="px-2.5 text-xs font-semibold uppercase tracking-wide text-gray-400">{group.title}</p>
          <ul role="list" className="mt-1.5 flex flex-col gap-0.5">
            {group.items.map((item) => {
              const isActive = item.id === activeId
              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm ${
                      isActive ? 'bg-gray-100 font-medium text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                  >
                    <span aria-hidden="true" className="size-4 text-gray-500">
                      {item.icon}
                    </span>
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
