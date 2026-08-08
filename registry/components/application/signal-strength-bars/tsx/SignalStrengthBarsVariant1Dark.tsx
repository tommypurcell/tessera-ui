export type SignalStrengthBarsVariant1Props = {
  strength: number
  maxBars?: number
  networkType: string
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the signal
 * strength bars.
 */
export function SignalStrengthBars({ strength, maxBars = 4, networkType }: SignalStrengthBarsVariant1Props) {
  const bars = Array.from({ length: maxBars }, (_, i) => i + 1)

  return (
    <div
      className="flex items-center gap-2"
      role="img"
      aria-label={`Signal strength: ${strength} of ${maxBars} bars, ${networkType}`}
    >
      <div className="flex items-end gap-0.5">
        {bars.map((bar) => (
          <span
            key={bar}
            aria-hidden="true"
            className={`w-1 rounded-sm ${bar <= strength ? 'bg-gray-100' : 'bg-gray-700'}`}
            style={{ height: `${6 + bar * 3}px` }}
          />
        ))}
      </div>
      <span className="text-xs font-medium text-gray-500">{networkType}</span>
    </div>
  )
}
