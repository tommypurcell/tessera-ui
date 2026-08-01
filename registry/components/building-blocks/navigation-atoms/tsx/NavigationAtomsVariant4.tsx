import type { HTMLAttributes } from 'react'

export type NavigationAtomsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function NavigationAtomsVariant4({ className, ...props }: NavigationAtomsVariant4Props) {
  return (
    <div className={className} {...props}>
      <button
            className="flex w-72 items-center justify-between rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          >
            <span className="font-medium text-slate-900">Settings</span>
            <span aria-hidden="true" className="text-slate-400">⌘,</span>
          </button>
    </div>
  )
}
