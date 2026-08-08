export type ComparisonStatPairSide = {
  label: string
  value: number
  displayValue: string
}

export type ComparisonStatPairVariant1Props = {
  title?: string
  left: ComparisonStatPairSide
  right: ComparisonStatPairSide
}

/**
 * Copy-and-own Tailwind component. Two side-by-side metrics with a "vs"
 * divider — the winning side is determined by comparing the real
 * numeric `value`s (not hand-picked) and highlighted with a ring and
 * label.
 */
export function ComparisonStatPair({ title, left, right }: ComparisonStatPairVariant1Props) {
  const winner = left.value === right.value ? null : left.value > right.value ? 'left' : 'right'

  return (
    <div className="flex flex-col gap-3 rounded-lg border border-gray-200 bg-white p-6">
      {title ? <h2 className="text-sm font-medium text-gray-900">{title}</h2> : null}

      <div className="flex items-center gap-4">
        <div
          className={`flex flex-1 flex-col items-center gap-1 rounded-lg border p-4 text-center ${
            winner === 'left' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <span className="text-xs font-medium text-gray-500">{left.label}</span>
          <span className="text-2xl font-semibold text-gray-900">{left.displayValue}</span>
          {winner === 'left' ? <span className="text-xs font-medium text-blue-600">Leading</span> : null}
        </div>

        <span className="shrink-0 text-sm font-medium text-gray-400">vs</span>

        <div
          className={`flex flex-1 flex-col items-center gap-1 rounded-lg border p-4 text-center ${
            winner === 'right' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
          }`}
        >
          <span className="text-xs font-medium text-gray-500">{right.label}</span>
          <span className="text-2xl font-semibold text-gray-900">{right.displayValue}</span>
          {winner === 'right' ? <span className="text-xs font-medium text-blue-600">Leading</span> : null}
        </div>
      </div>
    </div>
  )
}
