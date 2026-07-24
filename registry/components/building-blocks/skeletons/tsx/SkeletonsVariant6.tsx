import type { HTMLAttributes } from 'react'

export type SkeletonsVariant6Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkeletonsVariant6({ className, ...props }: SkeletonsVariant6Props) {
  return (
    <div className={className} {...props}>
      <span className="h-10 w-64 animate-pulse rounded-md bg-slate-200"></span>
    </div>
  )
}
