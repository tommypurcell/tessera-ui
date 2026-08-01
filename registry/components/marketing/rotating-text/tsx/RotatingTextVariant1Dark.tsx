import type { HTMLAttributes } from 'react'

export type RotatingTextVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RotatingTextVariant1Dark({ className, ...props }: RotatingTextVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <p className="max-w-md text-center text-2xl font-semibold text-gray-100">
            Built for
            <span className="word-rotate align-middle">
              <span className="rounded-md bg-teal-950 px-2 py-0.5 text-teal-300">designers</span>
              <span className="rounded-md bg-orange-950 px-2 py-0.5 text-orange-300">developers</span>
              <span className="rounded-md bg-blue-950 px-2 py-0.5 text-blue-300">managers</span>
            </span>
          </p>
    </div>
  )
}
