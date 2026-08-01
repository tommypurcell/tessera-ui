import type { HTMLAttributes } from 'react'

export type SurfacesVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SurfacesVariant5({ className, ...props }: SurfacesVariant5Props) {
  return (
    <div className={className} {...props}>
      <div
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 shadow-sm"
          >
            <span className="font-medium text-slate-900">Filter</span>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-slate-300"></span>
            <span>Updated today</span>
          </div>
    </div>
  )
}
