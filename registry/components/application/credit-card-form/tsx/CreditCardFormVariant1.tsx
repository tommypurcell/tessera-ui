export type CardBrand = 'visa' | 'mastercard' | 'amex' | 'unknown'

export type CreditCardFormVariant1Props = {
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
 * Copy-and-own Tailwind component. Vertical payment form with a card-number
 * field that shows a detected-brand badge — pass your own brand-detection
 * logic (e.g. a BIN-prefix check) via the brand prop; this component only
 * renders the result.
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
}: CreditCardFormVariant1Props) {
  return (
    <form
      className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-6"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.()
      }}
    >
      <h2 className="text-base font-semibold text-gray-900">Payment details</h2>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="cc-number" className="text-sm font-medium text-gray-700">
          Card number
        </label>
        <div className="relative">
          <input
            id="cc-number"
            type="text"
            inputMode="numeric"
            autoComplete="cc-number"
            value={cardNumber}
            onChange={(event) => onCardNumberChange?.(event.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 pr-11 pl-3 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
          />
          {brand !== 'unknown' ? (
            <span
              aria-hidden="true"
              className="absolute top-1/2 right-3 flex h-5 w-7 -translate-y-1/2 items-center justify-center rounded-sm bg-blue-600 text-[9px] font-bold text-white"
            >
              {brandLabel[brand]}
            </span>
          ) : null}
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cc-expiry" className="text-sm font-medium text-gray-700">
            Expiry
          </label>
          <input
            id="cc-expiry"
            type="text"
            inputMode="numeric"
            autoComplete="cc-exp"
            placeholder="MM / YY"
            value={expiry}
            onChange={(event) => onExpiryChange?.(event.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cc-cvc" className="text-sm font-medium text-gray-700">
            CVC
          </label>
          <input
            id="cc-cvc"
            type="text"
            inputMode="numeric"
            autoComplete="cc-csc"
            placeholder="123"
            value={cvc}
            onChange={(event) => onCvcChange?.(event.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="cc-name" className="text-sm font-medium text-gray-700">
          Name on card
        </label>
        <input
          id="cc-name"
          type="text"
          autoComplete="cc-name"
          value={name}
          onChange={(event) => onNameChange?.(event.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-5 w-full rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
      >
        Pay {amountLabel}
      </button>
    </form>
  )
}
