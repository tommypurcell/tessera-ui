import type { HTMLAttributes } from 'react'

export type ContactFormsVariant3DarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function ContactFormsVariant3Dark({ className, ...props }: ContactFormsVariant3DarkProps) {
  return (
    <div className={className} {...props}>
      <form
        action="#"
        className="mx-auto max-w-md space-y-4 rounded-lg border border-gray-300 bg-gray-100 p-6 dark:border-gray-600 dark:bg-gray-800"
      >
        <div>
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

        <fieldset>
          <legend className="block text-sm font-medium text-gray-900 dark:text-white">
            Inquiry
          </legend>

          <div className="mt-2 space-y-2">
            <div className="flex items-center gap-2">
              <input
                className="size-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                id="general-inquiry"
                type="checkbox"
                name="inquiry-type"
                value="general-inquiry"
              />

              <label
                className="block text-sm text-gray-900 dark:text-white"
                htmlFor="general-inquiry"
              >
                General Inquiry
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                className="size-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                id="support"
                type="checkbox"
                name="inquiry-type"
                value="support"
              />

              <label className="block text-sm text-gray-900 dark:text-white" htmlFor="support">
                Support
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                className="size-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                id="feedback"
                type="checkbox"
                name="inquiry-type"
                value="feedback"
              />

              <label className="block text-sm text-gray-900 dark:text-white" htmlFor="feedback">
                Feedback
              </label>
            </div>

            <div className="flex items-center gap-2">
              <input
                className="size-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-900 dark:text-white"
                id="other"
                type="checkbox"
                name="inquiry-type"
                value="other"
              />

              <label className="block text-sm text-gray-900 dark:text-white" htmlFor="other">
                Other
              </label>
            </div>
          </div>
        </fieldset>

        <div>
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

        <button
          className="block w-full rounded-lg border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition-colors hover:bg-transparent hover:text-indigo-600 dark:hover:bg-indigo-700 dark:hover:text-white"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
