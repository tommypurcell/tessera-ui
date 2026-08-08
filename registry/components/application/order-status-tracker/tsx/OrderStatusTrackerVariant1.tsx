export type OrderStatusStep = {
  label: string
  date: string
}

export type OrderStatusTrackerVariant1Props = {
  steps: OrderStatusStep[]
  /** Index of the current (in-progress) step. Steps before it are complete, after it are upcoming. */
  currentStepIndex: number
  className?: string
}

/**
 * Copy-and-own Tailwind component. Horizontal shipment status stepper — completed steps
 * show a checkmark, the current step is highlighted with a pulse ring, and upcoming steps
 * are outlined only, all computed from a single current-step index.
 */
export function OrderStatusTrackerVariant1({
  steps,
  currentStepIndex,
  className,
}: OrderStatusTrackerVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ''}`}>
      <ol aria-label="Order status" className="flex items-start">
        {steps.map((step, index) => {
          const isComplete = index < currentStepIndex
          const isCurrent = index === currentStepIndex
          const isLast = index === steps.length - 1

          return (
            <li
              key={step.label}
              className="relative flex flex-1 flex-col items-center text-center"
              aria-current={isCurrent ? 'step' : undefined}
            >
              <div className="flex h-6 w-full items-center">
                {isComplete ? (
                  <div className="flex size-6 items-center justify-center rounded-full bg-blue-600 text-white">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                ) : isCurrent ? (
                  <div className="flex size-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-blue-100">
                    <span className="size-2 rounded-full bg-white" />
                  </div>
                ) : (
                  <div className="flex size-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-gray-300">
                    <span className="size-2 rounded-full bg-gray-300" />
                  </div>
                )}

                {!isLast ? (
                  <div className={`h-0.5 flex-1 ${isComplete ? 'bg-blue-600' : 'bg-gray-200'}`} />
                ) : null}
              </div>

              <p className={`mt-2 text-xs font-semibold ${isCurrent ? 'text-blue-600' : isComplete ? 'text-gray-900' : 'text-gray-400 font-medium'}`}>
                {step.label}
              </p>
              <p className={`text-xs ${isComplete || isCurrent ? 'text-gray-400' : 'text-gray-300'}`}>{step.date}</p>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
