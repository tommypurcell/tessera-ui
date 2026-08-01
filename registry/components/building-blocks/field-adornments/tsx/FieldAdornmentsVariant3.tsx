import type { HTMLAttributes } from 'react'

export type FieldAdornmentsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function FieldAdornmentsVariant3({ className, ...props }: FieldAdornmentsVariant3Props) {
  return (
    <div className={className} {...props}>
      <span className="text-sm font-medium text-slate-500">Optional</span>
    </div>
  )
}
