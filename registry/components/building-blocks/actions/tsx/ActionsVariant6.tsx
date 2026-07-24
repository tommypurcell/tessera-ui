import type { HTMLAttributes } from 'react'

export type ActionsVariant6Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ActionsVariant6({ className, ...props }: ActionsVariant6Props) {
  return (
    <div className={className} {...props}>
      <div role="group" className="inline-flex items-center gap-px rounded-md shadow-sm">
            <button
              className="rounded-l-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
            >
              Day</button
            ><button className="rounded-r-md bg-slate-900 px-3 py-2 text-sm text-white">Week</button>
          </div>
    </div>
  )
}
