import type { HTMLAttributes } from 'react'

export type BreadcrumbsVariant4Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BreadcrumbsVariant4({ className, ...props }: BreadcrumbsVariant4Props) {
  return (
    <div className={className} {...props}>
      <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-gray-700">
              <li>
                <a href="#" className="block transition-colors hover:text-gray-900" aria-label="Home">
                  <svg
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </a>
              </li>
      
              <li className="rtl:rotate-180">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
                </svg>
              </li>
      
              <li>
                <a href="#" className="block transition-colors hover:text-gray-900"> Category </a>
              </li>
      
              <li className="rtl:rotate-180">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m9 20.247 6-16.5" />
                </svg>
              </li>
      
              <li>
                <a href="#" className="block transition-colors hover:text-gray-900"> Product </a>
              </li>
            </ol>
          </nav>
    </div>
  )
}
