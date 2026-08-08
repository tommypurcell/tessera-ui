const grades = [
  { letter: 'A', bg: 'bg-green-900/50', text: 'text-green-300' },
  { letter: 'B', bg: 'bg-lime-900/50', text: 'text-lime-300' },
  { letter: 'C', bg: 'bg-amber-900/50', text: 'text-amber-300' },
  { letter: 'D', bg: 'bg-orange-900/50', text: 'text-orange-300' },
  { letter: 'F', bg: 'bg-red-900/50', text: 'text-red-300' },
]

export function GradeBadgeScaleVariant1Dark() {
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
