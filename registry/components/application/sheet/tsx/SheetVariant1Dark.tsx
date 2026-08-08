import type { ReactNode } from 'react'

export type SheetVariant1DarkProps = {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  cancelLabel?: string
  confirmLabel?: string
  onCancel?: () => void
  onConfirm?: () => void
  children?: ReactNode
}

/**
 * Copy-and-own Tailwind component. Right-edge slide-in panel for editing or inspecting
 * a record without leaving the current page. Render conditionally on `open` from your
 * own state and pass real content as `children`.
 */
export function SheetDark({
  open,
  onClose,
  title,
  description,
  cancelLabel = 'Cancel',
  confirmLabel = 'Save changes',
  onCancel,
  onConfirm,
  children,
}: SheetVariant1DarkProps) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div aria-hidden="true" className="absolute inset-0 bg-black/50" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="sheet-title"
        aria-describedby={description ? 'sheet-description' : undefined}
        className="relative flex h-dvh w-full max-w-sm flex-col bg-gray-900 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-gray-700 px-6 py-5">
          <div>
            <h2 id="sheet-title" className="text-base font-semibold text-white">
              {title}
            </h2>
            {description ? (
              <p id="sheet-description" className="mt-1 text-sm text-gray-400">
                {description}
              </p>
            ) : null}
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-me-2 -mt-1 rounded-full p-2 text-gray-500 hover:bg-gray-800 hover:text-gray-300 focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none"
          >
            <svg aria-hidden="true" className="size-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">{children}</div>

        <div className="flex justify-end gap-2.5 border-t border-gray-700 px-6 py-4">
          <button
            type="button"
            onClick={onCancel ?? onClose}
            className="rounded-md border border-gray-600 bg-gray-800 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-700"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="rounded-md bg-blue-300 px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-blue-200"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}
