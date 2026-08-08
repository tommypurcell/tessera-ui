export type AnomalyMetric = {
  name: string
  expectedRange: string
  currentValue: string
  severity: 'normal' | 'warning' | 'critical'
  /** SVG path (viewBox 0 0 96 32) tracing the sparkline; the last point is treated as the spike marker when severity isn't 'normal' */
  sparklinePath: string
  spikePoint?: { x: number; y: number }
}

export type AnomalyAlertRowVariant1Props = {
  metrics: AnomalyMetric[]
  className?: string
}

const severityStyle: Record<AnomalyMetric['severity'], { badge: string; label: string; line: string; dot: string }> = {
  normal: { badge: 'bg-emerald-50 text-emerald-700', label: 'Normal', line: '#10b981', dot: '#10b981' },
  warning: { badge: 'bg-amber-50 text-amber-700', label: 'Warning', line: '#d97706', dot: '#d97706' },
  critical: { badge: 'bg-red-50 text-red-700', label: 'Critical', line: '#dc2626', dot: '#dc2626' },
}

/**
 * Copy-and-own Tailwind component. Metric row for anomaly monitoring: name and
 * expected-range/current-value text, a sparkline with a shaded expected band and
 * a highlighted spike marker when the value strays outside it, and a severity
 * badge conveyed by both color and text.
 */
export function AnomalyAlertRow({ metrics, className }: AnomalyAlertRowVariant1Props) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white ${className ?? ''}`}>
      <ul className="divide-y divide-gray-200">
        {metrics.map((metric) => {
          const style = severityStyle[metric.severity]
          return (
            <li key={metric.name} className="flex items-center gap-4 px-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-900">{metric.name}</p>
                <p className="mt-0.5 text-xs text-gray-500">
                  Expected {metric.expectedRange} &middot; now {metric.currentValue}
                </p>
              </div>

              <svg className="h-8 w-24 shrink-0" viewBox="0 0 96 32" fill="none" aria-hidden="true">
                <rect x="0" y="14" width="96" height="8" fill="#e5e7eb" rx="2" />
                <path d={metric.sparklinePath} stroke={style.line} strokeWidth="2" fill="none" />
                {metric.spikePoint ? <circle cx={metric.spikePoint.x} cy={metric.spikePoint.y} r="3" fill={style.dot} /> : null}
              </svg>

              <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${style.badge}`}>{style.label}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
