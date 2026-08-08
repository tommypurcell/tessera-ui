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
 * Copy-and-own Tailwind component. Dark-surface variant of the partial
 * batch-failure summary.
 */
export function PartialFailureSummary({ succeeded, failed, errors }: PartialFailureSummaryVariant1Props) {
  const total = succeeded + failed
  const successRate = (succeeded / total) * 100

  return (
    <details className="w-full max-w-md rounded-lg border border-amber-800 bg-amber-500/10" role="group">
      <summary className="flex cursor-pointer list-none items-center gap-3 p-4 [&::-webkit-details-marker]:hidden">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="size-5 shrink-0 text-amber-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
        <span className="min-w-0 flex-1 text-sm text-amber-200">
          <strong className="font-semibold">{succeeded} of {total}</strong> completed successfully ({successRate.toFixed(0)}%) — {failed} failed
        </span>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="size-4 shrink-0 text-amber-400 transition-transform group-open:rotate-180">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </summary>
      <ul className="flex flex-col gap-1 border-t border-amber-800 px-4 py-3 text-xs text-amber-300">
        {errors.map((error) => (
          <li key={error.item} className="flex items-baseline justify-between gap-2">
            <span className="font-medium">{error.item}</span>
            <span className="text-amber-500">{error.reason}</span>
          </li>
        ))}
      </ul>
    </details>
  )
}
