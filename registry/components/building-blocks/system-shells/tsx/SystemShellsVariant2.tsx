import type { HTMLAttributes } from 'react'

export type SystemShellsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SystemShellsVariant2({ className, ...props }: SystemShellsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="w-80 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 h-2 w-20 rounded-full bg-slate-200"></div>
            <div className="h-3 w-48 rounded-full bg-slate-100"></div>
          </div>
    </div>
  )
}
