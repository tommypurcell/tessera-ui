export type MatrixQuestionRow = {
  id: string
  statement: string
  value: string | null
  onChange?: (value: string) => void
}

export type MatrixQuestionGridVariant1Props = {
  title: string
  columns: string[]
  rows: MatrixQuestionRow[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Survey matrix question: a table where
 * rows are statements and columns are a shared response scale (e.g. a
 * Likert scale), each row wired as an independent native radio group.
 * Distinct from Notification Preferences Grid, which pairs channels against
 * event types with checkboxes for independent multi-select toggles, not a
 * single-choice rating scale shared across statements.
 */
export function MatrixQuestionGrid({ title, columns, rows, className }: MatrixQuestionGridVariant1Props) {
  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 ${className ?? ''}`}>
      <p className="text-sm font-semibold text-gray-900">{title}</p>

      <table className="mt-4 w-full border-collapse text-sm">
        <thead>
          <tr>
            <th scope="col" className="w-2/5 pb-2 text-left text-xs font-medium text-gray-400"></th>
            {columns.map((column) => (
              <th key={column} scope="col" className="pb-2 text-center text-xs font-medium text-gray-400">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody role="radiogroup" aria-label="Matrix survey responses">
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-gray-100">
              <th scope="row" className="py-3 pr-3 text-left text-sm font-normal text-gray-700">
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
                    className="size-4 border-gray-300 text-gray-900 focus:ring-gray-900"
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
