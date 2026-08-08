import { useState } from 'react'

export type SubscriptionTierToggleVariant1Props = {
  monthlyPrice: number
  annualMonthlyPrice: number
  savingsLabel?: string
  defaultPeriod?: 'monthly' | 'annual'
  onChange?: (period: 'monthly' | 'annual') => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Monthly/Annual billing period toggle with a savings
 * badge on the Annual option and a price readout that updates with real selection state.
 */
export function SubscriptionTierToggleVariant1({
  monthlyPrice,
  annualMonthlyPrice,
  savingsLabel = 'Save 20%',
  defaultPeriod = 'annual',
  onChange,
  className,
}: SubscriptionTierToggleVariant1Props) {
  const [period, setPeriod] = useState<'monthly' | 'annual'>(defaultPeriod)

  const handleChange = (next: 'monthly' | 'annual') => {
    setPeriod(next)
    onChange?.(next)
  }

  const price = period === 'annual' ? annualMonthlyPrice : monthlyPrice

  return (
    <div className={`flex flex-col items-center gap-3 ${className ?? ''}`}>
      <div role="radiogroup" aria-label="Billing period" className="inline-flex items-center gap-1 rounded-full bg-gray-100 p-1">
        <button
          type="button"
          role="radio"
          aria-checked={period === 'monthly'}
          onClick={() => handleChange('monthly')}
          className={
            period === 'monthly'
              ? 'rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-gray-900 shadow-sm'
              : 'rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900'
          }
        >
          Monthly
        </button>
        <button
          type="button"
          role="radio"
          aria-checked={period === 'annual'}
          onClick={() => handleChange('annual')}
          className={
            period === 'annual'
              ? 'inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-gray-900 shadow-sm'
              : 'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 hover:text-gray-900'
          }
        >
          Annual
          <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-xs font-semibold text-emerald-700">
            {savingsLabel}
          </span>
        </button>
      </div>

      <p className="text-sm text-gray-500">
        <span className="text-2xl font-semibold text-gray-900">${price}</span>
        /month{period === 'annual' ? ', billed annually' : ''}
      </p>
    </div>
  )
}
