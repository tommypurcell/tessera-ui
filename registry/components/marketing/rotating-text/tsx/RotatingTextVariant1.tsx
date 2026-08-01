import type { HTMLAttributes } from 'react'

export type RotatingTextVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RotatingTextVariant1({ className, ...props }: RotatingTextVariant1Props) {
  return (
    <div className={className} {...props}>
      <p className="max-w-md text-center text-2xl font-semibold text-gray-950">
            Built for
            <span className="word-rotate align-middle">
              <span className="rounded-md bg-teal-100 px-2 py-0.5 text-teal-800">designers</span>
              <span className="rounded-md bg-orange-100 px-2 py-0.5 text-orange-800">developers</span>
              <span className="rounded-md bg-blue-100 px-2 py-0.5 text-blue-800">managers</span>
            </span>
          </p>
    </div>
  )
}
