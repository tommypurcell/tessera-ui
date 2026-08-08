const rows = [
  { title: 'Midterm Essay', letter: 'A', percent: '96%', bg: 'bg-green-900/40', text: 'text-green-300', sub: 'text-green-400' },
  { title: 'Lab Report 3', letter: 'B', percent: '85%', bg: 'bg-lime-900/40', text: 'text-lime-300', sub: 'text-lime-400' },
  { title: 'Problem Set 5', letter: 'C', percent: '74%', bg: 'bg-amber-900/40', text: 'text-amber-300', sub: 'text-amber-400' },
  { title: 'Final Project', letter: 'F', percent: '52%', bg: 'bg-red-900/40', text: 'text-red-300', sub: 'text-red-400' },
]

export function GradeBadgeScaleVariant2Dark() {
  return (
    <ul className="flex flex-col divide-y divide-gray-800 rounded-lg border border-gray-800">
      {rows.map((row) => (
        <li key={row.title} className="flex items-center justify-between gap-3 p-3">
          <p className="text-sm font-medium text-white">{row.title}</p>
          <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${row.bg} ${row.text}`}>
            {row.letter} <span className={`font-normal ${row.sub}`}>{row.percent}</span>
          </span>
        </li>
      ))}
    </ul>
  )
}
