export type PtoBalanceCardVariant1DarkProps = {
  accrued: number
  used: number
  pending?: number
  resetLabel?: string
  onRequestTimeOff?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. PTO balance card adapted for dark surfaces — a
 * remaining-days readout, a usage progress bar, and an accrued/used/pending stat row.
 */
export function PtoBalanceCardVariant1Dark({
  accrued,
  used,
  pending = 0,
  resetLabel,
  onRequestTimeOff,
  className,
}: PtoBalanceCardVariant1DarkProps) {
  const remaining = Math.max(accrued - used - pending, 0)
  const usedPct = accrued > 0 ? Math.min(((used + pending) / accrued) * 100, 100) : 0

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Time off balance</h3>
        {resetLabel ? <span className="text-xs text-gray-500">{resetLabel}</span> : null}
      </div>

      <p className="mt-3 text-3xl font-semibold text-white">
        {remaining}
        <span className="text-base font-normal text-gray-400"> days remaining</span>
      </p>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-800">
        <div className="h-full rounded-full bg-blue-500" style={{ width: `${usedPct}%` }} />
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-gray-800 pt-4 text-center">
        <div>
          <dt className="text-xs text-gray-500">Accrued</dt>
          <dd className="mt-0.5 text-sm font-semibold text-white">{accrued}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">Used</dt>
          <dd className="mt-0.5 text-sm font-semibold text-white">{used}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">Pending</dt>
          <dd className="mt-0.5 text-sm font-semibold text-amber-400">{pending}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={onRequestTimeOff}
        className="mt-4 w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
      >
        Request time off
      </button>
    </div>
  )
}
