import type { HTMLAttributes } from 'react'

export type InputsVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function InputsVariant1Dark({ className, ...props }: InputsVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Email">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Email </span>

        <input
          type="email"
          id="Email"
          className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
        />
      </label>
    </div>
  )
}
