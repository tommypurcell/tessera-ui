export type DonationFrequency = 'monthly' | 'one-time'

export type DonationFrequencyTier = {
  id: string
  amountLabel: string
  impactLabel: string
}

export type TieredDonationButtonsVariant2Props = {
  title: string
  frequency: DonationFrequency
  onFrequencyChange?: (frequency: DonationFrequency) => void
  tiers: DonationFrequencyTier[]
  selectedTierId: string | null
  onSelectTier?: (id: string) => void
  donateLabel: string
  onDonate?: () => void
}

/**
 * Copy-and-own Tailwind component. Donation-tier card with a monthly/
 * one-time frequency toggle and a full-width impact description per row,
 * for a richer donation flow than the compact grid in Variant 1.
 */
export function TieredDonationButtons({
  title,
  frequency,
  onFrequencyChange,
  tiers,
  selectedTierId,
  onSelectTier,
  donateLabel,
  onDonate,
}: TieredDonationButtonsVariant2Props) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-gray-900">{title}</h2>
        <div role="radiogroup" aria-label="Donation frequency" className="flex rounded-full bg-gray-100 p-0.5 text-xs font-medium">
          <button
            type="button"
            role="radio"
            aria-checked={frequency === 'monthly'}
            onClick={() => onFrequencyChange?.('monthly')}
            className={`rounded-full px-2.5 py-1 ${frequency === 'monthly' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
          >
            Monthly
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={frequency === 'one-time'}
            onClick={() => onFrequencyChange?.('one-time')}
            className={`rounded-full px-2.5 py-1 ${frequency === 'one-time' ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'}`}
          >
            One-time
          </button>
        </div>
      </div>

      <div role="radiogroup" aria-label={`${frequency} donation amount`} className="mt-4 flex flex-col gap-2">
        {tiers.map((tier) => {
          const selected = tier.id === selectedTierId
          return (
            <button
              key={tier.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onSelectTier?.(tier.id)}
              className={`flex items-center justify-between rounded-lg px-4 py-3 text-left ${
                selected ? 'border-2 border-blue-600 bg-blue-50' : 'border border-gray-200 hover:border-gray-300'
              }`}
            >
              <span className={`text-sm font-medium ${selected ? 'text-blue-900' : 'text-gray-900'}`}>
                {tier.amountLabel}
              </span>
              <span className={`text-xs ${selected ? 'text-blue-700' : 'text-gray-500'}`}>{tier.impactLabel}</span>
            </button>
          )
        })}
      </div>

      <button
        type="button"
        onClick={onDonate}
        className="mt-4 w-full rounded-md bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
      >
        {donateLabel}
      </button>
    </div>
  )
}
