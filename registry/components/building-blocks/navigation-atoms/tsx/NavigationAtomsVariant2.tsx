import type { HTMLAttributes } from 'react'

export type NavigationAtomsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function NavigationAtomsVariant2({ className, ...props }: NavigationAtomsVariant2Props) {
  return (
    <div className={className} {...props}>
      <button
            aria-selected="true"
            className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1.5 text-sm font-medium text-white"
          >
            Overview
          </button>
    </div>
  )
}
