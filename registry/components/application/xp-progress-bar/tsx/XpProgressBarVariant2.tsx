export type XpProgressBarVariant2Props = {
  newLevel: number
  /** XP carried over into the new level after the level-up overflow. */
  overflowXp: number
  xpToNextLevel: number
}

/**
 * Copy-and-own Tailwind component. Level-up celebration state showing the
 * new level badge and the overflow XP carried into the next bar — for the
 * moment right after a level-up event, distinct from the steady-state
 * progress bar in Variant 1.
 */
export function XpProgressBar({ newLevel, overflowXp, xpToNextLevel }: XpProgressBarVariant2Props) {
  const percent = Math.min(100, Math.round((overflowXp / xpToNextLevel) * 100))

  return (
    <div className="w-full max-w-sm rounded-xl border border-amber-200 bg-amber-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-5 text-amber-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M10 2a1 1 0 01.894.553l1.382 2.764 3.05.443a1 1 0 01.554 1.706l-2.207 2.152.521 3.038a1 1 0 01-1.451 1.054L10 12.347l-2.743 1.363a1 1 0 01-1.451-1.054l.521-3.038-2.207-2.152a1 1 0 01.554-1.706l3.05-.443L9.106 2.553A1 1 0 0110 2z" />
          </svg>
          <p className="text-sm font-semibold text-amber-900">Level up! Now level {newLevel}</p>
        </div>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
          {newLevel}
        </span>
      </div>

      <div className="mt-3">
        <div className="flex items-baseline justify-between">
          <p className="text-xs font-medium text-amber-800">Progress to level {newLevel + 1}</p>
          <p className="text-xs text-amber-700">
            {overflowXp.toLocaleString()} / {xpToNextLevel.toLocaleString()} XP
          </p>
        </div>
        <div
          role="progressbar"
          aria-label={`Progress to level ${newLevel + 1}`}
          aria-valuenow={overflowXp}
          aria-valuemin={0}
          aria-valuemax={xpToNextLevel}
          className="mt-1.5 h-2.5 w-full overflow-hidden rounded-full bg-amber-100"
        >
          <div className="h-full rounded-full bg-amber-500" style={{ width: `${percent}%` }} />
        </div>
      </div>
    </div>
  )
}
