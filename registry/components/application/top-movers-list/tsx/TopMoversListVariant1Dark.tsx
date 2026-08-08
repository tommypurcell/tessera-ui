export type MoverEntryDark = {
  symbol: string
  name: string
  value: string
  changePercent: number
}

export type TopMoversListVariant1DarkProps = {
  movers: MoverEntryDark[]
}

/**
 * Copy-and-own Tailwind component. List of gainers/losers with a value and a
 * percent-change indicator whose direction (arrow + color) is derived from the
 * sign of `changePercent` — pass negative values for losers.
 */
export function TopMoversListDark({ movers }: TopMoversListVariant1DarkProps) {
  return (
    <ul role="list" className="flex flex-col divide-y divide-gray-800 rounded-lg border border-gray-700 bg-gray-900">
      {movers.map((mover) => {
        const isUp = mover.changePercent >= 0
        return (
          <li key={mover.symbol} className="flex items-center justify-between gap-4 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-white">{mover.symbol}</p>
              <p className="text-xs text-gray-400">{mover.name}</p>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm font-semibold text-white">{mover.value}</p>
              <p className={`mt-0.5 inline-flex items-center gap-0.5 text-xs font-medium ${isUp ? 'text-emerald-400' : 'text-red-400'}`}>
                <svg aria-hidden="true" className="size-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                  {isUp ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                  )}
                </svg>
                {Math.abs(mover.changePercent).toFixed(2)}%
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
