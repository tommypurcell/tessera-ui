import type { HTMLAttributes } from 'react'

export type HierarchyPatternsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function HierarchyPatternsVariant1({ className, ...props }: HierarchyPatternsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="grid gap-1">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Weekly report</p>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900">Where the work is moving</h2>
          </div>
    </div>
  )
}
