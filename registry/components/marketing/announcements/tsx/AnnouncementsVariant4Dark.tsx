import type { HTMLAttributes } from 'react'

export type AnnouncementsVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AnnouncementsVariant4Dark({ className, ...props }: AnnouncementsVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <div className="fixed inset-x-0 bottom-0 z-auto flex items-center justify-between border-t border-gray-200 bg-gray-100 px-4 py-2 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        <span> </span>

        <p className="text-center font-medium">
          Lorem, ipsum dolor
          <a href="#" className="inline-block underline">
            {' '}
            sit amet consectetur{' '}
          </a>
        </p>

        <button
          type="button"
          aria-label="Dismiss"
          className="rounded border border-gray-300 bg-white p-1.5 shadow-sm transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-900 dark:hover:bg-gray-800"
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}
