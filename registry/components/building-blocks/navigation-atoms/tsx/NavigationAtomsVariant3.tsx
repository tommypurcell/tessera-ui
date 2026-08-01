import type { HTMLAttributes } from 'react'

export type NavigationAtomsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function NavigationAtomsVariant3({ className, ...props }: NavigationAtomsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="inline-flex items-center gap-2" aria-label="Carousel position">
            <span className="size-2.5 rounded-full bg-slate-900"></span>
            <span className="size-2.5 rounded-full bg-slate-300"></span>
            <span className="size-2.5 rounded-full bg-slate-300"></span>
          </div>
    </div>
  )
}
