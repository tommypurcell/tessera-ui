export type TipSelectorVariant1Props = {
  billAmount: number
  presetPercents: number[]
  selectedPercent: number
  splitCount: number
}

const currency = (n: number) => `$${n.toFixed(2)}`

/**
 * Copy-and-own Tailwind component. Preset tip-percent buttons with a
 * computed tip amount, total, and per-person split — distinct from
 * tiered-donation-buttons, which select a flat impact-labeled donation
 * amount rather than a percentage of a bill with a split calculation.
 */
export function TipSelector({ billAmount, presetPercents, selectedPercent, splitCount }: TipSelectorVariant1Props) {
  const tipAmount = billAmount * (selectedPercent / 100)
  const total = billAmount + tipAmount
  const perPerson = total / splitCount

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-gray-200 bg-white p-5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Bill</span>
        <span className="font-medium text-gray-900">{currency(billAmount)}</span>
      </div>

      <div className="flex gap-2" role="group" aria-label="Tip percentage">
        {presetPercents.map((pct) => (
          <button
            key={pct}
            type="button"
            aria-pressed={pct === selectedPercent}
            className={`flex-1 rounded-md py-2 text-sm font-semibold transition-colors ${
              pct === selectedPercent ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {pct}%
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-1.5 border-t border-gray-100 pt-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Tip ({selectedPercent}%)</span>
          <span className="text-gray-900">{currency(tipAmount)}</span>
        </div>
        <div className="flex items-center justify-between font-semibold text-gray-900">
          <span>Total</span>
          <span>{currency(total)}</span>
        </div>
        {splitCount > 1 ? (
          <div className="flex items-center justify-between text-gray-500">
            <span>Per person ({splitCount})</span>
            <span>{currency(perPerson)}</span>
          </div>
        ) : null}
      </div>
    </div>
  )
}
