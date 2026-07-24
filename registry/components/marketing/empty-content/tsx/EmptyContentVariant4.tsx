import type { HTMLAttributes } from 'react'

export type EmptyContentVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function EmptyContentVariant4({ className, ...props }: EmptyContentVariant4Props) {
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
          className="mx-auto size-20 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>

        <h2 className="mt-6 text-2xl font-bold text-gray-900">Explore more</h2>

        <p className="mt-4 text-pretty text-gray-700">
          This section doesn't have content right now. Discover related topics and inspiration
          instead.
        </p>

        <div className="mt-6 space-y-2">
          <a
            href="#"
            className="block rounded-lg border border-gray-300 bg-white p-4 text-left transition-colors hover:bg-gray-50"
          >
            <h3 className="font-medium text-gray-900">Featured Collection</h3>

            <p className="mt-1 text-sm text-gray-600">Browse our curated selection</p>
          </a>

          <a
            href="#"
            className="block rounded-lg border border-gray-300 bg-white p-4 text-left transition-colors hover:bg-gray-50"
          >
            <h3 className="font-medium text-gray-900">Latest Trends</h3>

            <p className="mt-1 text-sm text-gray-600">See what's trending now</p>
          </a>
        </div>

        <a
          href="#"
          className="mt-6 block w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Back to Shopping
        </a>
      </div>
    </div>
  )
}
