import type { HTMLAttributes } from 'react'

export type FieldAdornmentsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function FieldAdornmentsVariant4({ className, ...props }: FieldAdornmentsVariant4Props) {
  return (
    <div className={className} {...props}>
      <div className="flex w-72 items-start gap-2 text-sm text-slate-600">
            <span aria-hidden="true" className="mt-0.5 size-2 rounded-full bg-blue-600"></span>
            <p>Used in page titles and search results.</p>
          </div>
    </div>
  )
}
