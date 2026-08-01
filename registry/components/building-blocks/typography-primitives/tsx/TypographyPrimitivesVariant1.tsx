import type { HTMLAttributes } from 'react'

export type TypographyPrimitivesVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TypographyPrimitivesVariant1({ className, ...props }: TypographyPrimitivesVariant1Props) {
  return (
    <div className={className} {...props}>
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Overview</p>
    </div>
  )
}
