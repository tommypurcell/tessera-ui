import type { HTMLAttributes } from 'react'

export type AtomsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AtomsVariant1({ className, ...props }: AtomsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700"
              >Badge</span
            ><span className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700"
              >Tag</span
            ><kbd className="rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 font-mono text-xs"
              >⌘ K</kbd
            ><i className="size-2.5 rounded-full bg-emerald-500"></i>
          </div>
    </div>
  )
}
