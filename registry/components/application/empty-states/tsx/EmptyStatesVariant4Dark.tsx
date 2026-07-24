import type { HTMLAttributes } from 'react'

export type EmptyStatesVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function EmptyStatesVariant4Dark({ className, ...props }: EmptyStatesVariant4DarkProps) {
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
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>

        <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">
          Get started in seconds
        </h2>

        <p className="mt-4 text-pretty text-gray-700 dark:text-gray-200">
          Complete these quick steps to set up your workspace.
        </p>

        <ol className="mt-6 space-y-2 text-left">
          <li className="flex items-center gap-2">
            <span className="grid size-6 shrink-0 place-content-center rounded-full bg-indigo-600 text-sm font-medium text-white">
              1
            </span>

            <span className="text-sm text-gray-700 dark:text-gray-200">
              Create your first project
            </span>
          </li>

          <li className="flex items-center gap-2">
            <span className="grid size-6 shrink-0 place-content-center rounded-full bg-indigo-600 text-sm font-medium text-white">
              2
            </span>

            <span className="text-sm text-gray-700 dark:text-gray-200">Invite team members</span>
          </li>

          <li className="flex items-center gap-2">
            <span className="grid size-6 shrink-0 place-content-center rounded-full bg-indigo-600 text-sm font-medium text-white">
              3
            </span>

            <span className="text-sm text-gray-700 dark:text-gray-200">Start collaborating</span>
          </li>
        </ol>

        <button className="mt-6 block w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
          Create Project
        </button>
      </div>
    </div>
  )
}
