import type { HTMLAttributes } from 'react'

export type AtomsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AtomsVariant4({ className, ...props }: AtomsVariant4Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-center gap-4">
            <span
              className="size-5 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600"
            ></span
            ><span className="h-2 w-40 overflow-hidden rounded-full bg-slate-200"
              ><span className="block h-full w-2/3 rounded-full bg-blue-600"></span></span
            ><span className="size-10 animate-pulse rounded-full bg-slate-200"></span>
          </div>
    </div>
  )
}
