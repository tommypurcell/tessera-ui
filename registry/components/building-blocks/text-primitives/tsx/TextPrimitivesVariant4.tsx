import type { HTMLAttributes } from 'react'

export type TextPrimitivesVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextPrimitivesVariant4({ className, ...props }: TextPrimitivesVariant4Props) {
  return (
    <div className={className} {...props}>
      <p className="text-3xl font-semibold tracking-tight text-slate-900 tabular-nums">48,240</p>
    </div>
  )
}
