import type { HTMLAttributes } from 'react'

export type StatusPrimitivesVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function StatusPrimitivesVariant3({ className, ...props }: StatusPrimitivesVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
            <span aria-hidden="true" className="mt-0.5 size-2.5 rounded-full bg-amber-500"></span>
            <p className="text-sm text-amber-900">
              <span className="font-medium">Attention needed.</span> Billing expires in 3 days.
            </p>
          </div>
    </div>
  )
}
