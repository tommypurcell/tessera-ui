import type { HTMLAttributes } from 'react'

export type DotsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DotsVariant1({ className, ...props }: DotsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="flex flex-wrap items-center gap-3">
            <i className="size-3.5 rounded-full bg-blue-600"></i
            ><i className="size-3.5 rounded-full bg-emerald-500"></i
            ><i className="size-3.5 rounded-full bg-amber-500"></i
            ><i className="size-3.5 rounded-full bg-red-500"></i
            ><i className="size-3.5 rounded-full bg-slate-400"></i>
          </div>
    </div>
  )
}
