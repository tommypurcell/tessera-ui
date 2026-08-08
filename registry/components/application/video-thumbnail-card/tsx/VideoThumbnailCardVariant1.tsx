export type VideoThumbnailCardVariant1Props = {
  title: string
  channel: string
  thumbnailGradient: string
  durationSeconds: number
  views: number
  postedAgo: string
}

const formatDuration = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

const formatViews = (views: number) => {
  if (views >= 1_000_000) return `${(views / 1_000_000).toFixed(1)}M views`
  if (views >= 1_000) return `${(views / 1_000).toFixed(1)}K views`
  return `${views} views`
}

/**
 * Copy-and-own Tailwind component. Video discovery card with thumbnail,
 * duration badge, title, channel, and formatted view count — distinct
 * from image-gallery-lightbox, which is a full-screen image viewer with
 * navigation rather than a discovery/browse card.
 */
export function VideoThumbnailCard({ title, channel, thumbnailGradient, durationSeconds, views, postedAgo }: VideoThumbnailCardVariant1Props) {
  return (
    <div className="flex w-64 flex-col gap-2.5">
      <div className={`relative aspect-video w-full overflow-hidden rounded-md ${thumbnailGradient}`}>
        <span className="absolute right-1.5 bottom-1.5 rounded bg-black/70 px-1.5 py-0.5 text-[11px] font-medium text-white">
          {formatDuration(durationSeconds)}
        </span>
      </div>
      <div className="flex gap-2.5">
        <div aria-hidden="true" className="mt-0.5 size-8 shrink-0 rounded-full bg-gray-300" />
        <div className="min-w-0">
          <p className="line-clamp-2 text-sm font-medium text-gray-900">{title}</p>
          <p className="mt-0.5 truncate text-xs text-gray-500">{channel}</p>
          <p className="truncate text-xs text-gray-500">
            {formatViews(views)} · {postedAgo}
          </p>
        </div>
      </div>
    </div>
  )
}
