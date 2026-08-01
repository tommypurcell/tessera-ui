import type { HTMLAttributes } from 'react'

export type TextPrimitivesVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TextPrimitivesVariant2({ className, ...props }: TextPrimitivesVariant2Props) {
  return (
    <div className={className} {...props}>
      <h2 className="text-base font-semibold tracking-tight text-slate-900">Weekly momentum</h2>
    </div>
  )
}
