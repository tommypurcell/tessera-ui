export type DonationTier = {
  id: string
  amountLabel: string
  impactLabel: string
}

export type TieredDonationButtonsVariant1DarkProps = {
  tiers: DonationTier[]
  selectedTierId: string | null
  onSelectTier?: (id: string) => void
  customAmount: string
  onCustomAmountChange?: (value: string) => void
  donateLabel: string
  onDonate?: () => void
}

/**
 * Copy-and-own Tailwind component. Preset donation-amount grid with a
 * custom-amount field, adapted for dark surfaces.
 */
export function TieredDonationButtons({
  tiers,
  selectedTierId,
  onSelectTier,
  customAmount,
  onCustomAmountChange,
  donateLabel,
  onDonate,
}: TieredDonationButtonsVariant1DarkProps) {
  return (
    <div className="w-full max-w-sm">
      <h2 className="text-sm font-semibold text-white">Choose an amount</h2>
      <div role="radiogroup" aria-label="Donation amount" className="mt-3 grid grid-cols-3 gap-2">
        {tiers.map((tier) => {
          const selected = tier.id === selectedTierId
          return (
            <button
              key={tier.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onSelectTier?.(tier.id)}
              className={`rounded-lg px-3 py-3 text-center ${
                selected
                  ? 'border-2 border-blue-500 bg-blue-500/10'
                  : 'border border-gray-700 hover:border-gray-600'
              }`}
            >
              <span className={`block text-sm font-semibold ${selected ? 'text-blue-200' : 'text-white'}`}>
                {tier.amountLabel}
              </span>
              <span className={`mt-0.5 block text-xs ${selected ? 'text-blue-300' : 'text-gray-400'}`}>
                {tier.impactLabel}
              </span>
            </button>
          )
        })}
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        <label htmlFor="custom-amount-dark" className="text-sm font-medium text-gray-300">
          Or enter a custom amount
        </label>
        <div className="flex items-center rounded-md border border-gray-700 bg-gray-900 px-3 py-2 shadow-sm focus-within:border-blue-500">
          <span className="text-sm text-gray-500">$</span>
          <input
            id="custom-amount-dark"
            type="text"
            inputMode="numeric"
            placeholder="0.00"
            value={customAmount}
            onChange={(event) => onCustomAmountChange?.(event.target.value)}
            className="min-w-0 flex-1 border-0 bg-transparent p-0 pl-1 text-sm text-white focus:outline-none"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={onDonate}
        className="mt-4 w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200"
      >
        {donateLabel}
      </button>
    </div>
  )
}
