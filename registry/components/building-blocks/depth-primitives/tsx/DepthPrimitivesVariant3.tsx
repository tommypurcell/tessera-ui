import type { HTMLAttributes } from 'react'

export type DepthPrimitivesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DepthPrimitivesVariant3({ className, ...props }: DepthPrimitivesVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="relative inline-flex">
            <span className="grid size-11 place-items-center rounded-full bg-slate-200 text-sm font-semibold text-slate-700">MC</span>
            <span className="absolute -right-1 -bottom-1 inline-flex items-center rounded-full bg-slate-900 px-2 py-0.5 text-[11px] font-semibold text-white">Pro</span>
          </div>
    </div>
  )
}
