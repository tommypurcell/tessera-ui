import { useId } from 'react'

export type CurrencyConverterVariant1DarkProps = {
  fromAmount: string
  fromCurrency: string
  toCurrency: string
  currencies: string[]
  rate: number
  updatedLabel?: string
  onFromAmountChange?: (value: string) => void
  onFromCurrencyChange?: (code: string) => void
  onToCurrencyChange?: (code: string) => void
  onSwap?: () => void
}

/**
 * Copy-and-own Tailwind component. Dual amount fields for currency conversion:
 * a typed "You send" input and a derived read-only "You receive" output, with
 * a swap button and a rate/last-updated caption. Pass `rate` from your own
 * exchange-rate source; the receive amount is computed from it.
 */
export function CurrencyConverterDark({
  fromAmount,
  fromCurrency,
  toCurrency,
  currencies,
  rate,
  updatedLabel = 'Updated 2m ago',
  onFromAmountChange,
  onFromCurrencyChange,
  onToCurrencyChange,
  onSwap,
}: CurrencyConverterVariant1DarkProps) {
  const fromId = useId()
  const toId = useId()
  const parsed = Number.parseFloat(fromAmount) || 0
  const converted = (parsed * rate).toFixed(2)

  return (
    <div className="w-full max-w-xs">
      <label className="mb-1.5 block text-sm font-medium text-gray-200" htmlFor={fromId}>
        You send
      </label>
      <div className="flex items-center rounded-md border border-gray-600 bg-gray-900 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400">
        <input
          type="text"
          inputMode="decimal"
          id={fromId}
          value={fromAmount}
          onChange={(event) => onFromAmountChange?.(event.target.value)}
          className="h-10 w-full border-0 bg-transparent px-3 text-sm text-white focus:outline-none focus:ring-0"
        />
        <label htmlFor={`${fromId}-currency`} className="sr-only">
          From currency
        </label>
        <select
          id={`${fromId}-currency`}
          value={fromCurrency}
          onChange={(event) => onFromCurrencyChange?.(event.target.value)}
          className="h-10 shrink-0 rounded-e-md border-0 border-s border-gray-700 bg-transparent pe-7 ps-2 text-sm font-medium text-gray-300 focus:outline-none focus:ring-0"
        >
          {currencies.map((code) => (
            <option key={code} className="bg-gray-900">
              {code}
            </option>
          ))}
        </select>
      </div>

      <div className="relative my-1 flex items-center justify-center">
        <div className="absolute inset-x-0 h-px bg-gray-800" />
        <button
          type="button"
          aria-label="Swap currencies"
          onClick={onSwap}
          className="relative z-10 flex size-8 items-center justify-center rounded-full border border-gray-700 bg-gray-900 text-gray-400 shadow-sm hover:bg-gray-800 hover:text-white"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
          </svg>
        </button>
      </div>

      <label className="mb-1.5 block text-sm font-medium text-gray-200" htmlFor={toId}>
        You receive
      </label>
      <div className="flex items-center rounded-md border border-gray-700 bg-gray-800 shadow-sm">
        <input type="text" inputMode="decimal" id={toId} value={converted} readOnly className="h-10 w-full border-0 bg-transparent px-3 text-sm text-white focus:outline-none focus:ring-0" />
        <label htmlFor={`${toId}-currency`} className="sr-only">
          To currency
        </label>
        <select
          id={`${toId}-currency`}
          value={toCurrency}
          onChange={(event) => onToCurrencyChange?.(event.target.value)}
          className="h-10 shrink-0 rounded-e-md border-0 border-s border-gray-700 bg-transparent pe-7 ps-2 text-sm font-medium text-gray-300 focus:outline-none focus:ring-0"
        >
          {currencies.map((code) => (
            <option key={code} className="bg-gray-900">
              {code}
            </option>
          ))}
        </select>
      </div>

      <p className="mt-2.5 text-center text-xs text-gray-400">
        1 {fromCurrency} = {rate} {toCurrency} · {updatedLabel}
      </p>
    </div>
  )
}
