export type ConsentChecklistConsent = {
  id: string
  label: string
  checked: boolean
  required: boolean
}

export type ConsentChecklistVariant2DarkProps = {
  title: string
  consents: ConsentChecklistConsent[]
  onConsentChange?: (id: string, checked: boolean) => void
  onSelectAllChange?: (checked: boolean) => void
  submitLabel: string
  onSubmit?: () => void
}

/**
 * Copy-and-own Tailwind component. Consent checklist with a select-all
 * control and per-item Required/Optional badges, adapted for dark surfaces.
 */
export function ConsentChecklist({
  title,
  consents,
  onConsentChange,
  onSelectAllChange,
  submitLabel,
  onSubmit,
}: ConsentChecklistVariant2DarkProps) {
  const allChecked = consents.every((consent) => consent.checked)

  return (
    <form
      className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-6"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.()
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-white">{title}</h2>
        <label className="flex items-center gap-1.5 text-xs font-medium text-gray-400">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={(event) => onSelectAllChange?.(event.target.checked)}
            className="size-3.5 rounded border-gray-600 bg-gray-950 text-blue-500 focus:ring-blue-400"
          />
          Select all
        </label>
      </div>

      <div className="mt-4 flex flex-col divide-y divide-gray-800">
        {consents.map((consent) => (
          <label key={consent.id} className="flex items-start justify-between gap-3 py-3">
            <span className="flex items-start gap-2.5">
              <input
                type="checkbox"
                checked={consent.checked}
                onChange={(event) => onConsentChange?.(consent.id, event.target.checked)}
                className="mt-0.5 size-4 rounded border-gray-600 bg-gray-950 text-blue-500 focus:ring-blue-400"
              />
              <span className="text-sm text-gray-200">{consent.label}</span>
            </span>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                consent.required ? 'bg-red-500/10 text-red-400' : 'bg-gray-800 text-gray-400'
              }`}
            >
              {consent.required ? 'Required' : 'Optional'}
            </span>
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200"
      >
        {submitLabel}
      </button>
    </form>
  )
}
