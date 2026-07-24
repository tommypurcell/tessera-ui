import type { HTMLAttributes } from 'react'

export type ShapesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ShapesVariant2({ className, ...props }: ShapesVariant2Props) {
  return (
    <div className={className} {...props}>
      <div
            className="inline-flex min-h-7 items-center rounded-full bg-slate-200 px-3 text-xs font-bold text-slate-700"
          >
            New release
          </div>
    </div>
  )
}
