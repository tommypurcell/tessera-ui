import type { HTMLAttributes } from 'react'

export type TextPrimitivesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextPrimitivesVariant1({ className, ...props }: TextPrimitivesVariant1Props) {
  return (
    <div className={className} {...props}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Overview</p>
    </div>
  )
}
