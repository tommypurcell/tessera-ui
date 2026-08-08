const rows = [
  { cohort: 'Jun 30', values: ['100%', '58%', '44%', '37%', '33%'] },
  { cohort: 'Jul 7', values: ['100%', '61%', '46%', '39%', null] },
  { cohort: 'Jul 14', values: ['100%', '64%', '49%', null, null] },
  { cohort: 'Jul 21', values: ['100%', '67%', null, null, null] },
]

const cellShades = ['bg-indigo-500', 'bg-indigo-600', 'bg-indigo-700', 'bg-indigo-800', 'bg-indigo-900']
const cellTextShades = ['text-white', 'text-white', 'text-white', 'text-white', 'text-indigo-200']

export function CohortRetentionGridVariant1Dark() {
  return (
    <div>
      <div className="overflow-x-auto rounded-lg border border-gray-800 p-4">
        <table className="w-full border-separate border-spacing-1 text-center">
          <caption className="mb-3 text-left text-sm font-semibold text-white">Weekly cohort retention</caption>
          <thead>
            <tr>
              <th scope="col" className="w-24 text-left text-xs font-medium text-gray-400">
                Cohort
              </th>
              {['W0', 'W1', 'W2', 'W3', 'W4'].map((label) => (
                <th key={label} scope="col" className="text-xs font-medium text-gray-400">
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.cohort}>
                <th scope="row" className="text-left text-xs font-medium text-gray-300">
                  {row.cohort}
                </th>
                {row.values.map((value, index) =>
                  value ? (
                    <td key={index} className={`rounded-md px-3 py-2 text-xs font-medium ${cellShades[index]} ${cellTextShades[index]}`}>
                      {value}
                    </td>
                  ) : (
                    <td key={index} className="rounded-md bg-gray-800 px-3 py-2 text-xs font-medium text-gray-600">
                      &mdash;
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex items-center gap-2 text-xs text-gray-400">
        <span>Lower retention</span>
        <span className="flex gap-1">
          {['bg-indigo-900', 'bg-indigo-800', 'bg-indigo-700', 'bg-indigo-600', 'bg-indigo-500'].map((shade) => (
            <span key={shade} className={`size-3 rounded-sm ${shade}`} />
          ))}
        </span>
        <span>Higher retention</span>
      </div>
    </div>
  )
}
