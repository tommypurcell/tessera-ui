import type { HTMLAttributes } from 'react'

export type StatusPrimitivesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StatusPrimitivesVariant1({ className, ...props }: StatusPrimitivesVariant1Props) {
  return (
    <div className={className} {...props}>
      <span className="inline-flex items-center gap-2 text-sm text-slate-600">
            <span className="size-2.5 rounded-full bg-emerald-500"></span>
            Live
          </span>
    </div>
  )
}
