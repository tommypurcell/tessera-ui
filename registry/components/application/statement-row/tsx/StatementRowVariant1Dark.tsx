export type StatementTransaction = {
  date: string
  description: string
  amount: number
}

export type StatementRowVariant1Props = {
  startingBalance: number
  transactions: StatementTransaction[]
}

const currency = (n: number) => `${n < 0 ? '-' : ''}$${Math.abs(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the
 * bank-statement running-balance table.
 */
export function StatementRow({ startingBalance, transactions }: StatementRowVariant1Props) {
  let runningBalance = startingBalance

  return (
    <table className="w-full max-w-xl border-collapse overflow-hidden rounded-lg border border-gray-800 bg-gray-900 text-sm">
      <thead>
        <tr className="border-b border-gray-800 text-left text-xs text-gray-500">
          <th className="px-4 py-2 font-medium">Date</th>
          <th className="px-4 py-2 font-medium">Description</th>
          <th className="px-4 py-2 text-right font-medium">Amount</th>
          <th className="px-4 py-2 text-right font-medium">Balance</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-800">
        {transactions.map((tx) => {
          runningBalance += tx.amount
          const isCredit = tx.amount >= 0
          return (
            <tr key={`${tx.date}-${tx.description}`}>
              <td className="px-4 py-2 text-gray-500">{tx.date}</td>
              <td className="px-4 py-2 text-gray-100">{tx.description}</td>
              <td className={`px-4 py-2 text-right font-medium ${isCredit ? 'text-emerald-400' : 'text-gray-100'}`}>
                {isCredit ? '+' : ''}
                {currency(tx.amount)}
              </td>
              <td className="px-4 py-2 text-right text-gray-500">{currency(runningBalance)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
