export type FunnelChartStage = {
  label: string
  value: number
}

export type FunnelChartVariant1DarkProps = {
  title?: string
  stages: FunnelChartStage[]
}

/**
 * Copy-and-own Tailwind component. Stepped conversion funnel adapted for
 * dark surfaces — each stage bar is width-scaled against the first
 * stage's value, with the raw count and drop-off percentage computed
 * from real data.
 */
export function FunnelChartDark({ title, stages }: FunnelChartVariant1DarkProps) {
  const first = stages[0]?.value ?? 1

  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-800 bg-gray-900 p-6">
      {title ? <h2 className="text-sm font-medium text-gray-100">{title}</h2> : null}

      <div className="flex flex-col gap-3">
        {stages.map((stage, index) => {
          const widthPct = first === 0 ? 0 : Math.max((stage.value / first) * 100, 4)
          const previous = index > 0 ? stages[index - 1].value : null
          const dropOffPct = previous && previous > 0 ? Math.round(((previous - stage.value) / previous) * 100) : null

          return (
            <div key={stage.label} className="flex flex-col gap-1">
              <div className="flex items-baseline justify-between text-sm">
                <span className="font-medium text-gray-300">{stage.label}</span>
                <span className="flex items-baseline gap-2">
                  <span className="font-medium text-gray-100">{stage.value.toLocaleString()}</span>
                  {dropOffPct !== null ? <span className="text-xs text-red-400">-{dropOffPct}%</span> : null}
                </span>
              </div>

              <div className="h-6 w-full rounded-sm bg-gray-800">
                <div
                  className="h-6 rounded-sm bg-blue-500 transition-[width]"
                  style={{ width: `${widthPct}%` }}
                  role="img"
                  aria-label={`${stage.label}: ${stage.value.toLocaleString()}${dropOffPct !== null ? `, ${dropOffPct}% drop-off from previous stage` : ''}`}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
