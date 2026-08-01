import type { HTMLAttributes } from 'react'

export type ProgressAtomsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressAtomsVariant4({ className, ...props }: ProgressAtomsVariant4Props) {
  return (
    <div className={className} {...props}>
      <ol aria-label="Delivery steps" className="flex items-center gap-3 text-sm text-slate-600">
            <li className="inline-flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-emerald-500"></span>
              Draft
            </li>
            <li aria-hidden="true" className="h-px w-8 bg-slate-200"></li>
            <li className="inline-flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-blue-600"></span>
              Review
            </li>
          </ol>
    </div>
  )
}
