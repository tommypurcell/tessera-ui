import { useState } from 'react'

export type CheckoutOrderSummaryVariant1DarkProps = {
  itemCount: number
  subtotal: number
  shipping: number
  tax: number
  /** Called with the entered code when Apply is clicked. Return a discount amount, or undefined/0 to reject it. */
  onApplyPromo?: (code: string) => number | undefined
  onCheckout?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Itemized checkout order summary adapted for dark
 * surfaces — subtotal, shipping, tax, an applicable promo code field, and a computed total.
 */
export function CheckoutOrderSummaryVariant1Dark({
  itemCount,
  subtotal,
  shipping,
  tax,
  onApplyPromo,
  onCheckout,
  className,
}: CheckoutOrderSummaryVariant1DarkProps) {
  const [promoInput, setPromoInput] = useState('')
  const [appliedPromo, setAppliedPromo] = useState<{ code: string; discount: number } | null>(null)

  const handleApply = () => {
    if (!promoInput.trim()) return
    const discount = onApplyPromo?.(promoInput.trim())
    if (discount) {
      setAppliedPromo({ code: promoInput.trim(), discount })
    }
  }

  const total = subtotal + shipping + tax - (appliedPromo?.discount ?? 0)

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-4 shadow-sm ${className ?? ''}`}>
      <h3 className="text-sm font-semibold text-white">Order summary</h3>

      <dl className="mt-4 flex flex-col gap-2.5 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-gray-400">Subtotal ({itemCount} items)</dt>
          <dd className="text-white">${subtotal.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-400">Shipping</dt>
          <dd className="text-white">${shipping.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-400">Tax</dt>
          <dd className="text-white">${tax.toFixed(2)}</dd>
        </div>
        {appliedPromo ? (
          <div className="flex items-center justify-between">
            <dt className="text-emerald-400">Promo ({appliedPromo.code})</dt>
            <dd className="text-emerald-400">-${appliedPromo.discount.toFixed(2)}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-4 flex gap-2 border-t border-gray-800 pt-4">
        <label htmlFor="promo-code" className="sr-only">
          Promo code
        </label>
        <input
          id="promo-code"
          type="text"
          value={promoInput}
          onChange={(e) => setPromoInput(e.target.value)}
          placeholder="Promo code"
          className="min-w-0 flex-1 rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleApply}
          className="shrink-0 rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-semibold text-gray-200 shadow-sm hover:bg-gray-800"
        >
          Apply
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-800 pt-4">
        <span className="text-sm font-semibold text-white">Total</span>
        <span className="text-lg font-semibold text-white">${total.toFixed(2)}</span>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        className="mt-4 w-full rounded-md bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
      >
        Proceed to checkout
      </button>
    </div>
  )
}
