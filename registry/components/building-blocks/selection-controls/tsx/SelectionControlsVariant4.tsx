import type { HTMLAttributes } from 'react'

export type SelectionControlsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SelectionControlsVariant4({ className, ...props }: SelectionControlsVariant4Props) {
  return (
    <div className={className} {...props}>
      <button
            aria-pressed="true"
            className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700"
          >
            Product design
          </button>
    </div>
  )
}
