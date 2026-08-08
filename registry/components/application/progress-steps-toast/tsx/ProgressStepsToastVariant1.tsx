export type ProgressStep = {
  label: string
  status: 'done' | 'active' | 'pending'
}

export type ProgressStepsToastVariant1Props = {
  title: string
  steps: ProgressStep[]
}

/**
 * Copy-and-own Tailwind component. Long-running-task toast showing overall
 * progress plus a per-step checklist (done/active/pending). Progress and the
 * "N of M" label are derived from how many steps are marked done or active.
 */
export function ProgressStepsToast({ title, steps }: ProgressStepsToastVariant1Props) {
  const doneCount = steps.filter((step) => step.status === 'done').length
  const currentIndex = steps.findIndex((step) => step.status === 'active')
  const progressCount = currentIndex >= 0 ? currentIndex + 1 : doneCount
  const percent = Math.round((doneCount / steps.length) * 100)

  return (
    <div role="status" aria-label={title} className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-lg shadow-gray-900/5">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold text-gray-900">{title}</p>
        <span className="text-xs font-medium text-gray-500">
          {progressCount} of {steps.length}
        </span>
      </div>

      <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full rounded-full bg-blue-600 transition-all" style={{ width: `${percent}%` }} />
      </div>

      <ul role="list" className="mt-3 flex flex-col gap-2">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-2 text-sm">
            {step.status === 'done' ? (
              <svg aria-hidden="true" className="size-4 shrink-0 text-emerald-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            ) : step.status === 'active' ? (
              <svg aria-hidden="true" className="size-4 shrink-0 animate-spin text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4} />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            ) : (
              <span aria-hidden="true" className="flex size-4 shrink-0 items-center justify-center">
                <span className="size-1.5 rounded-full bg-gray-300" />
              </span>
            )}
            <span
              className={
                step.status === 'done'
                  ? 'text-gray-500 line-through decoration-gray-300'
                  : step.status === 'active'
                    ? 'font-medium text-gray-900'
                    : 'text-gray-400'
              }
            >
              {step.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
