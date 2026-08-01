import type { HTMLAttributes } from 'react'

export type NavigationAtomsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function NavigationAtomsVariant1({ className, ...props }: NavigationAtomsVariant1Props) {
  return (
    <div className={className} {...props}>
      <nav aria-label="Breadcrumb">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900">Projects</a>
          </nav>
    </div>
  )
}
