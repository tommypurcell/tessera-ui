import type { HTMLAttributes, ReactNode } from 'react'

export type StepperWizardStep = {
  id: string
  label: string
  status: 'complete' | 'current' | 'upcoming'
}

export type StepperWizardVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
  steps: StepperWizardStep[]
  title: string
  description: string
  children: ReactNode
  backLabel?: string
  nextLabel: string
  onBack?: () => void
  onNext?: () => void
  backDisabled?: boolean
}

/**
 * Copy-and-own Tailwind component. Multi-step form wizard taking a real
 * steps/title/description contract — pass your own step content as children.
 */
export function StepperWizard({
  className,
  steps,
  title,
  description,
  children,
  backLabel = 'Back',
  nextLabel,
  onBack,
  onNext,
  backDisabled,
  ...props
}: StepperWizardVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`} {...props}>
      <div className="border-b border-gray-200 px-6 py-5">
        <ol className="flex items-center">
          {steps.map((step, index) => (
            <li key={step.id} className="flex items-center">
              <div className="flex items-center gap-2">
                {step.status === 'complete' ? (
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white">
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                ) : (
                  <span
                    aria-current={step.status === 'current' ? 'step' : undefined}
                    className={`flex size-7 shrink-0 items-center justify-center rounded-full border-2 text-xs font-semibold ${
                      step.status === 'current' ? 'border-gray-900 text-gray-900' : 'border-gray-200 text-gray-400'
                    }`}
                  >
                    {index + 1}
                  </span>
                )}
                <span className={`text-sm font-medium ${step.status === 'upcoming' ? 'text-gray-400' : 'text-gray-900'}`}>{step.label}</span>
              </div>
              {index < steps.length - 1 ? (
                <div className={`mx-3 h-px w-8 sm:w-12 ${step.status === 'complete' ? 'bg-gray-900' : 'bg-gray-200'}`} />
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="px-6 py-6">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <div className="mt-5 flex flex-col gap-4">{children}</div>
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
        <button
          type="button"
          onClick={onBack}
          disabled={backDisabled}
          className="rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 disabled:opacity-50"
        >
          {backLabel}
        </button>
        <button type="button" onClick={onNext} className="rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700">
          {nextLabel}
        </button>
      </div>
    </div>
  )
}
