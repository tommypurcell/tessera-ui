import type { HTMLAttributes } from 'react'

export type StatusPrimitivesVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StatusPrimitivesVariant4({ className, ...props }: StatusPrimitivesVariant4Props) {
  return (
    <div className={className} {...props}>
      <div className="grid w-36 gap-2 rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Response time
            </span>
            <span className="text-xl font-semibold tracking-tight text-slate-900">142ms</span>
          </div>
    </div>
  )
}
