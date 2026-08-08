import type { ReactNode } from 'react'

export type ConsentChecklistItem = {
  id: string
  label: ReactNode
  checked: boolean
}

export type ConsentChecklistVariant1Props = {
  title: string
  description: string
  items: ConsentChecklistItem[]
  onItemChange?: (id: string, checked: boolean) => void
  helpText: string
  submitLabel: string
  onSubmit?: () => void
}

/**
 * Copy-and-own Tailwind component. Required-agreement checklist that
 * disables the submit button until every item is checked. Pass rich label
 * content (e.g. a link to the Terms of Service) via each item's label.
 */
export function ConsentChecklist({
  title,
  description,
  items,
  onItemChange,
  helpText,
  submitLabel,
  onSubmit,
}: ConsentChecklistVariant1Props) {
  const allChecked = items.every((item) => item.checked)

  return (
    <form
      className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.()
      }}
    >
      <h2 className="text-base font-semibold text-gray-900">{title}</h2>
      <p className="mt-1 text-sm text-gray-500">{description}</p>

      <div className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <label key={item.id} className="flex items-start gap-2.5">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={(event) => onItemChange?.(item.id, event.target.checked)}
              className="mt-0.5 size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-gray-700">{item.label}</span>
          </label>
        ))}
      </div>

      <p className="mt-3 text-xs text-gray-500">{helpText}</p>

      <button
        type="submit"
        disabled={!allChecked}
        aria-disabled={!allChecked}
        className={`mt-5 w-full rounded-md px-4 py-2.5 text-sm font-medium ${
          allChecked
            ? 'bg-gray-900 text-white shadow-sm hover:bg-gray-700'
            : 'cursor-not-allowed bg-gray-300 text-gray-500'
        }`}
      >
        {submitLabel}
      </button>
    </form>
  )
}
