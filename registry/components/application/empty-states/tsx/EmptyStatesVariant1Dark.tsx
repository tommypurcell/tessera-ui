import type { HTMLAttributes } from 'react'

export type EmptyStatesVariant1DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function EmptyStatesVariant1Dark({ className, ...props }: EmptyStatesVariant1DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="max-w-md text-center">
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="mx-auto size-20 text-gray-400 dark:text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
          />
        </svg>

        <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">No items found</h2>

        <p className="mt-4 text-pretty text-gray-700 dark:text-gray-200">
          Get started by creating your first item. It only takes a few seconds.
        </p>

        <button
          type="button"
          className="mt-6 block w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Create Item
        </button>

        <p className="mt-6 text-sm text-gray-700 dark:text-gray-200">
          <a href="#" className="underline hover:text-gray-900 dark:hover:text-white">
            Learn how
          </a>{' '}
          or
          <a href="#" className="underline hover:text-gray-900 dark:hover:text-white">
            view examples
          </a>
        </p>
      </div>
    </div>
  )
}
