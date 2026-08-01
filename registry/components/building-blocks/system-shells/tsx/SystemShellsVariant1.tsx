import type { HTMLAttributes } from 'react'

export type SystemShellsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SystemShellsVariant1({ className, ...props }: SystemShellsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-baseline justify-between gap-4">
            <span className="text-sm font-medium text-slate-900">Seats used</span>
            <span className="text-sm font-semibold text-slate-900 tabular-nums">32 / 40</span>
          </div>
    </div>
  )
}
