import type { HTMLAttributes } from 'react'

export type AvatarsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AvatarsVariant5({ className, ...props }: AvatarsVariant5Props) {
  return (
    <div className={className} {...props}>
      <span
            aria-label="Studio workspace"
            className="grid size-12 place-items-center rounded-xl bg-slate-100 text-sm font-semibold text-slate-700 ring-1 ring-slate-200"
          >
            SW
          </span>
    </div>
  )
}
