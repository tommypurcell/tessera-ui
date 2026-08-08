export type BodyMetric = {
  id: string
  label: string
  value: string
  /** Signed change since last reading; positive renders an up arrow, negative a down arrow. */
  delta: number
  deltaLabel: string
  /** Whether an increase for this metric is desirable (e.g. weight loss goal makes decrease "good"). */
  increaseIsGood: boolean
}

export type BodyMetricsCardVariant1Props = {
  metrics: BodyMetric[]
  updatedLabel?: string
  className?: string
}

function TrendArrow({ isUp }: { isUp: boolean }) {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
      {isUp ? (
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      ) : (
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      )}
    </svg>
  )
}

/**
 * Copy-and-own Tailwind component. Body metrics card — three metric cells (weight, BMI,
 * body fat), each with a trend arrow whose direction and color are computed from a real
 * signed delta and a per-metric "increase is good" flag.
 */
export function BodyMetricsCardVariant1({ metrics, updatedLabel, className }: BodyMetricsCardVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Body metrics</h3>
        {updatedLabel ? <span className="text-xs text-gray-400">{updatedLabel}</span> : null}
      </div>

      <div className="mt-4 grid grid-cols-3 divide-x divide-gray-100">
        {metrics.map((metric) => {
          const isUp = metric.delta >= 0
          const isGood = isUp === metric.increaseIsGood
          return (
            <div key={metric.id} className="px-2 text-center first:pl-0">
              <p className="text-xs text-gray-500">{metric.label}</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{metric.value}</p>
              <p className={`mt-0.5 inline-flex items-center gap-0.5 text-xs font-medium ${isGood ? 'text-emerald-600' : 'text-red-600'}`}>
                <TrendArrow isUp={isUp} />
                {metric.deltaLabel}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
