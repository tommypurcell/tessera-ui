import { useState } from 'react'

export type SubscriptionTierToggleVariant1DarkProps = {
  monthlyPrice: number
  annualMonthlyPrice: number
  savingsLabel?: string
  defaultPeriod?: 'monthly' | 'annual'
  onChange?: (period: 'monthly' | 'annual') => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Monthly/Annual billing period toggle adapted for dark
 * surfaces, with a savings badge on Annual and a price readout driven by real state.
 */
export function SubscriptionTierToggleVariant1Dark({
  monthlyPrice,
  annualMonthlyPrice,
  savingsLabel = 'Save 20%',
  defaultPeriod = 'annual',
  onChange,
  className,
}: SubscriptionTierToggleVariant1DarkProps) {
  const [period, setPeriod] = useState<'monthly' | 'annual'>(defaultPeriod)

  const handleChange = (next: 'monthly' | 'annual') => {
    setPeriod(next)
    onChange?.(next)
  }

  const price = period === 'annual' ? annualMonthlyPrice : monthlyPrice

  return (
    <div className={`flex flex-col items-center gap-3 ${className ?? ''}`}>
      <div role="radiogroup" aria-label="Billing period" className="inline-flex items-center gap-1 rounded-full bg-gray-900 p-1">
        <button
          type="button"
          role="radio"
          aria-checked={period === 'monthly'}
          onClick={() => handleChange('monthly')}
          className={
            period === 'monthly'
              ? 'rounded-full bg-gray-700 px-4 py-1.5 text-sm font-semibold text-white shadow-sm'
              : 'rounded-full px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-gray-200'
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
              ? 'inline-flex items-center gap-1.5 rounded-full bg-gray-700 px-4 py-1.5 text-sm font-semibold text-white shadow-sm'
              : 'inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium text-gray-400 hover:text-gray-200'
          }
        >
          Annual
          <span className="rounded-full bg-emerald-950 px-1.5 py-0.5 text-xs font-semibold text-emerald-400">
            {savingsLabel}
          </span>
        </button>
      </div>

      <p className="text-sm text-gray-400">
        <span className="text-2xl font-semibold text-white">${price}</span>
        /month{period === 'annual' ? ', billed annually' : ''}
      </p>
    </div>
  )
}
