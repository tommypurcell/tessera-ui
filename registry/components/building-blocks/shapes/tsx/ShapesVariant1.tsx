import type { HTMLAttributes } from 'react'

export type ShapesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ShapesVariant1({ className, ...props }: ShapesVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="grid size-13 place-items-center rounded-full bg-slate-200 font-bold text-slate-700">
            A
          </div>
    </div>
  )
}
