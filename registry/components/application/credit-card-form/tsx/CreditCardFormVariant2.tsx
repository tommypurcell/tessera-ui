export type CreditCardFormVariant2Props = {
  cardNumber: string
  /** Last 4 digits shown on the card preview, e.g. "4242". */
  maskedLastFour: string
  expiry: string
  cvc: string
  name: string
  /** Brand name shown on the card preview, e.g. "VISA". */
  brandLabel: string
  onCardNumberChange?: (value: string) => void
  onExpiryChange?: (value: string) => void
  onCvcChange?: (value: string) => void
  onSubmit?: () => void
}

/**
 * Copy-and-own Tailwind component. Payment form with a live visual card
 * preview above the fields, showing the masked number, name, and expiry as
 * they would appear on a physical card.
 */
export function CreditCardForm({
  cardNumber,
  maskedLastFour,
  expiry,
  cvc,
  name,
  brandLabel,
  onCardNumberChange,
  onExpiryChange,
  onCvcChange,
  onSubmit,
}: CreditCardFormVariant2Props) {
  return (
    <form
      className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.()
      }}
    >
      <div
        aria-hidden="true"
        className="rounded-lg bg-gradient-to-br from-gray-800 to-gray-950 p-4 text-white"
      >
        <div className="flex items-center justify-between">
          <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
            <rect x="2" y="6" width="20" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <rect x="2" y="9" width="20" height="2" fill="currentColor" />
          </svg>
          <span className="text-sm font-semibold tracking-wide">{brandLabel}</span>
        </div>
        <p className="mt-5 font-mono text-lg tracking-widest">•••• •••• •••• {maskedLastFour}</p>
        <div className="mt-3 flex items-center justify-between text-xs text-gray-300">
          <span>{name}</span>
          <span>{expiry}</span>
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="cc2-number" className="text-sm font-medium text-gray-700">
          Card number
        </label>
        <input
          id="cc2-number"
          type="text"
          inputMode="numeric"
          autoComplete="cc-number"
          value={cardNumber}
          onChange={(event) => onCardNumberChange?.(event.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cc2-expiry" className="text-sm font-medium text-gray-700">
            Expiry
          </label>
          <input
            id="cc2-expiry"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            value={expiry}
            onChange={(event) => onExpiryChange?.(event.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cc2-cvc" className="text-sm font-medium text-gray-700">
            CVC
          </label>
          <input
            id="cc2-cvc"
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            value={cvc}
            onChange={(event) => onCvcChange?.(event.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
      >
        Save card
      </button>
    </form>
  )
}
