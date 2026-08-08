export type WizardRailStep = {
  title: string
  description: string
  status: 'complete' | 'current' | 'upcoming'
  onJump?: () => void
}

export type WizardProgressRailVariant1DarkProps = {
  steps: WizardRailStep[]
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Vertical wizard navigation rail:
 * a connected column of numbered step circles with title/description, where
 * completed steps are click-to-jump links and the current step is highlighted.
 */
export function WizardProgressRail({ steps, className }: WizardProgressRailVariant1DarkProps) {
  return (
    <nav aria-label="Setup progress" className={`w-full ${className ?? ''}`}>
      <ol className="flex flex-col">
        {steps.map((step, index) => {
          const isLast = index === steps.length - 1
          const number = index + 1

          const circle =
            step.status === 'complete' ? (
              <button
                type="button"
                onClick={step.onJump}
                className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-white"
              >
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : step.status === 'current' ? (
              <span
                aria-current="step"
                className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-indigo-400 bg-gray-900 text-sm font-semibold text-indigo-400"
              >
                {number}
              </span>
            ) : (
              <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-gray-700 bg-gray-900 text-sm font-semibold text-gray-500">
                {number}
              </span>
            )

          const text = (
            <>
              <span className={`text-sm font-semibold ${step.status === 'upcoming' ? 'text-gray-500' : 'text-gray-100'}`}>{step.title}</span>
              <span className={`text-xs ${step.status === 'upcoming' ? 'text-gray-500' : 'text-gray-400'}`}>{step.description}</span>
            </>
          )

          return (
            <li key={step.title} className={`relative flex gap-3 ${isLast ? '' : 'pb-8'}`}>
              {!isLast ? (
                <span
                  className={`absolute top-7 left-[15px] h-full w-px ${step.status === 'complete' ? 'bg-indigo-500' : 'bg-gray-800'}`}
                  aria-hidden="true"
                />
              ) : null}
              {circle}
              {step.status === 'complete' ? (
                <a href="#" onClick={step.onJump} className="flex flex-col pt-1 hover:opacity-80">
                  {text}
                </a>
              ) : (
                <div className="flex flex-col pt-1">{text}</div>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
