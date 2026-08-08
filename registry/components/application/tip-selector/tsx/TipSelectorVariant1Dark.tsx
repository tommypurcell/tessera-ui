export type TipSelectorVariant1Props = {
  billAmount: number
  presetPercents: number[]
  selectedPercent: number
  splitCount: number
}

const currency = (n: number) => `$${n.toFixed(2)}`

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the tip
 * selector.
 */
export function TipSelector({ billAmount, presetPercents, selectedPercent, splitCount }: TipSelectorVariant1Props) {
  const tipAmount = billAmount * (selectedPercent / 100)
  const total = billAmount + tipAmount
  const perPerson = total / splitCount

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-5">
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-500">Bill</span>
        <span className="font-medium text-gray-100">{currency(billAmount)}</span>
      </div>

      <div className="flex gap-2" role="group" aria-label="Tip percentage">
        {presetPercents.map((pct) => (
          <button
            key={pct}
            type="button"
            aria-pressed={pct === selectedPercent}
            className={`flex-1 rounded-md py-2 text-sm font-semibold transition-colors ${
              pct === selectedPercent ? 'bg-gray-100 text-gray-900' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {pct}%
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-1.5 border-t border-gray-800 pt-3 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Tip ({selectedPercent}%)</span>
          <span className="text-gray-100">{currency(tipAmount)}</span>
        </div>
        <div className="flex items-center justify-between font-semibold text-gray-100">
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
