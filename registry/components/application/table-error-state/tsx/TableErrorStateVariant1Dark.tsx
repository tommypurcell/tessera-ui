export type TableRow = {
  id: string
  cells: string[]
}

export type TableErrorStateVariant1DarkProps = {
  columns: string[]
  rows: TableRow[]
  errorTitle: string
  errorMessage: string
  onRetry?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). In-table failure row: a
 * normal table with a final row whose cell spans every column, showing a
 * failure icon, reason, and a retry button in place of the remaining data.
 */
export function TableErrorState({ columns, rows, errorTitle, errorMessage, onRetry, className }: TableErrorStateVariant1DarkProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <table className="w-full text-left text-sm">
        <thead>
          <tr className="border-b border-gray-800 text-xs font-medium uppercase tracking-wide text-gray-500">
            {columns.map((column) => (
              <th key={column} scope="col" className="px-4 py-2.5">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {rows.map((row) => (
            <tr key={row.id}>
              {row.cells.map((cell, index) => (
                <td key={index} className={index === 0 ? 'px-4 py-3 font-medium text-gray-100' : 'px-4 py-3 text-gray-400'}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td colSpan={columns.length} className="px-4 py-8">
              <div className="flex flex-col items-center gap-2 text-center">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-rose-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                </svg>
                <p className="text-sm font-medium text-gray-100">{errorTitle}</p>
                <p className="text-xs text-gray-400">{errorMessage}</p>
                <button type="button" onClick={onRetry} className="mt-1 rounded-md border border-gray-700 px-3 py-1.5 text-xs font-semibold text-gray-300 hover:bg-gray-800">
                  Retry
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
