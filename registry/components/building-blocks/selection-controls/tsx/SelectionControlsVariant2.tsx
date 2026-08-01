import type { HTMLAttributes } from 'react'

export type SelectionControlsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SelectionControlsVariant2({ className, ...props }: SelectionControlsVariant2Props) {
  return (
    <div className={className} {...props}>
      <label className="inline-flex items-center gap-3 text-sm text-slate-700">
            <input
              type="radio"
              name="density"
              checked
              className="size-4 border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />
            Comfortable
          </label>
    </div>
  )
}
