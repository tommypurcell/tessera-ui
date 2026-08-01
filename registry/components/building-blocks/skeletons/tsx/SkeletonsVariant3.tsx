import type { HTMLAttributes } from 'react'

export type SkeletonsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkeletonsVariant3({ className, ...props }: SkeletonsVariant3Props) {
  return (
    <div className={className} {...props}>
      <span className="skeleton-shimmer inline-block h-24 w-48 rounded-md bg-slate-200"></span>
    </div>
  )
}
