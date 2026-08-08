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
 * Copy-and-own Tailwind component. Dark-surface variant of the POS
 * barcode scan-log rows.
 */
export function BarcodeScanRow({ items, onVoid }: BarcodeScanRowVariant1Props) {
  return (
    <ul className="flex w-full max-w-xl flex-col divide-y divide-gray-800 rounded-lg border border-gray-800 bg-gray-900">
      {items.map((item) => (
        <li key={item.sku} className="flex items-center gap-3 px-4 py-2.5 text-sm">
          <code className="w-24 shrink-0 truncate font-mono text-xs text-gray-500">{item.sku}</code>
          <span className="min-w-0 flex-1 truncate text-gray-100">{item.name}</span>
          <span className="shrink-0 text-gray-500">×{item.quantity}</span>
          <span className="w-16 shrink-0 text-right font-medium text-gray-100">{currency(item.unitPrice * item.quantity)}</span>
          <button
            type="button"
            aria-label={`Void ${item.name}`}
            onClick={() => onVoid?.(item.sku)}
            className="shrink-0 text-xs font-medium text-red-400 hover:underline"
          >
            Void
          </button>
        </li>
      ))}
    </ul>
  )
}
