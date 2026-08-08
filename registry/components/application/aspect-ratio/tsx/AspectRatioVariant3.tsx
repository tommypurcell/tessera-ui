export function AspectRatioVariant3() {
  return (
    <div className="relative w-full overflow-hidden rounded-lg bg-gray-900" style={{ aspectRatio: '21 / 9' }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          aria-label="Play video"
          className="flex size-14 items-center justify-center rounded-full bg-white/90 text-gray-900 transition-colors hover:bg-white"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="ml-0.5 size-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  )
}
