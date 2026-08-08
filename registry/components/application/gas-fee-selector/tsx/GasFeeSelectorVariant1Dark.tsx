import type { HTMLAttributes } from 'react'

export type GasFeeTier = {
  id: string
  label: string
  eta: string
  cost: string
  selected?: boolean
}

export type GasFeeSelectorVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
  title: string
  tiers: GasFeeTier[]
  estimatedFeeLabel: string
  estimatedFeeValue: string
  onSelectTier?: (tier: GasFeeTier) => void
}

/**
 * Copy-and-own Tailwind component. Network-fee tier selector taking a real
 * tiers contract — pass your own fee-estimation data instead of hand-editing markup.
 */
export function GasFeeSelectorDark({ className, title, tiers, estimatedFeeLabel, estimatedFeeValue, onSelectTier, ...props }: GasFeeSelectorVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`} {...props}>
      <h3 className="text-sm font-semibold text-white">{title}</h3>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {tiers.map((tier) => (
          <label
            key={tier.id}
            className={`flex cursor-pointer flex-col items-center gap-1 rounded-lg px-2 py-3 ${
              tier.selected ? 'border-2 border-white bg-gray-800' : 'border border-gray-800 hover:bg-gray-800'
            }`}
          >
            <input type="radio" name="gas-fee" checked={tier.selected ?? false} onChange={() => onSelectTier?.(tier)} className="sr-only" />
            <span className={`text-xs font-medium ${tier.selected ? 'text-white' : 'text-gray-400'}`}>{tier.label}</span>
            <span className="text-sm font-semibold text-white">{tier.eta}</span>
            <span className={`text-xs ${tier.selected ? 'text-gray-400' : 'text-gray-500'}`}>{tier.cost}</span>
          </label>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-800 pt-3 text-sm">
        <span className="text-gray-400">{estimatedFeeLabel}</span>
        <span className="font-medium text-white">{estimatedFeeValue}</span>
      </div>
    </div>
  )
}
