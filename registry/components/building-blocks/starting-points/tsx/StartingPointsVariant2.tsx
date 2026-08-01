import type { HTMLAttributes } from 'react'

export type StartingPointsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StartingPointsVariant2({ className, ...props }: StartingPointsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="flex w-96 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <label className="text-sm font-medium text-slate-900">City</label>
            <input className="min-w-0 flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="San Francisco" />
            <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white">Search</button>
          </div>
    </div>
  )
}
