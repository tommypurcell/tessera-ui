import type { HTMLAttributes } from 'react'

export type DividersVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DividersVariant2({ className, ...props }: DividersVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span>Shared</span><i aria-hidden="true" className="inline-block h-5 w-px bg-slate-300"></i
            ><span>Updated today</span>
          </div>
    </div>
  )
}
