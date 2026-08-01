import type { HTMLAttributes } from 'react'

export type LayoutPrimitivesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function LayoutPrimitivesVariant1({ className, ...props }: LayoutPrimitivesVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="grid w-72 gap-6">
            <div className="h-6 rounded bg-slate-200"></div>
            <div className="h-10 rounded bg-slate-200"></div>
            <div className="h-14 rounded bg-slate-200"></div>
          </div>
    </div>
  )
}
