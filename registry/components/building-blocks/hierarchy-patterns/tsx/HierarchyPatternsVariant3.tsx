import type { HTMLAttributes } from 'react'

export type HierarchyPatternsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function HierarchyPatternsVariant3({ className, ...props }: HierarchyPatternsVariant3Props) {
  return (
    <div className={className} {...props}>
      <nav className="flex w-64 flex-col gap-1">
            <a href="#" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white">Overview</a>
            <a href="#" className="rounded-lg px-3 py-2 text-sm text-slate-500">Members</a>
            <a href="#" className="rounded-lg px-3 py-2 text-sm text-slate-500">Billing</a>
          </nav>
    </div>
  )
}
