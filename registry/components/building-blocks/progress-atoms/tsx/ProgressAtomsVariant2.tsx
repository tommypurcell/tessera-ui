import type { HTMLAttributes } from 'react'

export type ProgressAtomsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressAtomsVariant2({ className, ...props }: ProgressAtomsVariant2Props) {
  return (
    <div className={className} {...props}>
      <ol aria-label="Plan progress" className="flex items-center gap-2">
            <li className="h-2 w-12 rounded-full bg-emerald-500"></li>
            <li className="h-2 w-12 rounded-full bg-emerald-500"></li>
            <li className="h-2 w-12 rounded-full bg-blue-600"></li>
            <li className="h-2 w-12 rounded-full bg-slate-200"></li>
          </ol>
    </div>
  )
}
