import type { HTMLAttributes } from 'react'

export type FinishingTouchesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function FinishingTouchesVariant2({ className, ...props }: FinishingTouchesVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="grid w-80 place-items-center gap-3 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
            <span className="grid size-11 place-items-center rounded-full bg-blue-50 text-blue-700">✦</span>
            <div className="grid gap-1">
              <h2 className="text-sm font-medium text-slate-900">Nothing here yet</h2>
              <p className="text-sm text-slate-600">Create the first block to start building this section.</p>
            </div>
          </div>
    </div>
  )
}
