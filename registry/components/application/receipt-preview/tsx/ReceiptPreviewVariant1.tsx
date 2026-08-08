export type ReceiptLineItem = {
  id: string
  label: string
  amountLabel: string
}

export type ReceiptPreviewVariant1Props = {
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
 * Copy-and-own Tailwind component. Classic thermal-receipt layout with a
 * monospace font and dashed section separators — distinct from
 * application-invoice-table since it renders a single itemized receipt as a
 * standalone printable-style document rather than a table row.
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
}: ReceiptPreviewVariant1Props) {
  return (
    <div className="w-full max-w-xs bg-white p-5 font-mono text-xs text-gray-800 shadow-sm">
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
