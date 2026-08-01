import type { HTMLAttributes } from 'react'

export type SurfacesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SurfacesVariant1({ className, ...props }: SurfacesVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="w-72 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700">
            Quiet inset surface
          </div>
    </div>
  )
}
