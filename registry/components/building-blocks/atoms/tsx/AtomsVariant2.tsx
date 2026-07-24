import type { HTMLAttributes } from 'react'

export type AtomsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AtomsVariant2({ className, ...props }: AtomsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-center gap-3">
            <span
              className="grid size-10 place-items-center rounded-full bg-slate-200 font-semibold text-slate-700"
              >A</span
            ><span className="grid size-10 place-items-center rounded-lg bg-blue-50 text-blue-700">✦</span
            ><span className="size-8 rounded-full bg-indigo-500 ring-2 ring-white ring-offset-1"></span>
          </div>
    </div>
  )
}
