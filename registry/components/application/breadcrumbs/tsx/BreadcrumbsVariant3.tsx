import type { HTMLAttributes } from 'react'

export type BreadcrumbsVariant3Props = HTMLAttributes<HTMLDivElement>

/**
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function BreadcrumbsVariant3({ className, ...props }: BreadcrumbsVariant3Props) {
  return (
    <div className={className} {...props}>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-sm text-gray-700">
          <li>
            <a href="#" className="block transition-colors hover:text-gray-900">
              {' '}
              Home{' '}
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
            <a href="#" className="block transition-colors hover:text-gray-900">
              {' '}
              Category{' '}
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
            <a href="#" className="block transition-colors hover:text-gray-900">
              {' '}
              Product{' '}
            </a>
          </li>
        </ol>
      </nav>
    </div>
  )
}
