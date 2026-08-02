import type { HTMLAttributes, ReactNode } from 'react'

export type NavigationItem = { label: string; href: string; active?: boolean }

export type DashboardSidebarProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  items: NavigationItem[]
  brand?: ReactNode
  searchLabel?: string
  searchPlaceholder?: string
  navigationLabel?: string
}

export function DashboardSidebar({
  items,
  brand = 'Workspace',
  searchLabel = 'Search navigation',
  searchPlaceholder = 'Search',
  navigationLabel = 'Primary navigation',
  className,
  ...props
}: DashboardSidebarProps) {
  return (
    <aside
      className={
        className
          ? `w-64 border-r border-slate-200 bg-slate-50 p-4 ${className}`
          : 'w-64 border-r border-slate-200 bg-slate-50 p-4'
      }
      {...props}
    >
      <a href="#main-content" className="text-sm font-semibold text-slate-950">
        {brand}
      </a>
      <label className="sr-only" htmlFor="sidebar-search">
        {searchLabel}
      </label>
      <input
        id="sidebar-search"
        className="mt-5 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
        placeholder={searchPlaceholder}
      />
      <nav className="mt-5 space-y-1" aria-label={navigationLabel}>
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
            className={`block rounded-md px-3 py-2 text-sm ${item.active ? 'bg-slate-200 font-medium text-slate-950' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}
