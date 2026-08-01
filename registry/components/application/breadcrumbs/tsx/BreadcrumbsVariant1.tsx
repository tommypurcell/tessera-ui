import type { HTMLAttributes } from 'react'

export type BreadcrumbsVariant1Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BreadcrumbsVariant1({ className, ...props }: BreadcrumbsVariant1Props) {
  return (
    <div className={className} {...props}>
      <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-1 text-sm text-gray-700">
              <li>
                <a href="#" className="block transition-colors hover:text-gray-900"> Home </a>
              </li>
      
              <li className="rtl:rotate-180">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
      
              <li>
                <a href="#" className="block transition-colors hover:text-gray-900"> Category </a>
              </li>
      
              <li className="rtl:rotate-180">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
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
