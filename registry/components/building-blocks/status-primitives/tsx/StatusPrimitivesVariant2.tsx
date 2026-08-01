import type { HTMLAttributes } from 'react'

export type StatusPrimitivesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StatusPrimitivesVariant2({ className, ...props }: StatusPrimitivesVariant2Props) {
  return (
    <div className={className} {...props}>
      <span
            className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-100"
          >
            Healthy
          </span>
    </div>
  )
}
