import type { HTMLAttributes, ReactNode } from 'react'

export type DialogVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
  icon?: ReactNode
  title: string
  description: string
  cancelLabel?: string
  confirmLabel: string
  onCancel?: () => void
  onConfirm?: () => void
}

/**
 * Copy-and-own Tailwind component. Confirmation dialog taking a real
 * title/description/action-label contract — pass your own copy and handlers.
 */
export function DialogDark({
  className,
  icon,
  title,
  description,
  cancelLabel = 'Cancel',
  confirmLabel,
  onCancel,
  onConfirm,
  ...props
}: DialogVariant1DarkProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className={`w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-2xl ${className ?? ''}`}
      {...props}
    >
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-900/40">
            <span aria-hidden="true" className="size-5 text-red-400">
              {icon}
            </span>
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <h2 id="dialog-title" className="text-base font-semibold text-white">
            {title}
          </h2>
          <p id="dialog-description" className="mt-1.5 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2.5">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800"
        >
          {cancelLabel}
        </button>
        <button type="button" onClick={onConfirm} className="rounded-md bg-red-600 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-500">
          {confirmLabel}
        </button>
      </div>
    </div>
  )
}
