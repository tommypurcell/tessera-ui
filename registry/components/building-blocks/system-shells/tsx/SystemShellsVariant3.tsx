import type { HTMLAttributes } from 'react'

export type SystemShellsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SystemShellsVariant3({ className, ...props }: SystemShellsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm shadow-sm">
            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700">Tight</span>
            <span className="text-slate-600">Density-aware shell</span>
          </div>
    </div>
  )
}
