import type { HTMLAttributes } from 'react'

export type ProgressBarsVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressBarsVariant1Dark({ className, ...props }: ProgressBarsVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <div
        role="progressbar"
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Progress"
      >
        <div className="w-full border-2 border-black bg-white p-1 shadow-[2px_2px_0_0] shadow-black dark:border-white dark:bg-gray-900 dark:shadow-white">
          <div className="h-3 bg-black dark:bg-white" style={{ width: '25%' }}></div>
        </div>
      </div>
    </div>
  )
}
