import type { HTMLAttributes } from 'react'

export type StatusPrimitivesVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StatusPrimitivesVariant5({ className, ...props }: StatusPrimitivesVariant5Props) {
  return (
    <div className={className} {...props}>
      <div className="grid gap-1">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Completion
            </span>
            <span className="text-sm text-slate-600">
              <span className="font-semibold text-slate-900">84%</span> of tasks finished
            </span>
          </div>
    </div>
  )
}
