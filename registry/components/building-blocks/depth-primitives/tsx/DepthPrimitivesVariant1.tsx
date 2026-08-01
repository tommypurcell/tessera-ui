import type { HTMLAttributes } from 'react'

export type DepthPrimitivesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function DepthPrimitivesVariant1({ className, ...props }: DepthPrimitivesVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="w-72 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-sm text-slate-700">Elevated card base</p>
          </div>
    </div>
  )
}
