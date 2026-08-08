export type ReceiptLineItem = {
  id: string
  label: string
  amountLabel: string
}

export type ReceiptPreviewVariant2DarkProps = {
  orderLabel: string
  dateLabel: string
  statusLabel: string
  items: ReceiptLineItem[]
  subtotalLabel: string
  taxLabel: string
  totalLabel: string
  paymentMethodLabel: string
}

/**
 * Copy-and-own Tailwind component. Modern digital-receipt card adapted for
 * dark surfaces.
 */
export function ReceiptPreview({
  orderLabel,
  dateLabel,
  statusLabel,
  items,
  subtotalLabel,
  taxLabel,
  totalLabel,
  paymentMethodLabel,
}: ReceiptPreviewVariant2DarkProps) {
  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white">Receipt</h2>
          <p className="mt-0.5 text-xs text-gray-400">
            {orderLabel} &middot; {dateLabel}
          </p>
        </div>
        <span className="rounded-full bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-400">
          {statusLabel}
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2 border-t border-gray-800 pt-4">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between text-sm">
            <span className="text-gray-300">{item.label}</span>
            <span className="text-white">{item.amountLabel}</span>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-1.5 border-t border-gray-800 pt-4 text-sm">
        <div className="flex justify-between text-gray-400">
          <span>Subtotal</span>
          <span>{subtotalLabel}</span>
        </div>
        <div className="flex justify-between text-gray-400">
          <span>Tax</span>
          <span>{taxLabel}</span>
        </div>
        <div className="flex justify-between text-base font-semibold text-white">
          <span>Total</span>
          <span>{totalLabel}</span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-md bg-gray-800 px-3 py-2 text-xs text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0018.75 4.5H5.25A2.25 2.25 0 003 6.75v10.5A2.25 2.25 0 005.25 19.5z"
          />
        </svg>
        {paymentMethodLabel}
      </div>
    </div>
  )
}
