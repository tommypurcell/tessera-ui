export type DonationFrequency = 'monthly' | 'one-time'

export type DonationFrequencyTier = {
  id: string
  amountLabel: string
  impactLabel: string
}

export type TieredDonationButtonsVariant2DarkProps = {
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
 * Copy-and-own Tailwind component. Donation-tier card with a frequency
 * toggle, adapted for dark surfaces.
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
}: TieredDonationButtonsVariant2DarkProps) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-white">{title}</h2>
        <div role="radiogroup" aria-label="Donation frequency" className="flex rounded-full bg-gray-800 p-0.5 text-xs font-medium">
          <button
            type="button"
            role="radio"
            aria-checked={frequency === 'monthly'}
            onClick={() => onFrequencyChange?.('monthly')}
            className={`rounded-full px-2.5 py-1 ${frequency === 'monthly' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-400'}`}
          >
            Monthly
          </button>
          <button
            type="button"
            role="radio"
            aria-checked={frequency === 'one-time'}
            onClick={() => onFrequencyChange?.('one-time')}
            className={`rounded-full px-2.5 py-1 ${frequency === 'one-time' ? 'bg-gray-700 text-white shadow-sm' : 'text-gray-400'}`}
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
                selected
                  ? 'border-2 border-blue-500 bg-blue-500/10'
                  : 'border border-gray-700 hover:border-gray-600'
              }`}
            >
              <span className={`text-sm font-medium ${selected ? 'text-blue-200' : 'text-white'}`}>
                {tier.amountLabel}
              </span>
              <span className={`text-xs ${selected ? 'text-blue-300' : 'text-gray-400'}`}>{tier.impactLabel}</span>
            </button>
          )
        })}
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
