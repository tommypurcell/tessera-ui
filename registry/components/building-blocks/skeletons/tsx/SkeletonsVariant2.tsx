import type { HTMLAttributes } from 'react'

export type SkeletonsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkeletonsVariant2({ className, ...props }: SkeletonsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div aria-hidden="true" className="skeleton-shimmer size-10 rounded-full bg-slate-200"></div>
    </div>
  )
}
