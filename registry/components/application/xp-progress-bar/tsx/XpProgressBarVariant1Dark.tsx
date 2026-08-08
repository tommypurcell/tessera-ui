export type XpProgressBarVariant1DarkProps = {
  level: number
  currentXp: number
  xpToNextLevel: number
  xpRemainingLabel: string
}

/**
 * Copy-and-own Tailwind component. Level badge and XP progress bar, adapted
 * for dark surfaces.
 */
export function XpProgressBar({
  level,
  currentXp,
  xpToNextLevel,
  xpRemainingLabel,
}: XpProgressBarVariant1DarkProps) {
  const percent = Math.min(100, Math.round((currentXp / xpToNextLevel) * 100))

  return (
    <div className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-4">
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-purple-500/15 text-sm font-bold text-purple-300">
          {level}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between">
            <p className="text-sm font-semibold text-white">Level {level}</p>
            <p className="text-xs text-gray-400">
              {currentXp.toLocaleString()} / {xpToNextLevel.toLocaleString()} XP
            </p>
          </div>
          <div
            role="progressbar"
            aria-label={`Progress to level ${level + 1}`}
            aria-valuenow={currentXp}
            aria-valuemin={0}
            aria-valuemax={xpToNextLevel}
            className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-gray-800"
          >
            <div
              className="h-full rounded-full bg-gradient-to-r from-purple-500 to-purple-400"
              style={{ width: `${percent}%` }}
            />
          </div>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-500">{xpRemainingLabel}</p>
    </div>
  )
}
