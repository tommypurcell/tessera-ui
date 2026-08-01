import type { HTMLAttributes } from 'react'

export type SelectionControlsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SelectionControlsVariant1({ className, ...props }: SelectionControlsVariant1Props) {
  return (
    <div className={className} {...props}>
      <label className="inline-flex items-center gap-3 text-sm text-slate-700">
            <input
              type="checkbox"
              checked
              className="size-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />
            Enable notifications
          </label>
    </div>
  )
}
