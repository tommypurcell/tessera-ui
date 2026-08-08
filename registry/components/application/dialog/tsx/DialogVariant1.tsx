import type { HTMLAttributes, ReactNode } from 'react'

export type DialogVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
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
export function Dialog({
  className,
  icon,
  title,
  description,
  cancelLabel = 'Cancel',
  confirmLabel,
  onCancel,
  onConfirm,
  ...props
}: DialogVariant1Props) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      className={`w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl ${className ?? ''}`}
      {...props}
    >
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-100">
            <span aria-hidden="true" className="size-5 text-red-600">
              {icon}
            </span>
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <h2 id="dialog-title" className="text-base font-semibold text-gray-900">
            {title}
          </h2>
          <p id="dialog-description" className="mt-1.5 text-sm leading-relaxed text-gray-600">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-2.5">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
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
