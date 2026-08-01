import type { HTMLAttributes } from 'react'

export type StartingPointsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StartingPointsVariant3({ className, ...props }: StartingPointsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="grid w-80 place-items-start gap-3 rounded-2xl border border-dashed border-slate-300 bg-white p-6">
            <span className="grid size-10 place-items-center rounded-xl bg-slate-100 text-slate-500">+</span>
            <div className="grid gap-1">
              <h2 className="text-sm font-medium text-slate-900">Start with one item</h2>
              <p className="text-sm text-slate-600">Create the first task before adding more structure.</p>
            </div>
          </div>
    </div>
  )
}
