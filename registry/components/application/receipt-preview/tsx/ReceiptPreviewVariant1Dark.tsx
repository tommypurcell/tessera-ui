export type ReceiptLineItem = {
  id: string
  label: string
  amountLabel: string
}

export type ReceiptPreviewVariant1DarkProps = {
  merchantName: string
  merchantAddress: string
  dateTimeLabel: string
  items: ReceiptLineItem[]
  subtotalLabel: string
  taxLabel: string
  totalLabel: string
  orderNumberLabel: string
}

/**
 * Copy-and-own Tailwind component. Thermal-receipt layout adapted for a dark
 * page surface — the receipt itself stays white paper-colored, as a real
 * printed receipt would, with a ring added for edge separation against the
 * dark background.
 */
export function ReceiptPreview({
  merchantName,
  merchantAddress,
  dateTimeLabel,
  items,
  subtotalLabel,
  taxLabel,
  totalLabel,
  orderNumberLabel,
}: ReceiptPreviewVariant1DarkProps) {
  return (
    <div className="w-full max-w-xs bg-white p-5 font-mono text-xs text-gray-800 shadow-lg ring-1 ring-white/10">
      <div className="text-center">
        <p className="text-sm font-semibold">{merchantName}</p>
        <p className="mt-0.5 text-gray-500">{merchantAddress}</p>
        <p className="text-gray-500">{dateTimeLabel}</p>
      </div>

      <div className="mt-3 border-t border-dashed border-gray-300 pt-3">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between">
            <span>{item.label}</span>
            <span>{item.amountLabel}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 border-t border-dashed border-gray-300 pt-3">
        <div className="flex justify-between text-gray-500">
          <span>Subtotal</span>
          <span>{subtotalLabel}</span>
        </div>
        <div className="flex justify-between text-gray-500">
          <span>Tax</span>
          <span>{taxLabel}</span>
        </div>
        <div className="mt-1 flex justify-between text-sm font-semibold text-gray-900">
          <span>Total</span>
          <span>{totalLabel}</span>
        </div>
      </div>

      <div className="mt-4 border-t border-dashed border-gray-300 pt-3 text-center text-gray-500">
        <p>Thank you for visiting!</p>
        <p className="mt-1">{orderNumberLabel}</p>
      </div>
    </div>
  )
}
