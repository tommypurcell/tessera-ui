import type { HTMLAttributes, ReactNode } from 'react'

export type DrawerVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
  title: string
  children: ReactNode
  cancelLabel?: string
  confirmLabel: string
  onClose?: () => void
  onCancel?: () => void
  onConfirm?: () => void
}

/**
 * Copy-and-own Tailwind component. Slide-in side panel taking a real
 * title/children/action-label contract — pass your own form fields as children.
 */
export function DrawerDark({
  className,
  title,
  children,
  cancelLabel = 'Cancel',
  confirmLabel,
  onClose,
  onCancel,
  onConfirm,
  ...props
}: DrawerVariant1DarkProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
      className={`ml-auto flex h-full w-full max-w-sm flex-col border-l border-gray-800 bg-gray-900 shadow-2xl ${className ?? ''}`}
      {...props}
    >
      <div className="flex items-center justify-between border-b border-gray-800 px-5 py-4">
        <h2 id="drawer-title" className="text-base font-semibold text-white">
          {title}
        </h2>
        <button type="button" aria-label="Close drawer" onClick={onClose} className="rounded-md p-1.5 text-gray-500 hover:bg-gray-800 hover:text-gray-300">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 space-y-5 overflow-y-auto px-5 py-5">{children}</div>

      <div className="flex justify-end gap-2.5 border-t border-gray-800 px-5 py-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800"
        >
          {cancelLabel}
        </button>
        <button type="button" onClick={onConfirm} className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200">
          {confirmLabel}
        </button>
      </div>
    </div>
  )
}
