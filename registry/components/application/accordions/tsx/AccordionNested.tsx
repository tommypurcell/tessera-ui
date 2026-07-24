import type { HTMLAttributes } from 'react'

export type AccordionNestedProps = HTMLAttributes<HTMLDivElement>

/**
 * Native disclosure accordion. The browser manages keyboard and open-state behavior.
 */
export function AccordionNested({ className, ...props }: AccordionNestedProps) {
  return (
    <div className={className} {...props}>
      <div className="space-y-2">
        <details className="group space-y-2 [&_summary::-webkit-details-marker]:hidden" open>
          <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
            <span>Team Settings</span>

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

          <div className="space-y-2 pl-4">
            <details className="group/members [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <span>Members</span>

                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-300 group-open/members:-rotate-180"
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

              <div className="p-4">
                <p className="text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae
                  hic dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut
                  minus iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos
                  officia. Quos, temporibus perspiciatis!
                </p>
              </div>
            </details>

            <details className="group/roles [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <span>Roles & Permissions</span>

                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-300 group-open/roles:-rotate-180"
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

              <div className="p-4">
                <p className="text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae
                  hic dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut
                  minus iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos
                  officia. Quos, temporibus perspiciatis!
                </p>
              </div>
            </details>
          </div>
        </details>

        <details className="group space-y-2 [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-white px-4 py-3 font-medium text-gray-900 hover:bg-gray-50">
            <span>Integration Settings</span>

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

          <div className="space-y-2 pl-4">
            <details className="group/keys [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between gap-4 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <span>API Keys</span>

                <svg
                  aria-hidden="true"
                  className="size-4 shrink-0 transition-transform duration-300 group-open/keys:-rotate-180"
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

              <div className="p-4">
                <p className="text-gray-700">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae
                  hic dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut
                  minus iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos
                  officia. Quos, temporibus perspiciatis!
                </p>
              </div>
            </details>
          </div>
        </details>
      </div>
    </div>
  )
}
