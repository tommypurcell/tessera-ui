import type { HTMLAttributes } from 'react'

export type ProgressBarsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressBarsVariant1({ className, ...props }: ProgressBarsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progress"
          >
            <p className="text-sm font-medium text-gray-900">25%</p>
      
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              <div className="h-full rounded-full bg-blue-600" style={{width: '25%'}}></div>
            </div>
          </div>
    </div>
  )
}
