import type { HTMLAttributes, ReactNode } from 'react'

export type DataTableColumn<T> = {
  key: keyof T & string
  header: string
  sortable?: boolean
  sortDirection?: 'asc' | 'desc'
  align?: 'left' | 'right'
  render?: (row: T) => ReactNode
}

export type DataTableStatus = {
  label: string
  tone: 'positive' | 'neutral' | 'negative'
}

export type DataTableVariant1Props<T extends { id: string }> = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  columns: DataTableColumn<T>[]
  rows: T[]
  statusKey?: keyof T & string
  onSort?: (column: DataTableColumn<T>) => void
  onRowAction?: (row: T) => void
  page?: { start: number; end: number; total: number }
  onPrevious?: () => void
  onNext?: () => void
}

const toneStyles: Record<DataTableStatus['tone'], { badge: string; dot: string }> = {
  positive: { badge: 'bg-green-100 text-green-700', dot: 'bg-green-500' },
  neutral: { badge: 'bg-gray-100 text-gray-600', dot: 'bg-gray-400' },
  negative: { badge: 'bg-red-100 text-red-700', dot: 'bg-red-500' },
}

/**
 * Copy-and-own Tailwind component. Sortable, paginated data table taking real
 * columns/rows/status props — pass your own data instead of hand-editing markup.
 */
export function DataTable<T extends { id: string }>({
  className,
  columns,
  rows,
  statusKey,
  onSort,
  onRowAction,
  page,
  onPrevious,
  onNext,
  ...props
}: DataTableVariant1Props<T>) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col" className={`px-4 py-3 ${column.align === 'right' ? 'text-right' : 'text-left'}`}>
                  {column.sortable ? (
                    <button
                      type="button"
                      aria-sort={column.sortDirection === 'asc' ? 'ascending' : column.sortDirection === 'desc' ? 'descending' : 'none'}
                      onClick={() => onSort?.(column)}
                      className={`inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wide ${
                        column.sortDirection ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {column.header}
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5">
                        <path
                          fillRule="evenodd"
                          d="M12 20.25a.75.75 0 0 1-.75-.75V6.31l-5.47 5.47a.75.75 0 0 1-1.06-1.06l6.75-6.75a.75.75 0 0 1 1.06 0l6.75 6.75a.75.75 0 1 1-1.06 1.06l-5.47-5.47V19.5a.75.75 0 0 1-.75.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  ) : (
                    <span className="text-xs font-medium uppercase tracking-wide text-gray-500">{column.header}</span>
                  )}
                </th>
              ))}
              {onRowAction ? (
                <th scope="col" className="px-4 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              ) : null}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 bg-white">
            {rows.map((row, rowIndex) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {columns.map((column, columnIndex) => {
                  if (statusKey && column.key === statusKey) {
                    const status = row[statusKey] as unknown as DataTableStatus
                    return (
                      <td key={column.key} className="whitespace-nowrap px-4 py-3">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium ${toneStyles[status.tone].badge}`}>
                          <span className={`size-1.5 rounded-full ${toneStyles[status.tone].dot}`} />
                          {status.label}
                        </span>
                      </td>
                    )
                  }

                  return (
                    <td
                      key={column.key}
                      className={`whitespace-nowrap px-4 py-3 text-sm ${columnIndex === 0 ? 'font-medium text-gray-900' : 'text-gray-600'} ${
                        column.align === 'right' ? 'text-right' : ''
                      }`}
                    >
                      {column.render ? column.render(row) : String(row[column.key] ?? '')}
                    </td>
                  )
                })}
                {onRowAction ? (
                  <td className="whitespace-nowrap px-4 py-3 text-right">
                    <button type="button" onClick={() => onRowAction(row)} className="text-gray-400 hover:text-gray-600" aria-label={`Row actions for row ${rowIndex + 1}`}>
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                      </svg>
                    </button>
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {page ? (
        <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-500">
          <span>
            Showing <span className="font-medium text-gray-700">{page.end}</span> of <span className="font-medium text-gray-700">{page.total}</span> results
          </span>
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={onPrevious}
              disabled={page.start <= 1}
              className="rounded-md border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-600 disabled:text-gray-300"
            >
              Previous
            </button>
            <button
              type="button"
              onClick={onNext}
              disabled={page.end >= page.total}
              className="rounded-md border border-gray-200 px-2.5 py-1 text-xs font-medium text-gray-600 disabled:text-gray-300"
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
