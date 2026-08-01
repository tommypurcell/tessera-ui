import type { HTMLAttributes } from 'react'

export type FinishingTouchesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function FinishingTouchesVariant1({ className, ...props }: FinishingTouchesVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="w-80 border-l-4 border-blue-500 bg-white pl-4">
            <p className="text-sm text-slate-700">Accent border for a compact supporting note.</p>
          </div>
    </div>
  )
}
