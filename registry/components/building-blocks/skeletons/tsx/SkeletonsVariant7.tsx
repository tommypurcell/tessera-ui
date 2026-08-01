import type { HTMLAttributes } from 'react'

export type SkeletonsVariant7Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkeletonsVariant7({ className, ...props }: SkeletonsVariant7Props) {
  return (
    <div className={className} {...props}>
      <span className="skeleton-shimmer inline-block h-32 w-64 rounded-xl bg-slate-200"></span>
    </div>
  )
}
