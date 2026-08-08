const rows = [
  { cohort: 'Jun 30', values: ['100%', '58%', '44%', '37%', '33%'] },
  { cohort: 'Jul 7', values: ['100%', '61%', '46%', '39%', null] },
  { cohort: 'Jul 14', values: ['100%', '64%', '49%', null, null] },
  { cohort: 'Jul 21', values: ['100%', '67%', null, null, null] },
]

const cellShades = ['bg-indigo-600', 'bg-indigo-500', 'bg-indigo-400', 'bg-indigo-300', 'bg-indigo-200']
const cellTextShades = ['text-white', 'text-white', 'text-white', 'text-gray-900', 'text-gray-900']

export function CohortRetentionGridVariant1() {
  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-gray-200 p-4">
        <table className="w-full border-separate border-spacing-1 text-center">
          <caption className="mb-3 text-left text-sm font-semibold text-gray-900">Weekly cohort retention</caption>
          <thead>
            <tr>
              <th scope="col" className="w-24 text-left text-xs font-medium text-gray-500">
                Cohort
              </th>
              {['W0', 'W1', 'W2', 'W3', 'W4'].map((label) => (
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

      <div className="mt-3 flex items-center gap-2 text-xs text-gray-500">
        <span>Lower retention</span>
        <span className="flex gap-1">
          {['bg-indigo-200', 'bg-indigo-300', 'bg-indigo-400', 'bg-indigo-500', 'bg-indigo-600'].map((shade) => (
            <span key={shade} className={`size-3 rounded-sm ${shade}`} />
          ))}
        </span>
        <span>Higher retention</span>
      </div>
    </div>
  )
}
