import type { HTMLAttributes } from 'react'

export type ProgressAtomsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ProgressAtomsVariant1({ className, ...props }: ProgressAtomsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div
            role="progressbar"
            aria-label="Upload progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={64}
            className="h-2 w-56 overflow-hidden rounded-full bg-slate-200"
          >
            <span className="block h-full w-[64%] rounded-full bg-blue-600"></span>
          </div>
    </div>
  )
}
