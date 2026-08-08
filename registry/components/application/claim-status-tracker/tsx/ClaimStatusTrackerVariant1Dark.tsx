export type ClaimStage = {
  id: string
  label: string
  dateLabel: string
  detail?: string
}

export type ClaimStatusTrackerVariant1DarkProps = {
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

const outcomeBadge: Record<ClaimStatusTrackerVariant1DarkProps['outcome'], { label: string; className: string }> = {
  pending: { label: 'In review', className: 'bg-blue-500/10 text-blue-400' },
  approved: { label: 'Approved', className: 'bg-emerald-500/10 text-emerald-400' },
  denied: { label: 'Denied', className: 'bg-red-500/10 text-red-400' },
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the claim status tracker.
 */
export function ClaimStatusTrackerVariant1Dark({ claimNumber, stages, currentStageIndex, outcome, className }: ClaimStatusTrackerVariant1DarkProps) {
  const badge = outcomeBadge[outcome]
  const isDenied = outcome === 'denied'

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 p-5 shadow-sm ${className ?? ''}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-white">Claim #{claimNumber}</h3>
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${badge.className}`}>{badge.label}</span>
      </div>

      <ol aria-label="Claim status" className="mt-4 flex flex-col">
        {stages.map((stage, index) => {
          const isLast = index === stages.length - 1
          const isReached = index <= currentStageIndex
          const isFinalDenied = isLast && isDenied && isReached
          const circleClasses = isFinalDenied
            ? 'bg-red-500 text-gray-950'
            : isReached
              ? 'bg-emerald-500 text-gray-950'
              : 'border-2 border-gray-700 bg-gray-950 text-gray-700'
          const lineClasses = index < currentStageIndex ? 'bg-emerald-500' : 'bg-gray-800'
          const labelClasses = isFinalDenied ? 'text-red-400' : isReached ? 'text-white' : 'text-gray-500'

          return (
            <li key={stage.id} className={`relative flex gap-3 ${isLast ? '' : 'pb-6'}`}>
              {!isLast ? <div className={`absolute left-[11px] top-6 h-full w-0.5 ${lineClasses}`} /> : null}
              <div className={`relative flex size-6 shrink-0 items-center justify-center rounded-full ${circleClasses}`}>
                {isReached ? isFinalDenied ? <XIcon /> : <CheckIcon /> : <span className="size-2 rounded-full bg-gray-700" />}
              </div>
              <div className="pt-0.5">
                <p className={`text-sm font-semibold ${labelClasses}`}>{stage.label}</p>
                <p className={`text-xs ${isReached ? 'text-gray-500' : 'text-gray-600'}`}>
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
