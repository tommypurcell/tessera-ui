import type { HTMLAttributes } from 'react'

export type TypographyPrimitivesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TypographyPrimitivesVariant2({ className, ...props }: TypographyPrimitivesVariant2Props) {
  return (
    <div className={className} {...props}>
      <p className="text-3xl font-semibold tracking-tight text-slate-900 tabular-nums">48,240</p>
    </div>
  )
}
