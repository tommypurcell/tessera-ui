import type { HTMLAttributes } from 'react'

export type FieldAdornmentsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function FieldAdornmentsVariant2({ className, ...props }: FieldAdornmentsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div
            className="inline-flex size-9 items-center justify-center rounded-md border border-slate-200 bg-slate-50 text-slate-500"
          >
            @
          </div>
    </div>
  )
}
