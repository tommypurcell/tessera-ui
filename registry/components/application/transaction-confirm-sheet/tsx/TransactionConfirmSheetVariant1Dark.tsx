import type { HTMLAttributes } from 'react'

export type TransactionConfirmSheetVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
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
export function TransactionConfirmSheetDark({
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
}: TransactionConfirmSheetVariant1DarkProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="tx-confirm-title"
      className={`w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-2xl ${className ?? ''}`}
      {...props}
    >
      <h2 id="tx-confirm-title" className="text-base font-semibold text-white">
        {title}
      </h2>

      <div className="mt-4 flex flex-col items-center rounded-lg bg-gray-800 py-4">
        <span className="text-2xl font-semibold text-white">{amount}</span>
        <span className="mt-0.5 text-sm text-gray-400">≈ {amountFiat}</span>
      </div>

      <div className="mt-4 flex flex-col gap-2.5 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-400">From</span>
          <code className="text-white">{fromAddress}</code>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">To</span>
          <code className="text-white">{toAddress}</code>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400">Network fee</span>
          <span className="text-white">{networkFee}</span>
        </div>
        <div className="flex items-center justify-between border-t border-gray-800 pt-2.5 font-medium">
          <span className="text-white">Total</span>
          <span className="text-white">{total}</span>
        </div>
      </div>

      <div className="mt-5 flex gap-2.5">
        <button type="button" onClick={onCancel} className="flex-1 rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800">
          {cancelLabel}
        </button>
        <button type="button" onClick={onConfirm} className="flex-1 rounded-md bg-white px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200">
          {confirmLabel}
        </button>
      </div>
    </div>
  )
}
