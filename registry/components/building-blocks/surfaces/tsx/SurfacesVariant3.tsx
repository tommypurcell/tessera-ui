import type { HTMLAttributes } from 'react'

export type SurfacesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SurfacesVariant3({ className, ...props }: SurfacesVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="w-72 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-900">
            Tinted supporting surface
          </div>
    </div>
  )
}
