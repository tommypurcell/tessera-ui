export type TokenBalance = {
  symbol: string
  name: string
  balance: string
  usdValue: string
  changePercent: number
  iconBgClass: string
  iconTextClass: string
}

export type TokenBalanceRowVariant1Props = {
  tokens: TokenBalance[]
}

/**
 * Copy-and-own Tailwind component. Wallet asset list showing each token's
 * icon, name, held balance, USD value, and a direction-colored 24h change
 * percentage derived from the sign of `changePercent`.
 */
export function TokenBalanceRow({ tokens }: TokenBalanceRowVariant1Props) {
  return (
    <ul role="list" className="flex flex-col divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white">
      {tokens.map((token) => {
        const isUp = token.changePercent >= 0
        return (
          <li key={token.symbol} className="flex items-center justify-between gap-3 px-4 py-3">
            <div className="flex items-center gap-3">
              <span className={`flex size-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${token.iconBgClass} ${token.iconTextClass}`}>{token.symbol}</span>
              <div>
                <p className="text-sm font-medium text-gray-900">{token.name}</p>
                <p className="text-xs text-gray-500">{token.balance}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm font-semibold text-gray-900">{token.usdValue}</p>
              <p className={`mt-0.5 inline-flex items-center gap-0.5 text-xs font-medium ${isUp ? 'text-emerald-600' : 'text-red-600'}`}>
                <svg aria-hidden="true" className="size-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  {isUp ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  )}
                </svg>
                {Math.abs(token.changePercent).toFixed(2)}%
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
