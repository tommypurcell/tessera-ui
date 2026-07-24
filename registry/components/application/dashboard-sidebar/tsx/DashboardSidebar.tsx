type NavigationItem = { label: string; href: string; active?: boolean }

export function DashboardSidebar({ items }: { items: NavigationItem[] }) {
  return (
    <aside className="w-64 border-r border-slate-200 bg-slate-50 p-4">
      <a href="#main-content" className="text-sm font-semibold text-slate-950">
        Workspace
      </a>
      <label className="sr-only" htmlFor="sidebar-search">
        Search navigation
      </label>
      <input
        id="sidebar-search"
        className="mt-5 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
        placeholder="Search"
      />
      <nav className="mt-5 space-y-1" aria-label="Primary navigation">
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
