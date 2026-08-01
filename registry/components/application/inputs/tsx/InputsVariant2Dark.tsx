import type { HTMLAttributes } from 'react'

export type InputsVariant2DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function InputsVariant2Dark({ className, ...props }: InputsVariant2DarkProps) {
  return (
    <div className={className} {...props}>
      <label htmlFor="Email">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200"> Email </span>
      
            <div className="relative">
              <input
                type="email"
                id="Email"
                className="mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm dark:border-gray-600 dark:bg-gray-900 dark:text-white"
              />
      
              <span
                className="absolute inset-y-0 right-0 grid w-8 place-content-center text-gray-700 dark:text-gray-200"
              >
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </span>
            </div>
          </label>
    </div>
  )
}
