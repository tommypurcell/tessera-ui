export type OrderCartItem = {
  id: string
  name: string
  modifiers: string[]
  quantity: number
  price: number
}

export type OrderCartDrawerVariant1Props = {
  items: OrderCartItem[]
  onCheckout?: () => void
}

const currency = (n: number) => `$${n.toFixed(2)}`

/**
 * Copy-and-own Tailwind component. Food-order cart drawer — the
 * subtotal is computed as the sum of each item's quantity × price, and
 * modifiers render as real per-item text, never baked into the item
 * name.
 */
export function OrderCartDrawer({ items, onCheckout }: OrderCartDrawerVariant1Props) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-gray-200 bg-white p-5">
      <h2 className="text-sm font-medium text-gray-900">Your order</h2>

      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-600">
              {item.quantity}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">{item.name}</p>
              {item.modifiers.length > 0 ? <p className="text-xs text-gray-500">{item.modifiers.join(', ')}</p> : null}
            </div>
            <span className="shrink-0 text-sm text-gray-700">{currency(item.quantity * item.price)}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-sm font-semibold text-gray-900">
        <span>Subtotal</span>
        <span>{currency(subtotal)}</span>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
      >
        Checkout · {currency(subtotal)}
      </button>
    </div>
  )
}
