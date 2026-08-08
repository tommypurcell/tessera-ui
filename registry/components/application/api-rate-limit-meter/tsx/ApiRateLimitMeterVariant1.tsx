export type ApiRateLimitMeterVariant1Props = {
  endpoint: string
  requestsUsed: number
  requestsQuota: number
  resetsInMinutes: number
  warnThreshold?: number
}

/**
 * Copy-and-own Tailwind component. Proactive per-window request-quota
 * meter with a reset-time note — distinct from rate-limit-notice, which
 * is a reactive alert banner shown only after the limit is already hit,
 * and from usage-meter, which is a generic storage-quota bar with no
 * time-window/reset semantics.
 */
export function ApiRateLimitMeter({ endpoint, requestsUsed, requestsQuota, resetsInMinutes, warnThreshold = 80 }: ApiRateLimitMeterVariant1Props) {
  const usedPct = (requestsUsed / requestsQuota) * 100
  const isNearLimit = usedPct >= warnThreshold
  const fillColor = isNearLimit ? 'bg-amber-500' : 'bg-blue-600'

  return (
    <div className="flex w-full max-w-sm flex-col gap-2 rounded-lg border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <span className="truncate font-mono text-xs text-gray-500">{endpoint}</span>
        <span className="shrink-0 text-sm text-gray-700">
          {requestsUsed.toLocaleString()} <span className="text-gray-400">/ {requestsQuota.toLocaleString()}</span>
        </span>
      </div>

      <div
        className="h-2 w-full overflow-hidden rounded-full bg-gray-100"
        role="img"
        aria-label={`${endpoint}: ${requestsUsed} of ${requestsQuota} requests used, ${usedPct.toFixed(1)} percent${isNearLimit ? ', approaching limit' : ''}`}
      >
        <div className={`h-full rounded-full ${fillColor}`} style={{ width: `${usedPct}%` }} />
      </div>

      <p className={`text-xs ${isNearLimit ? 'font-medium text-amber-600' : 'text-gray-500'}`}>
        {isNearLimit ? 'Approaching limit — ' : ''}Resets in {resetsInMinutes} min
      </p>
    </div>
  )
}
