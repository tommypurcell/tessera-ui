export type HiddenPathSegment = {
  id: string
  label: string
  href: string
}

export type BreadcrumbSegmentedPathVariant2DarkProps = {
  hiddenSegments: HiddenPathSegment[]
  visibleSegment: { label: string; href: string }
  currentLabel: string
  homeHref?: string
}

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
  </svg>
)

/**
 * Copy-and-own Tailwind component. Truncated segmented breadcrumb path
 * adapted for dark surfaces.
 */
export function BreadcrumbSegmentedPathTruncated({
  hiddenSegments,
  visibleSegment,
  currentLabel,
  homeHref = '#',
}: BreadcrumbSegmentedPathVariant2DarkProps) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <a
            href={homeHref}
            className="flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700"
          >
            <HomeIcon />
            <span className="sr-only">Home</span>
          </a>
        </li>
        <li aria-hidden="true" className="text-gray-700">
          /
        </li>
        <li className="relative">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center rounded-full bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700">
              <span aria-hidden="true">&hellip;</span>
              <span className="sr-only">Show hidden path segments</span>
            </summary>
            <div className="absolute left-0 top-full z-10 mt-1 w-44 rounded-lg border border-gray-800 bg-gray-900 py-1 shadow-lg">
              {hiddenSegments.map((segment) => (
                <a
                  key={segment.id}
                  href={segment.href}
                  className="block px-3 py-1.5 text-sm text-gray-300 hover:bg-gray-800"
                >
                  {segment.label}
                </a>
              ))}
            </div>
          </details>
        </li>
        <li aria-hidden="true" className="text-gray-700">
          /
        </li>
        <li>
          <a
            href={visibleSegment.href}
            className="rounded-full bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-300 hover:bg-gray-700"
          >
            {visibleSegment.label}
          </a>
        </li>
        <li aria-hidden="true" className="text-gray-700">
          /
        </li>
        <li>
          <span aria-current="page" className="rounded-full bg-blue-500/15 px-3 py-1.5 text-sm font-medium text-blue-400">
            {currentLabel}
          </span>
        </li>
      </ol>
    </nav>
  )
}
