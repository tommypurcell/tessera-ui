import type { HTMLAttributes } from 'react'

export type TerminalBlocksVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function TerminalBlocksVariant3Dark({ className, ...props }: TerminalBlocksVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="overflow-hidden rounded-lg border border-gray-800 bg-black">
            <div className="flex items-center gap-2 border-b border-gray-800 px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-red-500"></span>
              <span className="size-2.5 rounded-full bg-amber-500"></span>
              <span className="size-2.5 rounded-full bg-emerald-500"></span>
              <span className="ml-2 font-mono text-xs text-gray-400">deploy.sh</span>
            </div>
            <div className="space-y-1.5 p-4 font-mono text-sm">
              <p className="flex gap-2 text-gray-100">
                <span className="select-none text-emerald-400">$</span>
                <span>./deploy.sh --env production</span>
              </p>
              <p className="pl-5 text-gray-400">Building assets...</p>
              <p className="pl-5 text-gray-400">Uploading to edge network...</p>
              <p className="pl-5 text-emerald-400">Deployed to production in 4.2s</p>
            </div>
          </div>
    </div>
  )
}
