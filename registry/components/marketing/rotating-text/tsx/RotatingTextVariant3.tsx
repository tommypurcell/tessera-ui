import type { HTMLAttributes } from 'react'

export type RotatingTextVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RotatingTextVariant3({ className, ...props }: RotatingTextVariant3Props) {
  return (
    <div className={className} {...props}>
      <p className="max-w-md text-center text-2xl font-semibold text-gray-950">
            The platform for modern
            <span className="slide-rotate font-bold text-violet-600">
              <span className="track">
                <span>agencies.</span>
                <span>startups.</span>
                <span>teams.</span>
                <span aria-hidden="true">agencies.</span>
              </span>
            </span>
          </p>
    </div>
  )
}
