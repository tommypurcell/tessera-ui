import type { HTMLAttributes } from 'react'

export type ColorSignalsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ColorSignalsVariant3({ className, ...props }: ColorSignalsVariant3Props) {
  return (
    <div className={className} {...props}>
      <span className="inline-flex items-center gap-2 text-sm text-slate-600">
            <span className="size-2.5 rounded-full bg-amber-500"></span>
            Draft
          </span>
    </div>
  )
}
