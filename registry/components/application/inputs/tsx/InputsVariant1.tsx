import type { HTMLAttributes } from 'react'

export type InputsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function InputsVariant1({ className, ...props }: InputsVariant1Props) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Email">
        <span className="text-sm font-medium text-gray-700"> Email </span>

        <input
          type="email"
          id="Email"
          className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
        />
      </label>
    </div>
  )
}
