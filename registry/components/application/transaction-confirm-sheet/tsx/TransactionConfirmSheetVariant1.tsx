import type { HTMLAttributes } from 'react'

export type TransactionConfirmSheetVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
  title: string
  amount: string
  amountFiat: string
  fromAddress: string
  toAddress: string
  networkFee: string
  total: string
  cancelLabel?: string
  confirmLabel?: string
  onCancel?: () => void
  onConfirm?: () => void
}

/**
 * Copy-and-own Tailwind component. Pending-transaction confirmation sheet
 * taking a real amount/address/fee contract — pass your own on-chain data instead of hand-editing markup.
 */
export function TransactionConfirmSheet({
  className,
  title,
  amount,
  amountFiat,
  fromAddress,
  toAddress,
  networkFee,
  total,
  cancelLabel = 'Cancel',
  confirmLabel = 'Confirm',
  onCancel,
  onConfirm,
  ...props
}: TransactionConfirmSheetVariant1Props) {
  return (
    <div role="dialog" aria-modal="true" aria-labelledby="tx-confirm-title" className={`w-full max-w-sm rounded-xl bg-white p-6 shadow-2xl ${className ?? ''}`} {...props}>
      <h2 id="tx-confirm-title" className="text-base font-semibold text-gray-900">
        {title}
      </h2>

      <div className="mt-4 flex flex-col items-center rounded-lg bg-gray-50 py-4">
        <span className="text-2xl font-semibold text-gray-900">{amount}</span>
        <span className="mt-0.5 text-sm text-gray-500">≈ {amountFiat}</span>
      </div>

      <div className="mt-4 flex flex-col gap-2.5 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-500">From</span>
          <code className="text-gray-900">{fromAddress}</code>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">To</span>
          <code className="text-gray-900">{toAddress}</code>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Network fee</span>
          <span className="text-gray-900">{networkFee}</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-2.5 font-medium">
          <span className="text-gray-900">Total</span>
          <span className="text-gray-900">{total}</span>
        </div>
      </div>

      <div className="mt-5 flex gap-2.5">
        <button type="button" onClick={onCancel} className="flex-1 rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          {cancelLabel}
        </button>
        <button type="button" onClick={onConfirm} className="flex-1 rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700">
          {confirmLabel}
        </button>
      </div>
    </div>
  )
}
