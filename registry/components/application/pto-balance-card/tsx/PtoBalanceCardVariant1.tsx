export type PtoBalanceCardVariant1Props = {
  accrued: number
  used: number
  pending?: number
  resetLabel?: string
  onRequestTimeOff?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. PTO balance card — a remaining-days readout, a usage
 * progress bar, and an accrued/used/pending stat row, all computed from real numeric
 * inputs so the figures always agree.
 */
export function PtoBalanceCardVariant1({
  accrued,
  used,
  pending = 0,
  resetLabel,
  onRequestTimeOff,
  className,
}: PtoBalanceCardVariant1Props) {
  const remaining = Math.max(accrued - used - pending, 0)
  const usedPct = accrued > 0 ? Math.min(((used + pending) / accrued) * 100, 100) : 0

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Time off balance</h3>
        {resetLabel ? <span className="text-xs text-gray-400">{resetLabel}</span> : null}
      </div>

      <p className="mt-3 text-3xl font-semibold text-gray-900">
        {remaining}
        <span className="text-base font-normal text-gray-500"> days remaining</span>
      </p>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full rounded-full bg-blue-600" style={{ width: `${usedPct}%` }} />
      </div>

      <dl className="mt-4 grid grid-cols-3 gap-2 border-t border-gray-100 pt-4 text-center">
        <div>
          <dt className="text-xs text-gray-500">Accrued</dt>
          <dd className="mt-0.5 text-sm font-semibold text-gray-900">{accrued}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">Used</dt>
          <dd className="mt-0.5 text-sm font-semibold text-gray-900">{used}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">Pending</dt>
          <dd className="mt-0.5 text-sm font-semibold text-amber-600">{pending}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={onRequestTimeOff}
        className="mt-4 w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
      >
        Request time off
      </button>
    </div>
  )
}
