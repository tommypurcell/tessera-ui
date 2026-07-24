import type { HTMLAttributes } from 'react'

export type DotsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DotsVariant2({ className, ...props }: DotsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="inline-flex flex-wrap items-center gap-2 text-sm text-slate-600">
            <i className="size-3.5 rounded-full bg-emerald-500"></i><span>Available</span>
          </div>
    </div>
  )
}
