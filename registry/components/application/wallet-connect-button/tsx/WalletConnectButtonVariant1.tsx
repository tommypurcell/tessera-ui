export type WalletConnectState = 'disconnected' | 'connecting' | 'connected'

export type WalletConnectButtonVariant1Props = {
  state: WalletConnectState
  address?: string
  balance?: string
  onConnect?: () => void
  onOpenMenu?: () => void
  className?: string
}

function truncateAddress(address: string) {
  if (address.length <= 12) return address
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

/**
 * Copy-and-own Tailwind component. Wallet connection button with three states:
 * disconnected ("Connect wallet"), connecting (spinner, disabled), and
 * connected (status dot, truncated address, balance, and a menu chevron).
 * Distinct from Social Login Buttons, which authenticate via an OAuth
 * provider rather than a blockchain wallet address/balance.
 */
export function WalletConnectButton({ state, address = '', balance, onConnect, onOpenMenu, className }: WalletConnectButtonVariant1Props) {
  if (state === 'connecting') {
    return (
      <button
        type="button"
        disabled
        className={`flex items-center gap-2 rounded-md bg-indigo-400 px-4 py-2 text-sm font-medium text-white shadow-sm ${className ?? ''}`}
      >
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-25" />
          <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
        Connecting…
      </button>
    )
  }

  if (state === 'connected') {
    return (
      <button
        type="button"
        onClick={onOpenMenu}
        className={`flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 ${className ?? ''}`}
      >
        <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" aria-hidden="true" />
        <span className="font-mono">{truncateAddress(address)}</span>
        {balance ? (
          <>
            <span className="text-gray-400">&middot;</span>
            <span className="font-medium text-gray-900">{balance}</span>
          </>
        ) : null}
        <svg className="h-3.5 w-3.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={onConnect}
      className={`flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 ${className ?? ''}`}
    >
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-1V5a2 2 0 00-2-2H4zm10 4H4V6h10v2z"
          clipRule="evenodd"
        />
      </svg>
      Connect wallet
    </button>
  )
}
