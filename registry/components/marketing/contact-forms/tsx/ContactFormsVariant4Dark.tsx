import type { HTMLAttributes } from 'react'

export type ContactFormsVariant4DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ContactFormsVariant4Dark({ className, ...props }: ContactFormsVariant4DarkProps) {
  return (
    <div className={className} {...props}>
      <form
        action="#"
        className="mx-auto grid max-w-lg grid-cols-1 gap-4 rounded-lg border border-gray-300 bg-gray-100 p-6 sm:grid-cols-2 dark:border-gray-600 dark:bg-gray-800"
      >
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-900 dark:text-white" htmlFor="name">
            Name
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="email"
          >
            Email
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>

        <div>
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="phone"
          >
            Phone
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            id="phone"
            type="tel"
            placeholder="Your phone"
          />
        </div>

        <div className="md:col-span-2">
          <label
            className="block text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="message"
          >
            Message
          </label>

          <textarea
            className="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-white"
            id="message"
            rows={4}
            placeholder="Your message"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 dark:hover:bg-indigo-700 dark:hover:text-white"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}
