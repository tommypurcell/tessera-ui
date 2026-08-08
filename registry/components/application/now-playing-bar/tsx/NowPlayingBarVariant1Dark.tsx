export type NowPlayingBarVariant1Props = {
  title: string
  artist: string
  artUrl: string
  elapsedSeconds: number
  durationSeconds: number
  isPlaying?: boolean
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the
 * bottom-docked now-playing bar.
 */
export function NowPlayingBar({ title, artist, artUrl, elapsedSeconds, durationSeconds, isPlaying = true }: NowPlayingBarVariant1Props) {
  const progressPct = (elapsedSeconds / durationSeconds) * 100

  return (
    <div className="flex w-full items-center gap-4 border-t border-gray-800 bg-gray-900 px-4 py-3">
      <img src={artUrl} alt="" className="size-12 shrink-0 rounded-md object-cover" />

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-gray-100">{title}</p>
            <p className="truncate text-xs text-gray-500">{artist}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1 text-[11px] tabular-nums text-gray-500">
            <span>{formatTime(elapsedSeconds)}</span>
            <span>/</span>
            <span>{formatTime(durationSeconds)}</span>
          </div>
        </div>
        <div
          className="mt-2 h-1 w-full rounded-full bg-gray-800"
          role="img"
          aria-label={`Playback progress: ${formatTime(elapsedSeconds)} of ${formatTime(durationSeconds)}`}
        >
          <div className="h-1 rounded-full bg-gray-100" style={{ width: `${progressPct}%` }} />
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-1">
        <button type="button" aria-label="Previous track" className="inline-flex size-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-800 hover:text-gray-100">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V7.19c0-1.44-1.555-2.342-2.805-1.628L12 9.53v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z" />
          </svg>
        </button>
        <button
          type="button"
          aria-label={isPlaying ? 'Pause' : 'Play'}
          className="inline-flex size-10 items-center justify-center rounded-full bg-gray-100 text-gray-900 hover:bg-white"
        >
          {isPlaying ? (
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path d="M6.75 5.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V5.25Z" />
            </svg>
          ) : (
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          )}
        </button>
        <button type="button" aria-label="Next track" className="inline-flex size-8 items-center justify-center rounded-full text-gray-500 hover:bg-gray-800 hover:text-gray-100">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
            <path d="M5.055 7.06c-1.25-.714-2.805.189-2.805 1.628v6.624c0 1.44 1.555 2.342 2.805 1.628L12 13.128v2.34c0 1.44 1.555 2.42 2.807 1.628l7.107-4.062c1.26-.72 1.26-2.536 0-3.256l-7.107-4.062c-1.252-.72-2.807.188-2.807 1.628v2.34L5.055 7.06Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
