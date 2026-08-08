export type AnomalyMetric = {
  name: string
  expectedRange: string
  currentValue: string
  severity: 'normal' | 'warning' | 'critical'
  sparklinePath: string
  spikePoint?: { x: number; y: number }
}

export type AnomalyAlertRowVariant1DarkProps = {
  metrics: AnomalyMetric[]
  className?: string
}

const severityStyle: Record<AnomalyMetric['severity'], { badge: string; label: string; line: string; dot: string }> = {
  normal: { badge: 'bg-emerald-500/10 text-emerald-400', label: 'Normal', line: '#34d399', dot: '#34d399' },
  warning: { badge: 'bg-amber-500/10 text-amber-400', label: 'Warning', line: '#fbbf24', dot: '#fbbf24' },
  critical: { badge: 'bg-red-500/10 text-red-400', label: 'Critical', line: '#f87171', dot: '#f87171' },
}

/**
 * Copy-and-own Tailwind component (dark surface). Metric row for anomaly
 * monitoring: name and expected-range/current-value text, a sparkline with a
 * shaded expected band and a highlighted spike marker, and a severity badge.
 */
export function AnomalyAlertRow({ metrics, className }: AnomalyAlertRowVariant1DarkProps) {
  return (
    <div className={`rounded-lg border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <ul className="divide-y divide-gray-800">
        {metrics.map((metric) => {
          const style = severityStyle[metric.severity]
          return (
            <li key={metric.name} className="flex items-center gap-4 px-4 py-3.5">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-gray-100">{metric.name}</p>
                <p className="mt-0.5 text-xs text-gray-400">
                  Expected {metric.expectedRange} &middot; now {metric.currentValue}
                </p>
              </div>

              <svg className="h-8 w-24 shrink-0" viewBox="0 0 96 32" fill="none" aria-hidden="true">
                <rect x="0" y="14" width="96" height="8" fill="#374151" rx="2" />
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
