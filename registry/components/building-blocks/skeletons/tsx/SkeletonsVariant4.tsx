import type { HTMLAttributes } from 'react'

export type SkeletonsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkeletonsVariant4({ className, ...props }: SkeletonsVariant4Props) {
  return (
    <div className={className} {...props}>
      <span className="skeleton-shimmer inline-block aspect-video w-64 rounded-lg bg-slate-200"></span>
    </div>
  )
}
