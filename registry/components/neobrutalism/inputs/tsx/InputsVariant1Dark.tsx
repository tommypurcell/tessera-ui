import type { HTMLAttributes } from 'react'

export type InputsVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function InputsVariant1Dark({ className, ...props }: InputsVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Email" className="text-black dark:text-white">
        <span className="text-sm font-semibold"> Email </span>

        <input
          type="email"
          id="Email"
          className="mt-0.5 w-full border-2 border-black bg-white shadow-[4px_4px_0_0] shadow-black focus:ring-2 focus:ring-yellow-300 sm:text-sm dark:border-white dark:bg-gray-900 dark:shadow-white dark:focus:ring-yellow-600"
        />
      </label>
    </div>
  )
}
