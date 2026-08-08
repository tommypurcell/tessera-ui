import type { ReactNode } from 'react'

export type Transaction = {
  id: string
  merchant: string
  date: string
  category: string
  /** Positive for credit/income, negative for debit/expense. */
  amount: number
  icon: ReactNode
  iconBgClass: string
  iconTextClass: string
}

export type TransactionRowVariant1DarkProps = {
  transactions: Transaction[]
  className?: string
}

function formatAmount(amount: number) {
  const sign = amount >= 0 ? '+' : '-'
  const formatted = Math.abs(amount).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
  return `${sign}$${formatted}`
}

/**
 * Copy-and-own Tailwind component. Financial transaction list adapted for dark
 * surfaces — a category icon, merchant, date/category meta, and a signed amount.
 */
export function TransactionRowVariant1Dark({ transactions, className }: TransactionRowVariant1DarkProps) {
  return (
    <ul className={`divide-y divide-gray-800 rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}>
      {transactions.map((tx) => {
        const isCredit = tx.amount >= 0
        return (
          <li key={tx.id} className="flex items-center gap-3 p-4">
            <div className={`flex size-9 shrink-0 items-center justify-center rounded-full ${tx.iconBgClass} ${tx.iconTextClass}`}>
              {tx.icon}
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">{tx.merchant}</p>
              <p className="text-xs text-gray-500">
                {tx.date} · {tx.category}
              </p>
            </div>

            <span className={`shrink-0 text-sm font-semibold ${isCredit ? 'text-emerald-400' : 'text-white'}`}>
              {formatAmount(tx.amount)}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
