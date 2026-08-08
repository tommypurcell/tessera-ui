export type Track = {
  id: string
  title: string
  artist: string
  duration: string
  playing?: boolean
}

export type TrackListRowVariant1Props = {
  tracks: Track[]
  onSelect?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Track list where each row shows its index,
 * swapping to a play icon on hover (or a playing indicator when active),
 * title, artist, and duration. The currently playing track is highlighted.
 */
export function TrackListRow({ tracks, onSelect }: TrackListRowVariant1Props) {
  return (
    <ol className="flex flex-col">
      {tracks.map((track, index) => (
        <li
          key={track.id}
          onClick={() => onSelect?.(track.id)}
          className={`group flex cursor-pointer items-center gap-3 rounded-md px-2 py-2 ${track.playing ? 'bg-gray-50' : 'hover:bg-gray-50'}`}
        >
          <span className={`relative flex w-5 shrink-0 items-center justify-center text-sm ${track.playing ? 'text-blue-600' : 'text-gray-400'}`}>
            {track.playing ? (
              <svg aria-hidden="true" className="size-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" d="M6 5v14M12 5v14M18 5v14" />
              </svg>
            ) : (
              <>
                <span className="group-hover:hidden">{index + 1}</span>
                <svg aria-hidden="true" className="hidden size-4 text-gray-900 group-hover:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </>
            )}
          </span>
          <div className="min-w-0 flex-1">
            <p className={`truncate text-sm font-medium ${track.playing ? 'text-blue-600' : 'text-gray-900'}`}>{track.title}</p>
            <p className="truncate text-xs text-gray-500">{track.artist}</p>
          </div>
          <span className={`shrink-0 font-mono text-xs ${track.playing ? 'text-blue-600' : 'text-gray-400'}`}>{track.duration}</span>
        </li>
      ))}
    </ol>
  )
}
