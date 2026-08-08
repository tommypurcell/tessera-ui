import type { ReactNode } from 'react'

export type BreadcrumbItem = {
  label: string
  href?: string
}

export type BreadcrumbPageHeaderVariant1DarkProps = {
  breadcrumbs: BreadcrumbItem[]
  title: string
  description?: string
  actions?: ReactNode
  className?: string
}

function ChevronIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/**
 * Copy-and-own Tailwind component. Page-header composite adapted for dark surfaces — a
 * breadcrumb trail, page title, optional description, and a trailing action slot.
 */
export function BreadcrumbPageHeaderVariant1Dark({
  breadcrumbs,
  title,
  description,
  actions,
  className,
}: BreadcrumbPageHeaderVariant1DarkProps) {
  return (
    <div className={`border-b border-gray-800 pb-4 ${className ?? ''}`}>
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center gap-1 text-xs text-gray-500">
          {breadcrumbs.map((crumb, index) => (
            <li key={crumb.label} className="flex items-center gap-1">
              {index > 0 ? (
                <span className="rtl:rotate-180" aria-hidden="true">
                  <ChevronIcon />
                </span>
              ) : null}
              {crumb.href && index < breadcrumbs.length - 1 ? (
                <a href={crumb.href} className="hover:text-gray-300">
                  {crumb.label}
                </a>
              ) : (
                <span aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined} className="font-medium text-gray-300">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-2 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-xl font-semibold text-white">{title}</h1>
          {description ? <p className="mt-1 text-sm text-gray-400">{description}</p> : null}
        </div>

        {actions ? <div className="flex shrink-0 items-center gap-2">{actions}</div> : null}
      </div>
    </div>
  )
}
