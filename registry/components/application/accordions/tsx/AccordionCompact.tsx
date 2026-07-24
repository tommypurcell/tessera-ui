import type { HTMLAttributes } from 'react'

export type AccordionCompactProps = HTMLAttributes<HTMLDivElement>

/**
 * Native disclosure accordion. The browser manages keyboard and open-state behavior.
 */
export function AccordionCompact({ className, ...props }: AccordionCompactProps) {
  return (
    <div className={className} {...props}>
      <div className="space-y-1">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            <span>Storage & Limits</span>

            <svg
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
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

          <div className="p-3">
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            <span>Active Sessions</span>

            <svg
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
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

          <div className="p-3">
            <p className="text-gray-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            <span>Billing History</span>

            <svg
              aria-hidden="true"
              className="size-4 shrink-0 transition-transform duration-300 group-open:-rotate-180"
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

          <div className="p-3">
            <p className="text-gray-700">
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
