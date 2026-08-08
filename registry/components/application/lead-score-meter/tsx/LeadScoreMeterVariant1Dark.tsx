export type LeadScoreMeterVariant1DarkProps = {
  score: number
  label?: string
}

const bands = [
  { max: 33, name: 'Cold', badgeClass: 'bg-gray-800 text-gray-300', dotClass: 'bg-gray-500', description: 'low fit and intent' },
  { max: 66, name: 'Warm', badgeClass: 'bg-amber-400/10 text-amber-300', dotClass: 'bg-amber-400', description: 'moderate fit and intent' },
  { max: 100, name: 'Hot', badgeClass: 'bg-emerald-400/10 text-emerald-300', dotClass: 'bg-emerald-400', description: 'high fit and intent' },
]

/**
 * Copy-and-own Tailwind component. 0–100 lead score gauge with three
 * qualitative bands (Cold/Warm/Hot) and a marker positioned at the current
 * score. The badge label and color are derived from which band the score
 * falls into.
 */
export function LeadScoreMeterDark({ score, label = 'Lead score' }: LeadScoreMeterVariant1DarkProps) {
  const clamped = Math.max(0, Math.min(100, score))
  const band = bands.find((candidate) => clamped <= candidate.max) ?? bands[bands.length - 1]

  return (
    <div className="w-72">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-gray-200">{label}</p>
        <p className="text-sm font-semibold text-white">
          {clamped} <span className="font-normal text-gray-400">/ 100</span>
        </p>
      </div>

      <div className="relative mt-2">
        <div className="flex h-2.5 overflow-hidden rounded-full">
          <span aria-hidden="true" className="h-full flex-[33] bg-gray-600" />
          <span aria-hidden="true" className="h-full flex-[33] bg-amber-400" />
          <span aria-hidden="true" className="h-full flex-[34] bg-emerald-400" />
        </div>
        <div aria-hidden="true" className="absolute -top-1 size-4.5 rounded-full border-2 border-gray-900 bg-white shadow" style={{ left: `calc(${clamped}% - 9px)` }} />
      </div>

      <div className="mt-1.5 flex justify-between text-xs text-gray-400">
        <span>Cold</span>
        <span>Warm</span>
        <span>Hot</span>
      </div>

      <p className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${band.badgeClass}`}>
        <span aria-hidden="true" className={`size-1.5 rounded-full ${band.dotClass}`} />
        {band.name} lead — {band.description}
      </p>
    </div>
  )
}
