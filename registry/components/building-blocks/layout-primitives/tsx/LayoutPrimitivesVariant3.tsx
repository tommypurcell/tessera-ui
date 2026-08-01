import type { HTMLAttributes } from 'react'

export type LayoutPrimitivesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function LayoutPrimitivesVariant3({ className, ...props }: LayoutPrimitivesVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="flex flex-wrap items-center gap-3">
            <button className="rounded-md bg-slate-900 px-3 py-2 text-sm font-medium text-white">Save</button>
            <button className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">Share</button>
            <span className="text-sm text-slate-500">Updated 2 minutes ago</span>
          </div>
    </div>
  )
}
