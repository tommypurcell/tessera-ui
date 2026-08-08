import { useId, useState } from 'react'

export type DiscountCodeFieldVariant1DarkProps = {
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
 * Copy-and-own Tailwind component. Discount/promo code field adapted for dark surfaces,
 * with an Apply button that transitions to a real applied or invalid state.
 */
export function DiscountCodeFieldVariant1Dark({
  label = 'Discount code',
  onApply,
  className,
}: DiscountCodeFieldVariant1DarkProps) {
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
      <label htmlFor={inputId} className="text-sm font-medium text-gray-300">
        {label}
      </label>

      {field.status === 'applied' ? (
        <div className="flex gap-2">
          <div className="flex min-w-0 flex-1 items-center justify-between rounded-md border border-emerald-800 bg-emerald-950 px-3 py-2">
            <span className="text-sm font-medium text-emerald-300">{field.code}</span>
            <button
              type="button"
              aria-label={`Remove discount code ${field.code}`}
              onClick={handleRemove}
              className="text-emerald-400 hover:text-emerald-200"
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
            className={`min-w-0 flex-1 rounded-md border bg-gray-900 px-3 py-2 text-sm text-white shadow-sm focus:outline-none ${
              field.status === 'invalid'
                ? 'border-red-500 focus:border-red-400'
                : 'border-gray-700 focus:border-gray-500'
            }`}
          />
          <button
            type="button"
            onClick={handleApply}
            className="shrink-0 rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-semibold text-gray-200 shadow-sm hover:bg-gray-800"
          >
            Apply
          </button>
        </div>
      )}

      {field.status === 'applied' ? (
        <p className="text-xs text-emerald-400">
          Discount applied — you saved ${field.savings.toFixed(2)}.
        </p>
      ) : field.status === 'invalid' ? (
        <p id={errorId} role="alert" className="text-xs text-red-400">
          This code isn't valid.
        </p>
      ) : null}
    </div>
  )
}
