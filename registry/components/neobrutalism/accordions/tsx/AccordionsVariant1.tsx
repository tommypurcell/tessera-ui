import type { HTMLAttributes } from 'react'

export type AccordionsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Native details and summary elements preserve keyboard and disclosure behavior.
 */
export function AccordionsVariant1({ className, ...props }: AccordionsVariant1Props) {
  return (
    <div className={className} {...props}>
      <div className="space-y-3">
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] shadow-black hover:bg-yellow-200 focus:bg-yellow-200 focus:outline-0">
            <span className="font-semibold">What are the basic features?</span>

            <svg
              aria-hidden="true"
              className="size-5 shrink-0 group-open:-rotate-180"
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
            <p className="text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] shadow-black hover:bg-yellow-200 focus:bg-yellow-200 focus:outline-0">
            <span className="font-semibold">How do I get started?</span>

            <svg
              aria-hidden="true"
              className="size-5 shrink-0 group-open:-rotate-180"
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
            <p className="text-black">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt similique, quae hic
              dicta quo facere facilis praesentium a sunt, est quia pariatur nam, modi aut minus
              iste odio consectetur molestias iusto cupiditate ullam laborum veniam quos officia.
              Quos, temporibus perspiciatis!
            </p>
          </div>
        </details>

        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary className="flex cursor-pointer items-center justify-between gap-4 border-2 border-black bg-white px-4 py-3 font-medium text-gray-900 shadow-[4px_4px_0_0] shadow-black hover:bg-yellow-200 focus:bg-yellow-200 focus:outline-0">
            <span className="font-semibold">What support options are available?</span>

            <svg
              aria-hidden="true"
              className="size-5 shrink-0 group-open:-rotate-180"
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
            <p className="text-black">
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
