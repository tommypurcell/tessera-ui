export type ApplicationStage = 'submitted' | 'under-review' | 'decision'

export type StatusApplicationTrackerVariant1DarkProps = {
  caseNumber: string
  currentStage: ApplicationStage
  statusLabel: string
  processingOffice: string
  estDecisionDate: string
  className?: string
}

const stages: { id: ApplicationStage; label: string }[] = [
  { id: 'submitted', label: 'Submitted' },
  { id: 'under-review', label: 'Under review' },
  { id: 'decision', label: 'Decision' },
]

/**
 * Copy-and-own Tailwind component (dark surface). Government/civic
 * application-status tracker: a horizontal numbered-step progress bar above
 * a case number, status badge, processing office, and estimated decision
 * date.
 */
export function StatusApplicationTracker({
  caseNumber,
  currentStage,
  statusLabel,
  processingOffice,
  estDecisionDate,
  className,
}: StatusApplicationTrackerVariant1DarkProps) {
  const currentIndex = stages.findIndex((s) => s.id === currentStage)

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-gray-500">Case number</p>
          <p className="text-sm font-semibold text-gray-100">{caseNumber}</p>
        </div>
        <span className="inline-flex shrink-0 rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-medium text-amber-400">{statusLabel}</span>
      </div>

      <ol aria-label="Application status" className="mt-5 flex items-center">
        {stages.map((stage, index) => {
          const isComplete = index <= currentIndex
          const isLast = index === stages.length - 1
          return (
            <li key={stage.id} className={isLast ? 'flex items-center' : 'flex flex-1 items-center'}>
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={
                    isComplete
                      ? 'flex size-7 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-900'
                      : 'flex size-7 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-gray-500'
                  }
                >
                  {index + 1}
                </div>
                <span className={isComplete ? 'text-[11px] font-medium text-gray-100' : 'text-[11px] font-medium text-gray-500'}>{stage.label}</span>
              </div>
              {!isLast ? <div className={`mx-1 h-0.5 flex-1 ${index < currentIndex ? 'bg-gray-100' : 'bg-gray-800'}`}></div> : null}
            </li>
          )
        })}
      </ol>

      <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-gray-800 pt-4 text-sm">
        <div>
          <dt className="text-xs text-gray-500">Processing office</dt>
          <dd className="mt-0.5 font-medium text-gray-100">{processingOffice}</dd>
        </div>
        <div>
          <dt className="text-xs text-gray-500">Est. decision by</dt>
          <dd className="mt-0.5 font-medium text-gray-100">{estDecisionDate}</dd>
        </div>
      </dl>
    </div>
  )
}
