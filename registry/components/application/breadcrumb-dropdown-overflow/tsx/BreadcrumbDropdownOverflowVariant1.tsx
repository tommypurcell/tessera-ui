import { useState } from 'react'

export type BreadcrumbSegment = {
  label: string
  href?: string
}

export type BreadcrumbDropdownOverflowVariant1Props = {
  segments: BreadcrumbSegment[]
}

function ChevronSeparator() {
  return (
    <li aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z"
          clipRule="evenodd"
        />
      </svg>
    </li>
  )
}

/**
 * Copy-and-own Tailwind component. Breadcrumb trail that collapses middle
 * segments (keeping the first and last two visible) into a "…" trigger, which
 * opens a dropdown listing the hidden segments in order. Renders every segment
 * inline when there are 4 or fewer.
 */
export function BreadcrumbDropdownOverflow({ segments }: BreadcrumbDropdownOverflowVariant1Props) {
  const [open, setOpen] = useState(false)
  const collapse = segments.length > 4
  const first = segments[0]
  const hidden = collapse ? segments.slice(1, -2) : []
  const tail = collapse ? segments.slice(-2) : segments.slice(1)

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-700">
        <li>
          <a href={first.href ?? '#'} className="block transition-colors hover:text-gray-900">
            {first.label}
          </a>
        </li>

        {collapse ? (
          <>
            <ChevronSeparator />
            <li className="relative">
              <button
                type="button"
                aria-haspopup="dialog"
                aria-expanded={open}
                aria-label={open ? 'Hide breadcrumb segments' : 'Show hidden breadcrumb segments'}
                onClick={() => setOpen((value) => !value)}
                className={`flex items-center rounded-md px-1.5 py-0.5 ${open ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'}`}
              >
                &hellip;
              </button>

              {open ? (
                <div role="dialog" aria-label="Hidden breadcrumb segments" className="absolute left-0 top-full z-10 mt-2 w-44 rounded-lg border border-gray-200 bg-white p-1 shadow-lg shadow-gray-900/5">
                  {hidden.map((segment) => (
                    <a key={segment.label} href={segment.href ?? '#'} className="block rounded-md px-2.5 py-1.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                      {segment.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </li>
          </>
        ) : null}

        {tail.map((segment, index) => {
          const isLast = index === tail.length - 1
          return (
            <span key={segment.label} className="contents">
              <ChevronSeparator />
              <li>
                {isLast ? (
                  <span aria-current="page" className="font-medium text-gray-900">
                    {segment.label}
                  </span>
                ) : (
                  <a href={segment.href ?? '#'} className="block transition-colors hover:text-gray-900">
                    {segment.label}
                  </a>
                )}
              </li>
            </span>
          )
        })}
      </ol>
    </nav>
  )
}
