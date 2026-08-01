import type { HTMLAttributes } from 'react'

export type SurfacesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SurfacesVariant2({ className, ...props }: SurfacesVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="w-72 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
            Elevated base surface
          </div>
    </div>
  )
}
