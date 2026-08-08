import type { HTMLAttributes } from 'react'

export type RefundRequestPanelVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  orderNumber: string
  chargeSummary: string
  reasonOptions: string[]
  maxRefundable: string
  defaultAmount?: string
  onCancel?: () => void
  onSubmit?: (values: { reason: string; amount: string; note: string }) => void
}

/**
 * Copy-and-own Tailwind component. Refund request form taking a real
 * order/reason contract — pass your own order data and submit handler instead of hand-editing markup.
 */
export function RefundRequestPanelDark({
  className,
  orderNumber,
  chargeSummary,
  reasonOptions,
  maxRefundable,
  defaultAmount,
  onCancel,
  onSubmit,
  ...props
}: RefundRequestPanelVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`} {...props}>
      <h3 className="text-sm font-semibold text-white">Request a refund</h3>
      <p className="mt-1 text-xs text-gray-500">
        {orderNumber} — {chargeSummary}
      </p>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="refund-reason" className="text-sm font-medium text-gray-300">
            Reason
          </label>
          <select id="refund-reason" className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none">
            {reasonOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="refund-amount" className="text-sm font-medium text-gray-300">
            Amount
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-gray-500">$</span>
            <input
              id="refund-amount"
              type="text"
              defaultValue={defaultAmount}
              className="w-full rounded-md border border-gray-700 bg-gray-900 py-2 pl-7 pr-3 text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none"
            />
          </div>
          <p className="text-xs text-gray-500">Maximum refundable: {maxRefundable}</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="refund-note" className="text-sm font-medium text-gray-300">
            Note <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <textarea
            id="refund-note"
            rows={3}
            placeholder="Add context for the customer or your records…"
            className="resize-none rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white shadow-sm placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-2.5">
        <button type="button" onClick={onCancel} className="rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800">
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onSubmit?.({ reason: reasonOptions[0], amount: defaultAmount ?? '', note: '' })}
          className="rounded-md bg-white px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200"
        >
          Issue refund
        </button>
      </div>
    </div>
  )
}
