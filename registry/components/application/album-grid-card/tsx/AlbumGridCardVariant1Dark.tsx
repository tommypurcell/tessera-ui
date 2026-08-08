export type AlbumGridCardVariant1Props = {
  title: string
  artist: string
  coverGradient: string
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the album
 * grid card.
 */
export function AlbumGridCard({ title, artist, coverGradient }: AlbumGridCardVariant1Props) {
  return (
    <div className="group flex w-40 flex-col gap-2">
      <div className={`relative aspect-square w-full overflow-hidden rounded-md ${coverGradient}`}>
        <button
          type="button"
          aria-label={`Play ${title} by ${artist}`}
          className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-150 group-hover:bg-black/40 group-hover:opacity-100 focus-visible:bg-black/40 focus-visible:opacity-100"
        >
          <span className="flex size-11 items-center justify-center rounded-full bg-gray-100 text-gray-900 shadow-lg">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 size-5">
              <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
      </div>
      <div className="min-w-0">
        <p className="truncate text-sm font-medium text-gray-100">{title}</p>
        <p className="truncate text-xs text-gray-500">{artist}</p>
      </div>
    </div>
  )
}
