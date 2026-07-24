import type { HTMLAttributes } from 'react'

export type AtomsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AtomsVariant3({ className, ...props }: AtomsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-slate-900">Name</label
            ><input
              className="h-10 rounded-md border border-slate-300 px-3 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
              placeholder="Your name"
            />
          </div>
    </div>
  )
}
