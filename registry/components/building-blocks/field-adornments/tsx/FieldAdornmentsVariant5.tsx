import type { HTMLAttributes } from 'react'

export type FieldAdornmentsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function FieldAdornmentsVariant5({ className, ...props }: FieldAdornmentsVariant5Props) {
  return (
    <div className={className} {...props}>
      <span className="text-xs font-medium tabular-nums text-slate-500">64 / 120</span>
    </div>
  )
}
