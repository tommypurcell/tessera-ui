import { useState } from 'react'

export type AccountBalanceCardVariant1DarkProps = {
  accountLabel: string
  balance: string
  lastFourDigits: string
  onSend?: () => void
  onDeposit?: () => void
  onTransfer?: () => void
}

/**
 * Copy-and-own Tailwind component. Bank account card with a maskable balance
 * (toggle between the real value and dots), the account's last-four digits,
 * and a row of quick actions (Send, Deposit, Transfer).
 */
export function AccountBalanceCardDark({ accountLabel, balance, lastFourDigits, onSend, onDeposit, onTransfer }: AccountBalanceCardVariant1DarkProps) {
  const [visible, setVisible] = useState(true)

  return (
    <div className="w-full max-w-xs rounded-xl border border-gray-700 bg-gray-900 p-5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-medium text-gray-400">{accountLabel}</p>
        <button
          type="button"
          aria-label={visible ? 'Hide balance' : 'Show balance'}
          aria-pressed={!visible}
          onClick={() => setVisible((value) => !value)}
          className="text-gray-500 hover:text-gray-200"
        >
          {visible ? (
            <svg aria-hidden="true" className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
              />
            </svg>
          ) : (
            <svg aria-hidden="true" className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
          )}
        </button>
      </div>

      <p className="mt-1.5 font-mono text-3xl font-semibold text-white">{visible ? balance : '••••••'}</p>
      <p className="mt-1 text-xs text-gray-400">Account &bull;&bull;&bull;&bull; {lastFourDigits}</p>

      <div className="mt-4 grid grid-cols-3 gap-2">
        <button type="button" onClick={onSend} className="flex flex-col items-center gap-1 rounded-lg border border-gray-700 py-2.5 text-xs font-medium text-gray-200 hover:bg-gray-800">
          <svg aria-hidden="true" className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
          </svg>
          Send
        </button>
        <button type="button" onClick={onDeposit} className="flex flex-col items-center gap-1 rounded-lg border border-gray-700 py-2.5 text-xs font-medium text-gray-200 hover:bg-gray-800">
          <svg aria-hidden="true" className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m0 0-6-6m6 6 6-6" />
          </svg>
          Deposit
        </button>
        <button type="button" onClick={onTransfer} className="flex flex-col items-center gap-1 rounded-lg border border-gray-700 py-2.5 text-xs font-medium text-gray-200 hover:bg-gray-800">
          <svg aria-hidden="true" className="size-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
          </svg>
          Transfer
        </button>
      </div>
    </div>
  )
}
