export type HiddenPathSegment = {
  id: string
  label: string
  href: string
}

export type BreadcrumbSegmentedPathVariant2Props = {
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
 * Copy-and-own Tailwind component. Segmented breadcrumb path with a
 * truncation menu — middle segments collapse into an ellipsis pill that
 * opens a dropdown of the hidden path segments, for long/deep hierarchies.
 * Uses a native <details>/<summary> disclosure so the menu works without
 * additional script.
 */
export function BreadcrumbSegmentedPathTruncated({
  hiddenSegments,
  visibleSegment,
  currentLabel,
  homeHref = '#',
}: BreadcrumbSegmentedPathVariant2Props) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li>
          <a
            href={homeHref}
            className="flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200"
          >
            <HomeIcon />
            <span className="sr-only">Home</span>
          </a>
        </li>
        <li aria-hidden="true" className="text-gray-300">
          /
        </li>
        <li className="relative">
          <details className="group">
            <summary className="flex cursor-pointer list-none items-center rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200">
              <span aria-hidden="true">&hellip;</span>
              <span className="sr-only">Show hidden path segments</span>
            </summary>
            <div className="absolute left-0 top-full z-10 mt-1 w-44 rounded-lg border border-gray-200 bg-white py-1 shadow-lg">
              {hiddenSegments.map((segment) => (
                <a
                  key={segment.id}
                  href={segment.href}
                  className="block px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
                >
                  {segment.label}
                </a>
              ))}
            </div>
          </details>
        </li>
        <li aria-hidden="true" className="text-gray-300">
          /
        </li>
        <li>
          <a
            href={visibleSegment.href}
            className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-200"
          >
            {visibleSegment.label}
          </a>
        </li>
        <li aria-hidden="true" className="text-gray-300">
          /
        </li>
        <li>
          <span aria-current="page" className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
            {currentLabel}
          </span>
        </li>
      </ol>
    </nav>
  )
}
