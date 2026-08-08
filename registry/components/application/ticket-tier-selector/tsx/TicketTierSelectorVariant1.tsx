export type TicketTier = {
  id: string
  name: string
  description: string
  price: number
  quantity: number
  onChange?: (quantity: number) => void
}

export type TicketTierSelectorVariant1Props = {
  tiers: TicketTier[]
  className?: string
}

const formatUsd = (n: number) => `$${n.toFixed(2)}`

/**
 * Copy-and-own Tailwind component. Ticket purchase tier list: each tier has a
 * name, description, price, and a quantity stepper (decrement disables at
 * zero), with a footer showing the total ticket count and running price
 * total. Distinct from Variant Selector, which picks one option among
 * mutually exclusive choices rather than independent per-tier quantities.
 */
export function TicketTierSelector({ tiers, className }: TicketTierSelectorVariant1Props) {
  const totalQty = tiers.reduce((sum, t) => sum + t.quantity, 0)
  const totalPrice = tiers.reduce((sum, t) => sum + t.quantity * t.price, 0)

  return (
    <div className={`rounded-xl border border-gray-200 bg-white ${className ?? ''}`}>
      <ul className="divide-y divide-gray-200">
        {tiers.map((tier) => (
          <li key={tier.id} className="flex items-center gap-4 px-5 py-4">
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{tier.name}</p>
              <p className="mt-0.5 text-xs text-gray-500">
                {tier.description} &middot; {formatUsd(tier.price)}
              </p>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                disabled={tier.quantity === 0}
                onClick={() => tier.onChange?.(Math.max(0, tier.quantity - 1))}
                aria-label={`Decrease ${tier.name} quantity`}
                className={
                  tier.quantity === 0
                    ? 'flex h-7 w-7 cursor-not-allowed items-center justify-center rounded-md border border-gray-200 text-gray-300'
                    : 'flex h-7 w-7 items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50'
                }
              >
                −
              </button>
              <span className="w-5 text-center text-sm font-medium text-gray-900">{tier.quantity}</span>
              <button
                type="button"
                onClick={() => tier.onChange?.(tier.quantity + 1)}
                aria-label={`Increase ${tier.name} quantity`}
                className="flex h-7 w-7 items-center justify-center rounded-md border border-gray-300 text-gray-500 hover:bg-gray-50"
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-gray-200 px-5 py-4">
        <span className="text-sm text-gray-500">
          {totalQty} {totalQty === 1 ? 'ticket' : 'tickets'}
        </span>
        <span className="text-base font-semibold text-gray-900">{formatUsd(totalPrice)}</span>
      </div>
    </div>
  )
}
