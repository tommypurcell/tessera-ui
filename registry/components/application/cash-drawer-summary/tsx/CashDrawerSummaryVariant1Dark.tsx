export type CashDrawerSummaryVariant1Props = {
  expected: number
  counted: number
  tolerance?: number
}

const currency = (n: number) => `${n < 0 ? '-' : ''}$${Math.abs(n).toFixed(2)}`

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the cash
 * drawer reconciliation summary.
 */
export function CashDrawerSummary({ expected, counted, tolerance = 0.5 }: CashDrawerSummaryVariant1Props) {
  const variance = counted - expected
  const isBalanced = Math.abs(variance) <= tolerance
  const isOver = variance > tolerance
  const isShort = variance < -tolerance

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-5">
      <h2 className="text-sm font-medium text-gray-100">Drawer count</h2>

      <div className="grid grid-cols-2 gap-3">
        <div className="flex flex-col items-center gap-1 rounded-md bg-gray-800 p-3 text-center">
          <span className="text-xs text-gray-500">Expected</span>
          <span className="text-lg font-semibold text-gray-100">{currency(expected)}</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-md bg-gray-800 p-3 text-center">
          <span className="text-xs text-gray-500">Counted</span>
          <span className="text-lg font-semibold text-gray-100">{currency(counted)}</span>
        </div>
      </div>

      <div
        className={`flex items-center justify-between rounded-md border p-3 ${
          isBalanced ? 'border-emerald-800 bg-emerald-500/10' : isOver ? 'border-blue-800 bg-blue-500/10' : 'border-red-800 bg-red-500/10'
        }`}
        role="status"
      >
        <span className={`text-sm font-medium ${isBalanced ? 'text-emerald-400' : isOver ? 'text-blue-400' : 'text-red-400'}`}>
          {isBalanced ? 'Balanced' : isOver ? 'Over' : 'Short'}
        </span>
        <span className={`text-sm font-semibold ${isBalanced ? 'text-emerald-400' : isOver ? 'text-blue-400' : 'text-red-400'}`}>
          {isBalanced ? currency(0) : currency(variance)}
        </span>
      </div>
    </div>
  )
}
