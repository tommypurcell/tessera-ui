import type { HTMLAttributes } from 'react'

export type FieldAdornmentsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function FieldAdornmentsVariant1({ className, ...props }: FieldAdornmentsVariant1Props) {
  return (
    <div className={className} {...props}>
      <label className="text-sm font-medium text-slate-900">Workspace name</label>
    </div>
  )
}
