export type PodcastEpisode = {
  title: string
  publishedDate: string
  durationSeconds: number
  artGradient: string
}

export type PodcastEpisodeRowVariant1Props = {
  episodes: PodcastEpisode[]
}

const formatDuration = (totalSeconds: number) => {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/**
 * Copy-and-own Tailwind component. Podcast episode list rows with art,
 * title/date, duration, play, and download — distinct from track-list-row,
 * which is a music-playback list with playing-state highlighting rather
 * than podcast episode metadata and a download action.
 */
export function PodcastEpisodeRow({ episodes }: PodcastEpisodeRowVariant1Props) {
  return (
    <ul className="flex w-full max-w-xl flex-col divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white">
      {episodes.map((episode) => (
        <li key={episode.title} className="flex items-center gap-3 px-4 py-3">
          <div className={`size-11 shrink-0 rounded-md ${episode.artGradient}`} aria-hidden="true" />

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-gray-900">{episode.title}</p>
            <p className="text-xs text-gray-500">
              {episode.publishedDate} · {formatDuration(episode.durationSeconds)}
            </p>
          </div>

          <button
            type="button"
            aria-label={`Play ${episode.title}`}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 size-4">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          </button>

          <button
            type="button"
            aria-label={`Download ${episode.title}`}
            className="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-900"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.75" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  )
}
