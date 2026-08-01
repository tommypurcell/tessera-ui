import type { HTMLAttributes } from 'react'

export type RotatingTextVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RotatingTextVariant2({ className, ...props }: RotatingTextVariant2Props) {
  return (
    <div className={className} {...props}>
      <p className="max-w-md text-center text-2xl font-semibold text-gray-950">
            Ship faster with
            <span className="fade-rotate align-middle text-blue-600">
              <span>automation</span>
              <span>confidence</span>
              <span>clarity</span>
            </span>
          </p>
    </div>
  )
}
