import type { HTMLAttributes } from 'react'

export type SurfacesVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SurfacesVariant4({ className, ...props }: SurfacesVariant4Props) {
  return (
    <div className={className} {...props}>
      <div
            className="grid w-72 place-items-center rounded-xl border-2 border-dashed border-slate-300 bg-white px-4 py-8 text-sm text-slate-500"
          >
            Drop content here
          </div>
    </div>
  )
}
