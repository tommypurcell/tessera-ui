import type { HTMLAttributes } from 'react'

export type SelectionControlsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SelectionControlsVariant3({ className, ...props }: SelectionControlsVariant3Props) {
  return (
    <div className={className} {...props}>
      <label className="inline-flex items-center gap-3 text-sm text-slate-700">
            <span
              className="relative inline-flex h-6 w-11 rounded-full bg-blue-600 shadow-inner ring-1 ring-blue-600/10"
            >
              <span className="absolute top-0.5 right-0.5 size-5 rounded-full bg-white shadow-sm"></span>
            </span>
            Live updates
          </label>
    </div>
  )
}
