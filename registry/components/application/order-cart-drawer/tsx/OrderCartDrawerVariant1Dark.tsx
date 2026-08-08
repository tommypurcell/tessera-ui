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
 * Copy-and-own Tailwind component. Dark-surface variant of the food-order
 * cart drawer — subtotal computed from real quantity × price line items.
 */
export function OrderCartDrawer({ items, onCheckout }: OrderCartDrawerVariant1Props) {
  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-5">
      <h2 className="text-sm font-medium text-gray-100">Your order</h2>

      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-start gap-3">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs font-medium text-gray-300">
              {item.quantity}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-100">{item.name}</p>
              {item.modifiers.length > 0 ? <p className="text-xs text-gray-500">{item.modifiers.join(', ')}</p> : null}
            </div>
            <span className="shrink-0 text-sm text-gray-300">{currency(item.quantity * item.price)}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-gray-800 pt-3 text-sm font-semibold text-gray-100">
        <span>Subtotal</span>
        <span>{currency(subtotal)}</span>
      </div>

      <button
        type="button"
        onClick={onCheckout}
        className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-900"
      >
        Checkout · {currency(subtotal)}
      </button>
    </div>
  )
}
