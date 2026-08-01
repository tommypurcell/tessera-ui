import type { HTMLAttributes } from 'react'

export type NavigationAtomsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function NavigationAtomsVariant5({ className, ...props }: NavigationAtomsVariant5Props) {
  return (
    <div className={className} {...props}>
      <a
            href="#"
            aria-current="page"
            className="flex w-56 items-center gap-3 rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white"
          >
            <span aria-hidden="true" className="text-base">✦</span>
            Overview
          </a>
    </div>
  )
}
