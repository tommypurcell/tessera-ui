import type { HTMLAttributes } from 'react'

export type AtomsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AtomsVariant5({ className, ...props }: AtomsVariant5Props) {
  return (
    <div className={className} {...props}>
      <div
            className="flex w-full max-w-lg flex-col gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-3 text-sm text-slate-600">
              <span>Shared</span><span className="h-5 w-px bg-slate-200"></span><span>Updated today</span>
            </div>
            <hr className="border-0 border-t border-slate-200" />
          </div>
    </div>
  )
}
