const rows = [
  { cohort: 'May', values: ['100%', '71%', '54%'] },
  { cohort: 'Jun', values: ['100%', '74%', null] },
  { cohort: 'Jul', values: ['100%', null, null] },
]

const cellShades = ['bg-emerald-600', 'bg-emerald-400', 'bg-emerald-200']
const cellTextShades = ['text-white', 'text-white', 'text-gray-900']

export function CohortRetentionGridVariant2() {
  return (
    <div className="rounded-lg border border-gray-200 p-4">
      <h3 className="text-sm font-semibold text-gray-900">Monthly retention</h3>
      <table className="mt-3 w-full border-separate border-spacing-1 text-center">
        <thead>
          <tr>
            <th scope="col" className="w-16 text-left text-xs font-medium text-gray-500">
              Cohort
            </th>
            {['M0', 'M1', 'M2'].map((label) => (
              <th key={label} scope="col" className="text-xs font-medium text-gray-500">
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.cohort}>
              <th scope="row" className="text-left text-xs font-medium text-gray-700">
                {row.cohort}
              </th>
              {row.values.map((value, index) =>
                value ? (
                  <td key={index} className={`rounded-md px-3 py-2 text-xs font-medium ${cellShades[index]} ${cellTextShades[index]}`}>
                    {value}
                  </td>
                ) : (
                  <td key={index} className="rounded-md bg-gray-100 px-3 py-2 text-xs font-medium text-gray-400">
                    &mdash;
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
