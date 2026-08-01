import type { HTMLAttributes } from 'react'

export type ProgressBarsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressBarsVariant4({ className, ...props }: ProgressBarsVariant4Props) {
  return (
    <div className={className} {...props}>
      <div className="text-center">
            <div
              className="relative mx-auto size-32"
              role="progressbar"
              aria-valuenow={25}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-labelledby="LoadingCircleLabel"
            >
              <svg className="size-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-gray-200"
                />
      
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  stroke-dasharray="70.7 282.7"
                  strokeLinecap="round"
                  className="origin-center text-blue-600"
                  style={{transform: 'rotate(-90deg)'}}
                />
              </svg>
      
              <div className="absolute inset-0 grid place-content-center">
                <span className="text-xl font-semibold text-gray-900">25%</span>
              </div>
            </div>
      
            <p id="LoadingCircleLabel" className="mt-2 text-sm text-gray-700">Loading</p>
          </div>
      
          <div className="text-center">
            <div
              className="relative mx-auto size-32"
              role="progressbar"
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-labelledby="NearlyDoneCircleLabel"
            >
              <svg className="size-full" viewBox="0 0 100 100" aria-hidden="true">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-gray-200"
                />
      
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  stroke-dasharray="212.1 282.7"
                  strokeLinecap="round"
                  className="origin-center text-green-600"
                  style={{transform: 'rotate(-90deg)'}}
                />
              </svg>
      
              <div className="absolute inset-0 grid place-content-center">
                <span className="text-xl font-semibold text-gray-900">75%</span>
              </div>
            </div>
      
            <p id="NearlyDoneCircleLabel" className="mt-2 text-sm text-gray-700">Nearly done</p>
          </div>
    </div>
  )
}
