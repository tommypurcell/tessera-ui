import type { HTMLAttributes } from 'react'

export type TerminalBlocksVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TerminalBlocksVariant2Dark({ className, ...props }: TerminalBlocksVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="space-y-1.5 rounded-lg border border-gray-800 bg-black p-4 font-mono text-sm">
            <p className="flex gap-2 text-gray-100">
              <span className="select-none text-emerald-400">$</span>
              <span>pnpm test</span>
            </p>
            <p className="pl-5 text-emerald-400">✓ renders the empty state (12ms)</p>
            <p className="pl-5 text-emerald-400">✓ submits the form on enter (8ms)</p>
            <p className="pl-5 text-red-400">✗ focuses the first invalid field (41ms)</p>
            <p className="pl-5 text-gray-500">3 tests, 1 failed</p>
          </div>
    </div>
  )
}
