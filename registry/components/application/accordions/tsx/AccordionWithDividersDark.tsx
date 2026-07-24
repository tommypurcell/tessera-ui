import type { HTMLAttributes } from 'react'

export type AccordionWithDividersDarkProps = HTMLAttributes<HTMLDivElement>

/**
 * Native disclosure accordion. The browser manages keyboard and open-state behavior.
 */
export function AccordionWithDividersDark({ className, ...props }: AccordionWithDividersDarkProps) {
  return (
    <div className={className} {...props}>
      <div className="-mx-4 -my-2 space-y-0 divide-y divide-gray-200 dark:divide-gray-700">
        <details className="group px-4 py-3 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-200">
            <span>Account Settings</span>

            <svg
              aria-hidden="true"
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <div className="py-4">
            <p className="text-gray-700 dark:text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details className="group px-4 py-3 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-200">
            <span>Privacy & Permissions</span>

            <svg
              aria-hidden="true"
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <div className="py-4">
            <p className="text-gray-700 dark:text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details className="group px-4 py-3 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-200">
            <span>Notifications & Alerts</span>

            <svg
              aria-hidden="true"
              className="size-5 shrink-0 transition-transform duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <div className="py-4">
            <p className="text-gray-700 dark:text-gray-200">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>
      </div>
    </div>
  )
}
