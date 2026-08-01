import type { HTMLAttributes } from 'react'

export type HierarchyPatternsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function HierarchyPatternsVariant2({ className, ...props }: HierarchyPatternsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-baseline gap-2">
            <span className="text-xs font-medium uppercase tracking-[0.14em] text-slate-500">Inventory</span>
            <span className="text-sm font-semibold text-slate-900">12 left in stock</span>
          </div>
    </div>
  )
}
