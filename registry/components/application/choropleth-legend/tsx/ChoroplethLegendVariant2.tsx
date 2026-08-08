export type ChoroplethBucket = {
  rangeLabel: string
  colorClass: string
}

export type ChoroplethLegendVariant2Props = {
  label: string
  buckets: ChoroplethBucket[]
}

const defaultBuckets: ChoroplethBucket[] = [
  { rangeLabel: '0–2%', colorClass: 'bg-blue-100' },
  { rangeLabel: '2–4%', colorClass: 'bg-blue-300' },
  { rangeLabel: '4–6%', colorClass: 'bg-blue-500' },
  { rangeLabel: '6%+', colorClass: 'bg-blue-700' },
]

/**
 * Copy-and-own Tailwind component. Stepped choropleth legend showing discrete
 * value buckets as equal-width color swatches with their range labels below.
 * Use when your map assigns each region one of a fixed set of tiers rather
 * than a continuous gradient.
 */
export function ChoroplethLegendStepped({ label, buckets = defaultBuckets }: ChoroplethLegendVariant2Props) {
  return (
    <div className="w-72">
      <p className="mb-2 text-xs font-medium text-gray-600">{label}</p>
      <div className="flex overflow-hidden rounded-full">
        {buckets.map((bucket) => (
          <span key={bucket.rangeLabel} aria-hidden="true" className={`h-2.5 flex-1 ${bucket.colorClass}`} />
        ))}
      </div>
      <ul role="list" className="mt-2 grid text-xs text-gray-500" style={{ gridTemplateColumns: `repeat(${buckets.length}, minmax(0, 1fr))` }}>
        {buckets.map((bucket) => (
          <li key={bucket.rangeLabel}>{bucket.rangeLabel}</li>
        ))}
      </ul>
    </div>
  )
}
