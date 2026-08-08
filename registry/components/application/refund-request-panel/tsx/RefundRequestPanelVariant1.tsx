import type { HTMLAttributes } from 'react'

export type RefundRequestPanelVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RefundRequestPanel({
  className,
  orderNumber,
  chargeSummary,
  reasonOptions,
  maxRefundable,
  defaultAmount,
  onCancel,
  onSubmit,
  ...props
}: RefundRequestPanelVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`} {...props}>
      <h3 className="text-sm font-semibold text-gray-900">Request a refund</h3>
      <p className="mt-1 text-xs text-gray-500">
        {orderNumber} — {chargeSummary}
      </p>

      <div className="mt-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="refund-reason" className="text-sm font-medium text-gray-700">
            Reason
          </label>
          <select id="refund-reason" className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none">
            {reasonOptions.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="refund-amount" className="text-sm font-medium text-gray-700">
            Amount
          </label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-sm text-gray-400">$</span>
            <input
              id="refund-amount"
              type="text"
              defaultValue={defaultAmount}
              className="w-full rounded-md border border-gray-300 py-2 pl-7 pr-3 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
            />
          </div>
          <p className="text-xs text-gray-400">Maximum refundable: {maxRefundable}</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="refund-note" className="text-sm font-medium text-gray-700">
            Note <span className="font-normal text-gray-400">(optional)</span>
          </label>
          <textarea
            id="refund-note"
            rows={3}
            placeholder="Add context for the customer or your records…"
            className="resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-5 flex justify-end gap-2.5">
        <button type="button" onClick={onCancel} className="rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onSubmit?.({ reason: reasonOptions[0], amount: defaultAmount ?? '', note: '' })}
          className="rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
        >
          Issue refund
        </button>
      </div>
    </div>
  )
}
