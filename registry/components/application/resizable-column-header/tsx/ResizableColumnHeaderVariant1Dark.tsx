import { useCallback, useRef, useState } from 'react'

export type SortDirection = 'ascending' | 'descending' | null

export type TableColumn = {
  id: string
  label: string
  initialWidth: number
  resizable?: boolean
}

export type ResizableColumnHeaderVariant1DarkProps = {
  columns: TableColumn[]
  sortedColumnId: string | null
  sortDirection: SortDirection
  onSort?: (columnId: string) => void
  rows: string[][]
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Table header row
 * combining a sort-caret toggle button per column with a drag-to-resize
 * handle on the trailing edge of each th, backed by table-fixed so column
 * widths hold.
 */
export function ResizableColumnHeader({ columns, sortedColumnId, sortDirection, onSort, rows, className }: ResizableColumnHeaderVariant1DarkProps) {
  const [widths, setWidths] = useState<Record<string, number>>(() =>
    Object.fromEntries(columns.map((c) => [c.id, c.initialWidth]))
  )
  const dragState = useRef<{ columnId: string; startX: number; startWidth: number } | null>(null)

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!dragState.current) return
    const delta = e.clientX - dragState.current.startX
    setWidths((prev) => ({ ...prev, [dragState.current!.columnId]: Math.max(60, dragState.current!.startWidth + delta) }))
  }, [])

  const handlePointerUp = useCallback(() => {
    dragState.current = null
    window.removeEventListener('pointermove', handlePointerMove)
    window.removeEventListener('pointerup', handlePointerUp)
  }, [handlePointerMove])

  const startResize = (columnId: string, e: React.PointerEvent) => {
    dragState.current = { columnId, startX: e.clientX, startWidth: widths[columnId] }
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <table className="w-full table-fixed text-left text-sm">
        <thead>
          <tr className="border-b border-gray-800 text-xs font-medium uppercase tracking-wide text-gray-500">
            {columns.map((column) => {
              const isSorted = column.id === sortedColumnId
              return (
                <th key={column.id} scope="col" className="group relative px-4 py-2.5" style={{ width: widths[column.id] }}>
                  <button
                    type="button"
                    onClick={() => onSort?.(column.id)}
                    aria-label={isSorted ? `Sort by ${column.label}, currently ${sortDirection}` : `Sort by ${column.label}`}
                    className="flex items-center gap-1 hover:text-gray-300"
                  >
                    {column.label}
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className={`size-3 ${isSorted ? 'text-gray-100' : 'text-gray-600'} ${isSorted && sortDirection === 'descending' ? 'rotate-180' : ''}`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.53 3.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06L9.25 5.81v8.69a.75.75 0 0 0 1.5 0V5.81l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {column.resizable !== false ? (
                    <span
                      aria-hidden="true"
                      onPointerDown={(e) => startResize(column.id, e)}
                      className="absolute right-0 top-0 h-full w-1 cursor-col-resize bg-transparent group-hover:bg-gray-700"
                    ></span>
                  ) : null}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className={cellIndex === 0 ? 'px-4 py-3 font-medium text-gray-100' : 'px-4 py-3 text-gray-400'}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
