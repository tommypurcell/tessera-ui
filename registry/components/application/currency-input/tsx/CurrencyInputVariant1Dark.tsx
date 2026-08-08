import { useId } from 'react'

export type CurrencyOptionDark = {
  code: string
  symbol: string
}

export type CurrencyInputVariant1DarkProps = {
  label: string
  value: string
  onChange?: (value: string) => void
  currency: string
  onCurrencyChange?: (code: string) => void
  currencies?: CurrencyOptionDark[]
  helpText?: string
  error?: string
}

const defaultCurrencies: CurrencyOptionDark[] = [
  { code: 'USD', symbol: '$' },
  { code: 'EUR', symbol: '€' },
  { code: 'GBP', symbol: '£' },
  { code: 'JPY', symbol: '¥' },
]

/**
 * Copy-and-own Tailwind component. Masked money field with a currency symbol
 * prefix and a currency-code selector. Pass a pre-formatted string (thousands
 * grouping, decimals) as `value` — this component only renders and lets you
 * wire your own input mask/formatting logic via onChange.
 */
export function CurrencyInputDark({
  label,
  value,
  onChange,
  currency,
  onCurrencyChange,
  currencies = defaultCurrencies,
  helpText,
  error,
}: CurrencyInputVariant1DarkProps) {
  const inputId = useId()
  const selectId = `${inputId}-currency`
  const describedById = error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined
  const symbol = currencies.find((option) => option.code === currency)?.symbol ?? '$'

  return (
    <div>
      <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-gray-200">
        {label}
      </label>
      <div
        className={`flex items-center rounded-md border bg-gray-900 shadow-sm transition-colors ${
          error ? 'border-red-400 ring-1 ring-red-400' : 'border-gray-600 focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400'
        }`}
      >
        <span aria-hidden="true" className="flex items-center pl-3 text-sm font-medium text-gray-400">
          {symbol}
        </span>
        <input
          type="text"
          inputMode="decimal"
          id={inputId}
          value={value}
          onChange={(event) => onChange?.(event.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedById}
          className="h-10 w-full border-0 bg-transparent px-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-0"
        />
        <label htmlFor={selectId} className="sr-only">
          Currency
        </label>
        <select
          id={selectId}
          value={currency}
          onChange={(event) => onCurrencyChange?.(event.target.value)}
          className="h-10 shrink-0 rounded-e-md border-0 border-s border-gray-700 bg-transparent pe-7 ps-2 text-sm font-medium text-gray-300 focus:outline-none focus:ring-0"
        >
          {currencies.map((option) => (
            <option key={option.code} value={option.code} className="bg-gray-900">
              {option.code}
            </option>
          ))}
        </select>
      </div>
      {error ? (
        <p id={`${inputId}-error`} role="alert" className="mt-1.5 text-xs text-red-400">
          {error}
        </p>
      ) : helpText ? (
        <p id={`${inputId}-help`} className="mt-1.5 text-xs text-gray-400">
          {helpText}
        </p>
      ) : null}
    </div>
  )
}
