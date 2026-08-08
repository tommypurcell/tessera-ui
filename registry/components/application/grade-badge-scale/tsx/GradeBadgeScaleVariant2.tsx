const rows = [
  { title: 'Midterm Essay', letter: 'A', percent: '96%', bg: 'bg-green-50', text: 'text-green-700', sub: 'text-green-600' },
  { title: 'Lab Report 3', letter: 'B', percent: '85%', bg: 'bg-lime-50', text: 'text-lime-700', sub: 'text-lime-600' },
  { title: 'Problem Set 5', letter: 'C', percent: '74%', bg: 'bg-amber-50', text: 'text-amber-700', sub: 'text-amber-600' },
  { title: 'Final Project', letter: 'F', percent: '52%', bg: 'bg-red-50', text: 'text-red-700', sub: 'text-red-600' },
]

export function GradeBadgeScaleVariant2() {
  return (
    <ul className="flex flex-col divide-y divide-gray-200 rounded-lg border border-gray-200">
      {rows.map((row) => (
        <li key={row.title} className="flex items-center justify-between gap-3 p-3">
          <p className="text-sm font-medium text-gray-900">{row.title}</p>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${row.bg} ${row.text}`}>
            {row.letter} <span className={`font-normal ${row.sub}`}>{row.percent}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
