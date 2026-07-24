import type { HTMLAttributes } from 'react'

export type ProgressBarsVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressBarsVariant2({ className, ...props }: ProgressBarsVariant2Props) {
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
          <div
            className="h-3 bg-[repeating-linear-gradient(45deg,var(--tw-gradient-from)_0,var(--tw-gradient-from)_10px,var(--tw-gradient-to)_10px,var(--tw-gradient-to)_20px)] from-yellow-400 to-yellow-500"
            style={{ width: '25%' }}
          ></div>
        </div>
      </div>
    </div>
  )
}
