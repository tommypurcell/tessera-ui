export type ConsentChecklistConsent = {
  id: string
  label: string
  checked: boolean
  required: boolean
}

export type ConsentChecklistVariant2Props = {
  title: string
  consents: ConsentChecklistConsent[]
  onConsentChange?: (id: string, checked: boolean) => void
  onSelectAllChange?: (checked: boolean) => void
  submitLabel: string
  onSubmit?: () => void
}

/**
 * Copy-and-own Tailwind component. Consent checklist with a "Select all"
 * master checkbox and a Required/Optional badge per item — submit is not
 * gated here since only required items (not the optional ones) need to be
 * checked; wire your own validation against the required items' checked state.
 */
export function ConsentChecklist({
  title,
  consents,
  onConsentChange,
  onSelectAllChange,
  submitLabel,
  onSubmit,
}: ConsentChecklistVariant2Props) {
  const allChecked = consents.every((consent) => consent.checked)

  return (
    <form
      className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.()
      }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        <label className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <input
            type="checkbox"
            checked={allChecked}
            onChange={(event) => onSelectAllChange?.(event.target.checked)}
            className="size-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          Select all
        </label>
      </div>

      <div className="mt-4 flex flex-col divide-y divide-gray-100">
        {consents.map((consent) => (
          <label key={consent.id} className="flex items-start justify-between gap-3 py-3">
            <span className="flex items-start gap-2.5">
              <input
                type="checkbox"
                checked={consent.checked}
                onChange={(event) => onConsentChange?.(consent.id, event.target.checked)}
                className="mt-0.5 size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">{consent.label}</span>
            </span>
            <span
              className={`shrink-0 rounded-full px-2 py-0.5 text-xs font-medium ${
                consent.required ? 'bg-red-50 text-red-600' : 'bg-gray-100 text-gray-500'
              }`}
            >
              {consent.required ? 'Required' : 'Optional'}
            </span>
          </label>
        ))}
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
      >
        {submitLabel}
      </button>
    </form>
  )
}
