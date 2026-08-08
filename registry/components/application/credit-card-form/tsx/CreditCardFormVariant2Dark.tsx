export type CreditCardFormVariant2DarkProps = {
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
 * Copy-and-own Tailwind component. Payment form with a live card preview,
 * adapted for dark surfaces.
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
}: CreditCardFormVariant2DarkProps) {
  return (
    <form
      className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-6"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.()
      }}
    >
      <div
        aria-hidden="true"
        className="rounded-lg bg-gradient-to-br from-gray-700 to-black p-4 text-white ring-1 ring-white/10"
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
        <label htmlFor="cc2-number-dark" className="text-sm font-medium text-gray-300">
          Card number
        </label>
        <input
          id="cc2-number-dark"
          type="text"
          inputMode="numeric"
          autoComplete="cc-number"
          value={cardNumber}
          onChange={(event) => onCardNumberChange?.(event.target.value)}
          className="rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cc2-expiry-dark" className="text-sm font-medium text-gray-300">
            Expiry
          </label>
          <input
            id="cc2-expiry-dark"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            value={expiry}
            onChange={(event) => onExpiryChange?.(event.target.value)}
            className="rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cc2-cvc-dark" className="text-sm font-medium text-gray-300">
            CVC
          </label>
          <input
            id="cc2-cvc-dark"
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            value={cvc}
            onChange={(event) => onCvcChange?.(event.target.value)}
            className="rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200"
      >
        Save card
      </button>
    </form>
  )
}
