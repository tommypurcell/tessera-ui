import type { HTMLAttributes } from 'react'

export type ProgressAtomsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressAtomsVariant3({ className, ...props }: ProgressAtomsVariant3Props) {
  return (
    <div className={className} {...props}>
      <span className="inline-flex items-center gap-2 text-sm text-slate-600">
            <span className="grid size-6 place-items-center rounded-full bg-blue-600 text-xs font-semibold text-white">
              2
            </span>
            In review
          </span>
    </div>
  )
}
