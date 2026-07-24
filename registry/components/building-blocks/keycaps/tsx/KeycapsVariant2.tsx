import type { HTMLAttributes } from 'react'

export type KeycapsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function KeycapsVariant2({ className, ...props }: KeycapsVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="flex flex-wrap items-center gap-2">
            <kbd
              className="inline-flex min-w-6 items-center justify-center rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 font-mono text-xs font-medium text-slate-700 shadow-[0_1px_0_#cbd5e1]"
              >⌘</kbd
            ><kbd
              className="inline-flex min-w-6 items-center justify-center rounded border border-slate-300 bg-slate-50 px-1.5 py-0.5 font-mono text-xs font-medium text-slate-700 shadow-[0_1px_0_#cbd5e1]"
              >K</kbd
            ><span className="text-sm text-slate-600">Search</span>
          </div>
    </div>
  )
}
