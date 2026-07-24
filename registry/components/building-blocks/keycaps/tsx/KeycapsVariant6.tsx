import type { HTMLAttributes } from 'react'

export type KeycapsVariant6Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function KeycapsVariant6({ className, ...props }: KeycapsVariant6Props) {
  return (
    <div className={className} {...props}>
      <div className="flex items-center gap-1">
            <kbd className="rounded border border-slate-300 bg-slate-50 px-2 py-1 font-mono text-xs">↑</kbd
            ><kbd className="rounded border border-slate-300 bg-slate-50 px-2 py-1 font-mono text-xs">↓</kbd
            ><kbd className="rounded border border-slate-300 bg-slate-50 px-2 py-1 font-mono text-xs">←</kbd
            ><kbd className="rounded border border-slate-300 bg-slate-50 px-2 py-1 font-mono text-xs">→</kbd>
          </div>
    </div>
  )
}
