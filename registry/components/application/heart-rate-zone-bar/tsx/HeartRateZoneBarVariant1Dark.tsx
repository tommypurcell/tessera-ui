export type HeartRateZone = {
  zone: number
  label: string
  minutes: number
  colorClass: string
}

export type HeartRateZoneBarVariant1Props = {
  zones: HeartRateZone[]
  currentZone: number
  currentBpm: number
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant — same real
 * minute-share math as the light version.
 */
export function HeartRateZoneBar({ zones, currentZone, currentBpm }: HeartRateZoneBarVariant1Props) {
  const totalMinutes = zones.reduce((sum, z) => sum + z.minutes, 0)

  let cursor = 0
  const segments = zones.map((z) => {
    const pct = (z.minutes / totalMinutes) * 100
    const start = cursor
    cursor += pct
    return { ...z, pct, start }
  })

  const activeSegment = segments.find((s) => s.zone === currentZone)
  const markerPct = activeSegment ? activeSegment.start + activeSegment.pct / 2 : 0

  return (
    <div className="flex w-full max-w-md flex-col gap-3 rounded-lg border border-gray-800 bg-gray-900 p-5">
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium text-gray-100">Heart rate zones</h2>
        <span className="text-xs text-gray-500">{totalMinutes} min session</span>
      </div>

      <div className="relative pt-4">
        <div
          className="absolute top-0 flex -translate-x-1/2 flex-col items-center"
          style={{ left: `${markerPct}%` }}
        >
          <span className="whitespace-nowrap rounded bg-gray-100 px-1.5 py-0.5 text-[10px] font-semibold text-gray-900">
            {currentBpm} bpm
          </span>
          <span aria-hidden="true" className="mt-0.5 h-2 w-px bg-gray-100" />
        </div>

        <div className="flex h-5 w-full overflow-hidden rounded-sm">
          {segments.map((s) => (
            <div
              key={s.zone}
              className={s.colorClass}
              style={{ width: `${s.pct}%` }}
              role="img"
              aria-label={`Zone ${s.zone} ${s.label}: ${s.minutes} minutes`}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-gray-500">
        {segments.map((s) => (
          <span key={s.zone} className="flex items-center gap-1.5">
            <span aria-hidden="true" className={`size-2.5 rounded-sm ${s.colorClass}`} />
            <span className={s.zone === currentZone ? 'font-semibold text-gray-100' : ''}>
              Z{s.zone} {s.label} · {s.minutes}m
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
