export type ScannedItem = {
  sku: string
  name: string
  quantity: number
  unitPrice: number
}

export type BarcodeScanRowVariant1Props = {
  items: ScannedItem[]
  onVoid?: (sku: string) => void
}

const currency = (n: number) => `$${n.toFixed(2)}`

/**
 * Copy-and-own Tailwind component. Dense POS scan-log rows (SKU, qty,
 * unit price, computed line total, void action) — distinct from
 * cart-line-item, which is a rich e-commerce card with a product image
 * and quantity stepper rather than a compact scan-log table row.
 */
export function BarcodeScanRow({ items, onVoid }: BarcodeScanRowVariant1Props) {
  return (
    <ul className="flex w-full max-w-xl flex-col divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white">
      {items.map((item) => (
        <li key={item.sku} className="flex items-center gap-3 px-4 py-2.5 text-sm">
          <code className="w-24 shrink-0 truncate font-mono text-xs text-gray-400">{item.sku}</code>
          <span className="min-w-0 flex-1 truncate text-gray-900">{item.name}</span>
          <span className="shrink-0 text-gray-500">×{item.quantity}</span>
          <span className="w-16 shrink-0 text-right font-medium text-gray-900">{currency(item.unitPrice * item.quantity)}</span>
          <button
            type="button"
            aria-label={`Void ${item.name}`}
            onClick={() => onVoid?.(item.sku)}
            className="shrink-0 text-xs font-medium text-red-600 hover:underline"
          >
            Void
          </button>
        </li>
      ))}
    </ul>
  )
}
