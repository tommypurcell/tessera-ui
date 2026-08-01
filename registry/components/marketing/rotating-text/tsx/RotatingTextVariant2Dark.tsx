import type { HTMLAttributes } from 'react'

export type RotatingTextVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RotatingTextVariant2Dark({ className, ...props }: RotatingTextVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <p className="max-w-md text-center text-2xl font-semibold text-gray-100">
            Ship faster with
            <span className="fade-rotate align-middle text-blue-400">
              <span>automation</span>
              <span>confidence</span>
              <span>clarity</span>
            </span>
          </p>
    </div>
  )
}
