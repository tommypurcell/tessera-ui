import type { HTMLAttributes } from 'react'

export type ProgressBarsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressBarsVariant3({ className, ...props }: ProgressBarsVariant3Props) {
  return (
    <div className={className} {...props}>
      <div
        role="progressbar"
        aria-valuenow={75}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-labelledby="UpdatingLabel"
      >
        <div className="flex justify-between gap-4 text-black">
          <span id="UpdatingLabel" className="text-sm font-semibold">
            Updating
          </span>

          <span className="text-sm font-semibold">75%</span>
        </div>

        <div className="mt-2 w-full border-2 border-black bg-white p-1 shadow-[2px_2px_0_0] shadow-black">
          <div className="h-3 bg-green-600" style={{ width: '75%' }}></div>
        </div>
      </div>
    </div>
  )
}
