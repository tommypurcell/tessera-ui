export function QuotaWarningBannerVariant1Dark() {
  return (
    <div className="flex gap-3 rounded-lg border border-amber-200 bg-amber-50 p-4 dark:border-amber-900/60 dark:bg-amber-950/50" role="alert">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-0.5 size-5 shrink-0 text-amber-500 dark:text-amber-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5.07 19h13.86a2 2 0 001.74-3L13.74 4a2 2 0 00-3.48 0L3.33 16a2 2 0 001.74 3z" />
      </svg>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-sm font-semibold text-amber-900 dark:text-amber-100">Approaching your storage limit</p>
          <p className="text-xs font-medium text-amber-700 dark:text-amber-300">92 GB / 100 GB</p>
        </div>

        <div
          className="h-2 w-full overflow-hidden rounded-full bg-amber-200/70 dark:bg-amber-900/60"
          role="progressbar"
          aria-valuenow={92}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label="Storage used"
        >
          <div className="h-full rounded-full bg-amber-500 dark:bg-amber-400" style={{ width: '92%' }} />
        </div>

        <p className="text-sm text-amber-700 dark:text-amber-300">
          You&apos;ve used 92% of your available storage. Upgrade your plan to avoid interruptions.
        </p>

        <div className="mt-1">
          <button
            type="button"
            className="rounded-md bg-amber-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-400"
          >
            Upgrade plan
          </button>
        </div>
      </div>
    </div>
  )
}
