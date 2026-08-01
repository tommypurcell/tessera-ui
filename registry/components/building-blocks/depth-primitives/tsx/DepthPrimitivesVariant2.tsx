import type { HTMLAttributes } from 'react'

export type DepthPrimitivesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DepthPrimitivesVariant2({ className, ...props }: DepthPrimitivesVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="w-72 rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm text-slate-700">Inset supporting surface</p>
          </div>
    </div>
  )
}
