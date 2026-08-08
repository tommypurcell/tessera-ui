export type ClaimStage = {
  id: string
  label: string
  dateLabel: string
  detail?: string
}

export type ClaimStatusTrackerVariant1Props = {
  claimNumber: string
  stages: ClaimStage[]
  /** Index into `stages` marking how far the claim has progressed. */
  currentStageIndex: number
  outcome: 'pending' | 'approved' | 'denied'
  className?: string
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  )
}

const outcomeBadge: Record<ClaimStatusTrackerVariant1Props['outcome'], { label: string; className: string }> = {
  pending: { label: 'In review', className: 'bg-blue-50 text-blue-700' },
  approved: { label: 'Approved', className: 'bg-emerald-50 text-emerald-700' },
  denied: { label: 'Denied', className: 'bg-red-50 text-red-700' },
}

/**
 * Copy-and-own Tailwind component. Claim status tracker — vertical timeline of
 * submitted -> review -> approved/denied stages, with the completed range and
 * final outcome badge driven by real currentStageIndex/outcome props.
 */
export function ClaimStatusTrackerVariant1({ claimNumber, stages, currentStageIndex, outcome, className }: ClaimStatusTrackerVariant1Props) {
  const badge = outcomeBadge[outcome]
  const isDenied = outcome === 'denied'

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-900">Claim #{claimNumber}</h3>
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${badge.className}`}>{badge.label}</span>
      </div>

      <ol aria-label="Claim status" className="mt-4 flex flex-col">
        {stages.map((stage, index) => {
          const isLast = index === stages.length - 1
          const isReached = index <= currentStageIndex
          const isFinalDenied = isLast && isDenied && isReached
          const circleClasses = isFinalDenied
            ? 'bg-red-600 text-white'
            : isReached
              ? 'bg-emerald-600 text-white'
              : 'border-2 border-gray-300 bg-white text-gray-300'
          const lineClasses = index < currentStageIndex ? 'bg-emerald-600' : 'bg-gray-200'
          const labelClasses = isFinalDenied ? 'text-red-700' : isReached ? 'text-gray-900' : 'text-gray-400'

          return (
            <li key={stage.id} className={`relative flex gap-3 ${isLast ? '' : 'pb-6'}`}>
              {!isLast ? <div className={`absolute left-[11px] top-6 h-full w-0.5 ${lineClasses}`} /> : null}
              <div className={`relative flex size-6 shrink-0 items-center justify-center rounded-full ${circleClasses}`}>
                {isReached ? isFinalDenied ? <XIcon /> : <CheckIcon /> : <span className="size-2 rounded-full bg-gray-300" />}
              </div>
              <div className="pt-0.5">
                <p className={`text-sm font-semibold ${labelClasses}`}>{stage.label}</p>
                <p className={`text-xs ${isReached ? 'text-gray-400' : 'text-gray-300'}`}>
                  {isReached ? stage.dateLabel : `Est. ${stage.dateLabel}`}
                  {stage.detail && isReached ? ` · ${stage.detail}` : ''}
                </p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
