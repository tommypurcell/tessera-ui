export type MatrixQuestionRow = {
  id: string
  statement: string
  value: string | null
  onChange?: (value: string) => void
}

export type MatrixQuestionGridVariant1DarkProps = {
  title: string
  columns: string[]
  rows: MatrixQuestionRow[]
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Survey matrix question: a
 * table where rows are statements and columns are a shared response scale,
 * each row wired as an independent native radio group.
 */
export function MatrixQuestionGrid({ title, columns, rows, className }: MatrixQuestionGridVariant1DarkProps) {
  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-900 p-5 ${className ?? ''}`}>
      <p className="text-sm font-semibold text-gray-100">{title}</p>

      <table className="mt-4 w-full border-collapse text-sm">
        <thead>
          <tr>
            <th scope="col" className="w-2/5 pb-2 text-left text-xs font-medium text-gray-500"></th>
            {columns.map((column) => (
              <th key={column} scope="col" className="pb-2 text-center text-xs font-medium text-gray-500">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="radiogroup" aria-label="Matrix survey responses">
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-gray-800">
              <th scope="row" className="py-3 pr-3 text-left text-sm font-normal text-gray-300">
                {row.statement}
              </th>
              {columns.map((column) => (
                <td key={column} className="py-3 text-center">
                  <input
                    type="radio"
                    name={row.id}
                    checked={row.value === column}
                    onChange={() => row.onChange?.(column)}
                    aria-label={`${row.statement}: ${column}`}
                    className="size-4 border-gray-700 bg-gray-800 text-gray-100 focus:ring-gray-100"
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
