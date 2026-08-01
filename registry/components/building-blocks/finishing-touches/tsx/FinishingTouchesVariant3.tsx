import type { HTMLAttributes } from 'react'

export type FinishingTouchesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function FinishingTouchesVariant3({ className, ...props }: FinishingTouchesVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm">
            <button className="rounded-md bg-slate-900 px-3 py-1.5 text-white">Save</button>
            <button className="rounded-md px-3 py-1.5 text-slate-700">Preview</button>
          </div>
    </div>
  )
}
