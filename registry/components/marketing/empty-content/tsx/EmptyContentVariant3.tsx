import type { HTMLAttributes } from 'react'

export type EmptyContentVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function EmptyContentVariant3({ className, ...props }: EmptyContentVariant3Props) {
  return (
    <div className={className} {...props}>
      <div className="max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-900">Coming soon!</h2>

        <p className="mt-4 text-pretty text-gray-700">
          We're working on something exciting. Be the first to know when it launches.
        </p>

        <form className="mt-6 space-y-2">
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full rounded-lg border-gray-300 px-4 py-3 text-sm focus:border-indigo-500 focus:outline-none"
          />

          <button className="block w-full rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-indigo-700">
            Notify Me
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-700">We'll let you know the moment it's available.</p>
      </div>
    </div>
  )
}
