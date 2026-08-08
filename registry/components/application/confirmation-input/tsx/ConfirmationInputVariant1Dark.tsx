import { useId, useState } from 'react'

export type ConfirmationInputVariant1DarkProps = {
  title: string
  description: React.ReactNode
  confirmPhrase: string
  confirmLabel?: string
  cancelLabel?: string
  onCancel?: () => void
  onConfirm?: () => void
}

/**
 * Copy-and-own Tailwind component. Destructive confirmation dialog that requires
 * the user to type an exact phrase (e.g. a resource name) before the confirm
 * button is enabled. Prevents accidental irreversible actions from a single click.
 */
export function ConfirmationInputDark({
  title,
  description,
  confirmPhrase,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onCancel,
  onConfirm,
}: ConfirmationInputVariant1DarkProps) {
  const [value, setValue] = useState('')
  const inputId = useId()
  const helpId = `${inputId}-help`
  const matches = value === confirmPhrase

  return (
    <div
      role="alertdialog"
      aria-labelledby={`${inputId}-title`}
      aria-describedby={`${inputId}-description`}
      className="w-full max-w-sm rounded-xl bg-gray-900 p-6 shadow-2xl"
    >
      <div className="flex items-start gap-4">
        <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-red-400/10">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-red-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <div className="min-w-0 flex-1">
          <h2 id={`${inputId}-title`} className="text-base font-semibold text-white">
            {title}
          </h2>
          <p id={`${inputId}-description`} className="mt-1.5 text-sm leading-relaxed text-gray-400">
            {description}
          </p>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor={inputId} className="text-sm font-medium text-gray-200">
          Type <span className="font-mono font-semibold text-white">{confirmPhrase}</span> to confirm
        </label>
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={confirmPhrase}
          aria-describedby={helpId}
          className={`rounded-md border bg-gray-900 px-3 py-2 text-sm text-white shadow-sm focus:outline-none ${
            matches ? 'border-emerald-400 focus:border-emerald-400' : 'border-gray-600 focus:border-red-400'
          }`}
        />
        {matches ? (
          <p id={helpId} className="flex items-center gap-1 text-xs text-emerald-400">
            <svg aria-hidden="true" className="size-3.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Confirmed — ready to continue
          </p>
        ) : (
          <p id={helpId} className="sr-only">
            The confirm button stays disabled until this exactly matches {confirmPhrase}.
          </p>
        )}
      </div>

      <div className="mt-6 flex justify-end gap-2.5">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md border border-gray-600 bg-gray-800 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-700"
        >
          {cancelLabel}
        </button>
        <button
          type="button"
          disabled={!matches}
          onClick={onConfirm}
          className="rounded-md bg-red-500 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-400 disabled:cursor-not-allowed disabled:bg-red-500/30 disabled:hover:bg-red-500/30"
        >
          {confirmLabel}
        </button>
      </div>
    </div>
  )
}
