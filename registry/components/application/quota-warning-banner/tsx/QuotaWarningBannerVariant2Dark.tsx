export function QuotaWarningBannerVariant2Dark() {
  return (
    <div className="flex gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-900/60 dark:bg-red-950/50" role="alert">
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        className="mt-0.5 size-5 shrink-0 text-red-500 dark:text-red-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>

      <div className="flex flex-1 flex-col gap-2">
        <p className="text-sm font-semibold text-red-900 dark:text-red-100">API request limit exceeded</p>

        <div className="flex items-baseline justify-between gap-2">
          <div
            className="h-2 w-full overflow-hidden rounded-full bg-red-200/70 dark:bg-red-900/60"
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="API requests used"
          >
            <div className="h-full rounded-full bg-red-600 dark:bg-red-400" style={{ width: '100%' }} />
          </div>
          <p className="shrink-0 text-xs font-medium text-red-700 dark:text-red-300">50,000 / 50,000</p>
        </div>

        <p className="text-sm text-red-700 dark:text-red-300">
          You&apos;ve reached this month&apos;s request limit. New requests will be rejected until your quota resets or you upgrade.
        </p>

        <div className="mt-1 flex gap-3">
          <button
            type="button"
            className="rounded-md bg-red-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-400"
          >
            Upgrade now
          </button>
          <button type="button" className="rounded-md px-3 py-1.5 text-sm font-medium text-red-800 hover:bg-red-100 dark:text-red-200 dark:hover:bg-red-900/40">
            View usage
          </button>
        </div>
      </div>
    </div>
  )
}
