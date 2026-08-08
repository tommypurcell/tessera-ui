export type BatchError = {
  item: string
  reason: string
}

export type PartialFailureSummaryVariant1Props = {
  succeeded: number
  failed: number
  errors: BatchError[]
}

/**
 * Copy-and-own Tailwind component. Batch-operation result banner with a
 * computed total and success rate, plus an expandable list of per-item
 * failure reasons — not present elsewhere in the registry, distinct from
 * a plain error banner because it summarizes a mixed-outcome batch
 * rather than a single failure.
 */
export function PartialFailureSummary({ succeeded, failed, errors }: PartialFailureSummaryVariant1Props) {
  const total = succeeded + failed
  const successRate = (succeeded / total) * 100

  return (
    <details className="w-full max-w-md rounded-lg border border-amber-200 bg-amber-50" role="group">
      <summary className="flex cursor-pointer list-none items-center gap-3 p-4 [&::-webkit-details-marker]:hidden">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="size-5 shrink-0 text-amber-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        <span className="min-w-0 flex-1 text-sm text-amber-900">
          <strong className="font-semibold">{succeeded} of {total}</strong> completed successfully ({successRate.toFixed(0)}%) — {failed} failed
        </span>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="size-4 shrink-0 text-amber-500 transition-transform group-open:rotate-180">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </summary>
      <ul className="flex flex-col gap-1 border-t border-amber-200 px-4 py-3 text-xs text-amber-800">
        {errors.map((error) => (
          <li key={error.item} className="flex items-baseline justify-between gap-2">
            <span className="font-medium">{error.item}</span>
            <span className="text-amber-600">{error.reason}</span>
          </li>
        ))}
      </ul>
    </details>
  )
}
