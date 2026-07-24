import type { HTMLAttributes } from 'react'

export type SkeletonsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkeletonsVariant5({ className, ...props }: SkeletonsVariant5Props) {
  return (
    <div className={className} {...props}>
      <span className="h-10 w-24 animate-pulse rounded-md bg-slate-200"></span>
    </div>
  )
}
