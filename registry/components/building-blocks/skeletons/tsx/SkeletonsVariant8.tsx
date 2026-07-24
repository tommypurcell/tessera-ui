import type { HTMLAttributes } from 'react'

export type SkeletonsVariant8Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SkeletonsVariant8({ className, ...props }: SkeletonsVariant8Props) {
  return (
    <div className={className} {...props}>
      <div role="status" aria-busy="true" className="flex w-64 items-center gap-3">
            <span
              aria-hidden="true"
              className="size-10 shrink-0 animate-pulse rounded-full bg-slate-200"
            ></span>
            <span className="grid flex-1 gap-2" aria-hidden="true">
              <span className="h-3 w-full animate-pulse rounded-full bg-slate-200"></span>
              <span className="h-3 w-2/3 animate-pulse rounded-full bg-slate-200"></span>
            </span>
            <span className="sr-only">Loading</span>
          </div>
    </div>
  )
}
