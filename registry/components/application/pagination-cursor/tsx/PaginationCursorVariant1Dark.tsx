import type { HTMLAttributes } from 'react'

export type PaginationCursorVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  rangeStart: number
  rangeEnd: number
  total: number
  pageSize: number
  pageSizeOptions?: number[]
  hasPrevious?: boolean
  hasNext?: boolean
  onPageSizeChange?: (pageSize: number) => void
  onPrevious?: () => void
  onNext?: () => void
}

/**
 * Copy-and-own Tailwind component. Cursor-based pager taking real
 * range/total/hasNext state — pass your own cursor-fetch handlers instead of hand-editing markup.
 */
export function PaginationCursorDark({
  className,
  rangeStart,
  rangeEnd,
  total,
  pageSize,
  pageSizeOptions = [20],
  hasPrevious = false,
  hasNext = false,
  onPageSizeChange,
  onPrevious,
  onNext,
  ...props
}: PaginationCursorVariant1DarkProps) {
  return (
    <div className={`flex items-center justify-between gap-4 rounded-xl border border-gray-800 bg-gray-900 px-4 py-3 ${className ?? ''}`} {...props}>
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <span>Showing</span>
        <span className="font-medium text-white">
          {rangeStart}–{rangeEnd}
        </span>
        <span>of</span>
        <span className="font-medium text-white">{total}</span>
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-1.5 text-sm text-gray-400">
          <span className="hidden sm:inline">Rows per page</span>
          <select
            value={pageSize}
            onChange={(event) => onPageSizeChange?.(Number(event.target.value))}
            className="rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none"
          >
            {pageSizeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="rounded-md border border-gray-700 bg-gray-900 p-1.5 text-gray-300 hover:bg-gray-800 disabled:opacity-40"
          >
            <span className="sr-only">Previous page</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!hasNext}
            className="rounded-md border border-gray-700 bg-gray-900 p-1.5 text-gray-300 hover:bg-gray-800 disabled:opacity-40"
          >
            <span className="sr-only">Next page</span>
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
