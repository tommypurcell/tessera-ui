import { useState } from 'react'

export type TransferFormAccount = {
  label: string
}

export type TransferFormVariant1DarkProps = {
  fromAccounts: TransferFormAccount[]
  toAccounts: TransferFormAccount[]
  defaultAmount?: string
  defaultDate?: string
  onSubmit?: (values: { from: string; to: string; amount: string; when: 'now' | 'schedule'; date: string }) => void
}

/**
 * Copy-and-own Tailwind component. Transfer form with from/to account
 * selectors, an amount field, a Now/Schedule toggle, and a date input.
 */
export function TransferFormDark({ fromAccounts, toAccounts, defaultAmount = '', defaultDate = '', onSubmit }: TransferFormVariant1DarkProps) {
  const [from, setFrom] = useState(fromAccounts[0]?.label ?? '')
  const [to, setTo] = useState(toAccounts[0]?.label ?? '')
  const [amount, setAmount] = useState(defaultAmount)
  const [when, setWhen] = useState<'now' | 'schedule'>('now')
  const [date, setDate] = useState(defaultDate)

  return (
    <form
      className="w-full max-w-sm rounded-xl border border-gray-700 bg-gray-900 p-6"
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit?.({ from, to, amount, when, date })
      }}
    >
      <h2 className="text-base font-semibold text-white">Transfer money</h2>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="transfer-from-dark" className="text-sm font-medium text-gray-300">
          From
        </label>
        <select
          id="transfer-from-dark"
          value={from}
          onChange={(event) => setFrom(event.target.value)}
          className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-400 focus:outline-none"
        >
          {fromAccounts.map((account) => (
            <option key={account.label}>{account.label}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="transfer-to-dark" className="text-sm font-medium text-gray-300">
          To
        </label>
        <select
          id="transfer-to-dark"
          value={to}
          onChange={(event) => setTo(event.target.value)}
          className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-400 focus:outline-none"
        >
          {toAccounts.map((account) => (
            <option key={account.label}>{account.label}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="transfer-amount-dark" className="text-sm font-medium text-gray-300">
          Amount
        </label>
        <div className="relative">
          <span className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-sm text-gray-400">$</span>
          <input
            id="transfer-amount-dark"
            type="text"
            inputMode="decimal"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            className="w-full rounded-md border border-gray-700 bg-gray-800 py-2 pr-3 pl-6 text-sm text-white shadow-sm focus:border-blue-400 focus:outline-none"
          />
        </div>
      </div>

      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-gray-300">When</legend>
        <div className="mt-1.5 grid grid-cols-2 gap-2">
          <label className="flex cursor-pointer items-center justify-center rounded-md border px-3 py-2 text-sm font-medium has-[:checked]:border-white has-[:checked]:bg-white has-[:checked]:text-gray-900 [&:not(:has(:checked))]:border-gray-700 [&:not(:has(:checked))]:text-gray-300">
            <input type="radio" name="transfer-when-dark" value="now" checked={when === 'now'} onChange={() => setWhen('now')} className="sr-only" />
            Now
          </label>
          <label className="flex cursor-pointer items-center justify-center rounded-md border px-3 py-2 text-sm font-medium has-[:checked]:border-white has-[:checked]:bg-white has-[:checked]:text-gray-900 [&:not(:has(:checked))]:border-gray-700 [&:not(:has(:checked))]:text-gray-300">
            <input type="radio" name="transfer-when-dark" value="schedule" checked={when === 'schedule'} onChange={() => setWhen('schedule')} className="sr-only" />
            Schedule
          </label>
        </div>
      </fieldset>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="transfer-date-dark" className="text-sm font-medium text-gray-300">
          Date
        </label>
        <input
          id="transfer-date-dark"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
          className="rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-400 focus:outline-none [color-scheme:dark]"
        />
      </div>

      <button type="submit" className="mt-5 w-full rounded-md bg-white px-4 py-2.5 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-200">
        Review transfer
      </button>
    </form>
  )
}
