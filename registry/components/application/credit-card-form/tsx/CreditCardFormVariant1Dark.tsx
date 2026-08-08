export type CardBrand = 'visa' | 'mastercard' | 'amex' | 'unknown'

export type CreditCardFormVariant1DarkProps = {
  cardNumber: string
  expiry: string
  cvc: string
  name: string
  /** Detected card brand from the number, e.g. via a BIN-prefix check. Pass 'unknown' before enough digits are entered. */
  brand: CardBrand
  amountLabel: string
  onCardNumberChange?: (value: string) => void
  onExpiryChange?: (value: string) => void
  onCvcChange?: (value: string) => void
  onNameChange?: (value: string) => void
  onSubmit?: () => void
}

const brandLabel: Record<CardBrand, string> = {
  visa: 'VISA',
  mastercard: 'MC',
  amex: 'AMEX',
  unknown: '',
}

/**
 * Copy-and-own Tailwind component. Vertical payment form with a
 * detected-brand badge, adapted for dark surfaces.
 */
export function CreditCardForm({
  cardNumber,
  expiry,
  cvc,
  name,
  brand,
  amountLabel,
  onCardNumberChange,
  onExpiryChange,
  onCvcChange,
  onNameChange,
  onSubmit,
}: CreditCardFormVariant1DarkProps) {
  return (
    <form
      className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-6"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.()
      }}
    >
      <h2 className="text-base font-semibold text-white">Payment details</h2>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="cc-number-dark" className="text-sm font-medium text-gray-300">
          Card number
        </label>
        <div className="relative">
          <input
            id="cc-number-dark"
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            value={cardNumber}
            onChange={(event) => onCardNumberChange?.(event.target.value)}
            className="w-full rounded-md border border-gray-700 bg-gray-950 py-2 pr-11 pl-3 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
          />
          {brand !== 'unknown' ? (
            <span
              aria-hidden="true"
              className="absolute top-1/2 right-3 flex h-5 w-7 -translate-y-1/2 items-center justify-center rounded-sm bg-blue-500 text-[9px] font-bold text-white"
            >
              {brandLabel[brand]}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cc-expiry-dark" className="text-sm font-medium text-gray-300">
            Expiry
          </label>
          <input
            id="cc-expiry-dark"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            placeholder="MM / YY"
            value={expiry}
            onChange={(event) => onExpiryChange?.(event.target.value)}
            className="rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cc-cvc-dark" className="text-sm font-medium text-gray-300">
            CVC
          </label>
          <input
            id="cc-cvc-dark"
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            placeholder="123"
            value={cvc}
            onChange={(event) => onCvcChange?.(event.target.value)}
            className="rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="cc-name-dark" className="text-sm font-medium text-gray-300">
          Name on card
        </label>
        <input
          id="cc-name-dark"
          type="text"
          autoComplete="cc-name"
          value={name}
          onChange={(event) => onNameChange?.(event.target.value)}
          className="rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200"
      >
        Pay {amountLabel}
      </button>
    </form>
  )
}
