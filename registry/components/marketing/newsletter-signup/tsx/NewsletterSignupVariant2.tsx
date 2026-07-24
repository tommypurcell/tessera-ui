import type { HTMLAttributes } from 'react'

export type NewsletterSignupVariant2Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function NewsletterSignupVariant2({ className, ...props }: NewsletterSignupVariant2Props) {
  return (
    <div className={className} {...props}>
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-center">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Sign up for our newsletter
            </h2>

            <p className="mt-4 text-pretty text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur doloremque saepe
              architecto maiores repudiandae amet perferendis repellendus, reprehenderit voluptas
              sequi.
            </p>
          </div>

          <form
            action="#"
            className="mx-auto mt-6 flex max-w-xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-center"
          >
            <label htmlFor="Email" className="flex-1">
              <span className="sr-only"> Email </span>

              <input
                type="email"
                id="Email"
                placeholder="Enter your email"
                className="h-12 w-full rounded border-gray-300 shadow-sm"
              />
            </label>

            <button
              type="submit"
              className="h-12 rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
