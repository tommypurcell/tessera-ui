import type { HTMLAttributes } from 'react'

export type TerminalBlocksVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TerminalBlocksVariant1({ className, ...props }: TerminalBlocksVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="rounded-lg bg-gray-950 p-4 font-mono text-sm">
            <p className="flex gap-2 text-gray-100">
              <span className="select-none text-emerald-400">$</span>
              <span>pnpm add tessera-ui</span>
            </p>
          </div>
    </div>
  )
}
