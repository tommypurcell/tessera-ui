export type WatchProgressBarVariant1Props = {
  title: string
  thumbnailGradient: string
  watchedMinutes: number
  totalMinutes: number
}

const formatDuration = (minutes: number) => {
  const m = Math.floor(minutes)
  const s = Math.round((minutes - m) * 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

/**
 * Copy-and-own Tailwind component. Video thumbnail with a resume-position
 * progress bar overlaid at its bottom edge — distinct from progress-bars,
 * which are standalone bars with no thumbnail/media context. Fill width
 * is watchedMinutes/totalMinutes, computed live.
 */
export function WatchProgressBar({ title, thumbnailGradient, watchedMinutes, totalMinutes }: WatchProgressBarVariant1Props) {
  const watchedPct = (watchedMinutes / totalMinutes) * 100

  return (
    <div className="flex w-56 flex-col gap-2">
      <div className={`relative aspect-video w-full overflow-hidden rounded-md ${thumbnailGradient}`}>
        <span className="absolute right-1.5 bottom-6 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white">
          {formatDuration(totalMinutes)}
        </span>
        <div
          className="absolute inset-x-0 bottom-0 h-1 bg-white/30"
          role="img"
          aria-label={`Watched ${formatDuration(watchedMinutes)} of ${formatDuration(totalMinutes)}`}
        >
          <div className="h-1 bg-red-600" style={{ width: `${watchedPct}%` }} />
        </div>
      </div>
      <p className="truncate text-sm font-medium text-gray-900">{title}</p>
    </div>
  )
}
