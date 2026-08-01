import type { HTMLAttributes } from 'react'

export type SelectionControlsVariant5Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function SelectionControlsVariant5({ className, ...props }: SelectionControlsVariant5Props) {
  return (
    <div className={className} {...props}>
      <label
            className="flex w-72 items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm"
          >
            <input
              type="checkbox"
              checked
              className="mt-0.5 size-4 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-600/20"
            />
            <span className="grid gap-1">
              <span className="text-sm font-medium text-slate-900">Share with workspace</span>
              <span className="text-sm text-slate-600">Everyone with access can view this page.</span>
            </span>
          </label>
    </div>
  )
}
