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
        <div className="w-full border-2 border-black bg-white p-1 shadow-[2px_2px_0_0] shadow-black">
          <div className="h-3 bg-black" style={{ width: '25%' }}></div>
        </div>
      </div>
    </div>
  )
}
