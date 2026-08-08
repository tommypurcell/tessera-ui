export type TableLoadingSkeletonVariant1Props = {
  columns: string[]
  rowWidths: string[][]
  rowCount?: number
}

/**
 * Copy-and-own Tailwind component. Shimmering placeholder table rows that
 * match the real column layout, with the header kept intact and a real
 * table structure so the loading state doesn't shift layout on load.
 */
export function TableLoadingSkeleton({ columns, rowWidths, rowCount = rowWidths.length }: TableLoadingSkeletonVariant1Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200" role="status" aria-label="Loading table data">
        <thead className="ltr:text-left rtl:text-right">
          <tr className="*:px-4 *:py-2.5 *:text-xs *:font-medium *:text-gray-500">
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={column} className="px-4 py-3">
                  <div
                    className={`h-3.5 animate-pulse bg-gray-200 ${colIndex === 2 ? 'h-5 rounded-full' : 'rounded'}`}
                    style={{ width: rowWidths[rowIndex % rowWidths.length][colIndex] }}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <span className="sr-only">Loading table content&hellip;</span>
    </div>
  )
}
