import type { HTMLAttributes } from 'react'

export type SkeletonsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkeletonsVariant1({ className, ...props }: SkeletonsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div aria-hidden="true" className="h-3 w-48 animate-pulse rounded-full bg-slate-200"></div>
    </div>
  )
}
