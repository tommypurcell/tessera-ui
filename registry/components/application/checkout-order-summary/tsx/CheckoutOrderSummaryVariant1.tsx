import { useState } from 'react'

export type CheckoutOrderSummaryVariant1Props = {
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
 * Copy-and-own Tailwind component. Itemized checkout order summary — subtotal, shipping,
 * tax, an applicable promo code field, and a computed total, all driven by real state.
 */
export function CheckoutOrderSummaryVariant1({
  itemCount,
  subtotal,
  shipping,
  tax,
  onApplyPromo,
  onCheckout,
  className,
}: CheckoutOrderSummaryVariant1Props) {
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
    <div className={`rounded-xl border border-gray-200 bg-white p-4 shadow-sm ${className ?? ''}`}>
      <h3 className="text-sm font-semibold text-gray-900">Order summary</h3>

      <dl className="mt-4 flex flex-col gap-2.5 text-sm">
        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Subtotal ({itemCount} items)</dt>
          <dd className="text-gray-900">${subtotal.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Shipping</dt>
          <dd className="text-gray-900">${shipping.toFixed(2)}</dd>
        </div>
        <div className="flex items-center justify-between">
          <dt className="text-gray-600">Tax</dt>
          <dd className="text-gray-900">${tax.toFixed(2)}</dd>
        </div>
        {appliedPromo ? (
          <div className="flex items-center justify-between">
            <dt className="text-emerald-700">Promo ({appliedPromo.code})</dt>
            <dd className="text-emerald-700">-${appliedPromo.discount.toFixed(2)}</dd>
          </div>
        ) : null}
      </dl>

      <div className="mt-4 flex gap-2 border-t border-gray-100 pt-4">
        <label htmlFor="promo-code" className="sr-only">
          Promo code
        </label>
        <input
          id="promo-code"
          type="text"
          value={promoInput}
          onChange={(e) => setPromoInput(e.target.value)}
          placeholder="Promo code"
          className="min-w-0 flex-1 rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
        />
        <button
          type="button"
          onClick={handleApply}
          className="shrink-0 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Apply
        </button>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="text-sm font-semibold text-gray-900">Total</span>
        <span className="text-lg font-semibold text-gray-900">${total.toFixed(2)}</span>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        className="mt-4 w-full rounded-md bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
      >
        Proceed to checkout
      </button>
    </div>
  )
}
