import { useState } from 'react'

export type PosKeypadVariant1Props = {
  total: number
  quickCashAmounts?: number[]
  onCharge?: (input: { total: number; tendered: number; change: number }) => void
  className?: string
}

function formatCurrency(value: number) {
  return `$${value.toFixed(2)}`
}

const DIGIT_ROWS = [
  ['1', '2', '3'],
  ['4', '5', '6'],
  ['7', '8', '9'],
]

/**
 * Copy-and-own Tailwind component. POS keypad — numeric amount pad with quick-cash
 * buttons; cash tendered accumulates cent-by-cent, and change due is always computed
 * live from tendered minus the real total prop rather than hardcoded.
 */
export function PosKeypadVariant1({ total, quickCashAmounts = [20, 25, 40], onCharge, className }: PosKeypadVariant1Props) {
  const [cents, setCents] = useState(0)

  const tendered = cents / 100
  const change = tendered - total
  const isShort = change < 0

  function appendDigit(digit: string) {
    setCents((prev) => prev * 10 + Number(digit))
  }

  function backspace() {
    setCents((prev) => Math.floor(prev / 10))
  }

  function clear() {
    setCents(0)
  }

  function setQuickCash(amount: number) {
    setCents(Math.round(amount * 100))
  }

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ''}`}>
      <p className="text-xs font-medium text-gray-500">Total due</p>
      <p className="text-2xl font-bold text-gray-900">{formatCurrency(total)}</p>

      <div className="mt-3 flex items-center justify-between rounded-md bg-gray-50 px-3 py-2">
        <span className="text-xs font-medium text-gray-500">Cash tendered</span>
        <span className="text-sm font-semibold text-gray-900">{formatCurrency(tendered)}</span>
      </div>
      <div className="mt-1.5 flex items-center justify-between px-3">
        <span className="text-xs font-medium text-gray-500">Change due</span>
        <span className={`text-sm font-semibold ${isShort ? 'text-red-600' : 'text-emerald-600'}`}>{formatCurrency(Math.max(change, 0))}</span>
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {quickCashAmounts.map((amount) => (
          <button
            key={amount}
            type="button"
            onClick={() => setQuickCash(amount)}
            className="rounded-md border border-gray-300 bg-white py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            ${amount}
          </button>
        ))}
      </div>

      <div className="mt-3 grid grid-cols-3 gap-2">
        {DIGIT_ROWS.flat().map((digit) => (
          <button
            key={digit}
            type="button"
            onClick={() => appendDigit(digit)}
            className="rounded-md bg-gray-100 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-200"
          >
            {digit}
          </button>
        ))}
        <button type="button" onClick={clear} className="rounded-md bg-gray-100 py-2.5 text-sm font-semibold text-gray-500 hover:bg-gray-200">
          Clear
        </button>
        <button type="button" onClick={() => appendDigit('0')} className="rounded-md bg-gray-100 py-2.5 text-base font-semibold text-gray-900 hover:bg-gray-200">
          0
        </button>
        <button
          type="button"
          onClick={backspace}
          aria-label="Backspace"
          className="flex items-center justify-center rounded-md bg-gray-100 py-2.5 text-gray-500 hover:bg-gray-200"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.5H18a2.25 2.25 0 0 0 2.25-2.25V9.75A2.25 2.25 0 0 0 18 7.5H9.42a2.25 2.25 0 0 0-1.59.659L4.16 11.84a.6.6 0 0 0 0 .84l3.67 3.68a2.25 2.25 0 0 0 1.59.659Z"
            />
          </svg>
        </button>
      </div>

      <button
        type="button"
        onClick={() => onCharge?.({ total, tendered, change })}
        disabled={isShort}
        className="mt-3 w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none"
      >
        Charge
      </button>
    </div>
  )
}
