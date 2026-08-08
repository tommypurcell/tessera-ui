import { useId, useState } from 'react'

export type DiscountCodeFieldVariant1Props = {
  label?: string
  /** Validate the code; return a savings amount to accept, or undefined/0 to reject. */
  onApply?: (code: string) => number | undefined
  className?: string
}

type FieldState =
  | { status: 'idle' }
  | { status: 'applied'; code: string; savings: number }
  | { status: 'invalid'; code: string }

/**
 * Copy-and-own Tailwind component. Discount/promo code field with an Apply button that
 * transitions to a real applied (savings chip, removable) or invalid (inline error) state.
 */
export function DiscountCodeFieldVariant1({
  label = 'Discount code',
  onApply,
  className,
}: DiscountCodeFieldVariant1Props) {
  const [draft, setDraft] = useState('')
  const [field, setField] = useState<FieldState>({ status: 'idle' })
  const inputId = useId()
  const errorId = useId()

  const handleApply = () => {
    if (!draft.trim()) return
    const savings = onApply?.(draft.trim())
    if (savings) {
      setField({ status: 'applied', code: draft.trim(), savings })
    } else {
      setField({ status: 'invalid', code: draft.trim() })
    }
  }

  const handleRemove = () => {
    setField({ status: 'idle' })
    setDraft('')
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      {field.status === 'applied' ? (
        <div className="flex gap-2">
          <div className="flex min-w-0 flex-1 items-center justify-between rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2">
            <span className="text-sm font-medium text-emerald-800">{field.code}</span>
            <button
              type="button"
              aria-label={`Remove discount code ${field.code}`}
              onClick={handleRemove}
              className="text-emerald-600 hover:text-emerald-800"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="flex gap-2">
          <input
            id={inputId}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Enter code"
            aria-invalid={field.status === 'invalid' || undefined}
            aria-describedby={field.status === 'invalid' ? errorId : undefined}
            className={`min-w-0 flex-1 rounded-md border px-3 py-2 text-sm text-gray-900 shadow-sm focus:outline-none ${
              field.status === 'invalid'
                ? 'border-red-400 focus:border-red-500'
                : 'border-gray-300 focus:border-gray-500'
            }`}
          />
          <button
            type="button"
            onClick={handleApply}
            className="shrink-0 rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
          >
            Apply
          </button>
        </div>
      )}

      {field.status === 'applied' ? (
        <p className="text-xs text-emerald-700">
          Discount applied — you saved ${field.savings.toFixed(2)}.
        </p>
      ) : field.status === 'invalid' ? (
        <p id={errorId} role="alert" className="text-xs text-red-600">
          This code isn't valid.
        </p>
      ) : null}
    </div>
  )
}
