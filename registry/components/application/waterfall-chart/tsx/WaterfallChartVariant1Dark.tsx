export type WaterfallChartStep = {
  label: string
  /** Delta for this step, or the absolute value for a 'total' step. */
  value: number
  kind: 'total' | 'positive' | 'negative'
}

export type WaterfallChartVariant1DarkProps = {
  title?: string
  steps: WaterfallChartStep[]
}

const kindStyles: Record<WaterfallChartStep['kind'], string> = {
  total: 'bg-gray-500',
  positive: 'bg-green-400',
  negative: 'bg-red-400',
}

/**
 * Copy-and-own Tailwind component. Sequential waterfall chart adapted for
 * dark surfaces — running totals, bar positions, and connector math are
 * all computed from real step deltas.
 */
export function WaterfallChartDark({ title, steps }: WaterfallChartVariant1DarkProps) {
  let running = 0
  const computed = steps.map((step) => {
    if (step.kind === 'total') {
      running = step.value
      return { ...step, start: 0, end: step.value }
    }
    const start = running
    running += step.value
    return { ...step, start: Math.min(start, running), end: Math.max(start, running) }
  })

  const max = Math.max(...computed.map((s) => s.end), 1)
  const pct = (n: number) => `${(n / max) * 100}%`

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6">
      {title ? <h2 className="text-sm font-medium text-gray-100">{title}</h2> : null}

      <div className="flex gap-3">
        {computed.map((step) => (
          <div key={step.label} className="flex flex-1 flex-col items-center gap-1.5">
            <div className="flex w-full flex-col justify-end" style={{ height: 160 }}>
              <div
                className={`w-full rounded-sm ${kindStyles[step.kind]}`}
                style={{ height: pct(step.end - step.start), marginBottom: pct(step.start) }}
                role="img"
                aria-label={`${step.label}: ${step.kind === 'total' ? step.value.toLocaleString() : `${step.value > 0 ? '+' : ''}${step.value.toLocaleString()}`}`}
              />
            </div>
            <span className="text-xs font-medium text-gray-100">
              {step.kind === 'total' ? step.value.toLocaleString() : `${step.value > 0 ? '+' : ''}${step.value.toLocaleString()}`}
            </span>
            <span className="text-center text-xs text-gray-500">{step.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
