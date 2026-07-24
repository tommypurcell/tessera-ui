import type { HTMLAttributes } from 'react'

export type KeycapsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function KeycapsVariant4({ className, ...props }: KeycapsVariant4Props) {
  return (
    <div className={className} {...props}>
      <kbd
            className="rounded border border-slate-300 bg-slate-50 px-2 py-1 font-mono text-xs shadow-[0_1px_0_#cbd5e1]"
            >↵ Enter</kbd
          >
    </div>
  )
}
