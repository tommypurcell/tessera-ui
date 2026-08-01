import type { HTMLAttributes } from 'react'

export type ColorSignalsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ColorSignalsVariant2({ className, ...props }: ColorSignalsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="w-72 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-900">
            Tinted surface for supporting context.
          </div>
    </div>
  )
}
