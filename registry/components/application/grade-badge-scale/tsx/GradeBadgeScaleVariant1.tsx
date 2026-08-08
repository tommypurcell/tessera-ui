const grades = [
  { letter: 'A', bg: 'bg-green-100', text: 'text-green-700' },
  { letter: 'B', bg: 'bg-lime-100', text: 'text-lime-700' },
  { letter: 'C', bg: 'bg-amber-100', text: 'text-amber-700' },
  { letter: 'D', bg: 'bg-orange-100', text: 'text-orange-700' },
  { letter: 'F', bg: 'bg-red-100', text: 'text-red-700' },
]

export function GradeBadgeScaleVariant1() {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {grades.map((grade) => (
        <span
          key={grade.letter}
          className={`inline-flex size-9 items-center justify-center rounded-full text-sm font-bold ${grade.bg} ${grade.text}`}
          title={`Grade: ${grade.letter}`}
        >
          {grade.letter}
        </span>
      ))}
    </div>
  )
}
