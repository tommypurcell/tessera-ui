import type { HTMLAttributes } from 'react'

export type ContactFormsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ContactFormsVariant4({ className, ...props }: ContactFormsVariant4Props) {
  return (
    <div className={className} {...props}>
      <form
        action="#"
        className="mx-auto grid max-w-lg grid-cols-1 gap-4 rounded-lg border border-gray-300 bg-gray-100 p-6 sm:grid-cols-2"
      >
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-900" htmlFor="name">
            Name
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="email">
            Email
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-900" htmlFor="phone">
            Phone
          </label>

          <input
            className="mt-1 w-full rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
            id="phone"
            type="tel"
            placeholder="Your phone"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-900" htmlFor="message">
            Message
          </label>

          <textarea
            className="mt-1 w-full resize-none rounded-lg border-gray-300 focus:border-indigo-500 focus:outline-none"
            id="message"
            rows={4}
            placeholder="Your message"
          ></textarea>
        </div>

        <div className="md:col-span-2">
          <button
            className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600"
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}
