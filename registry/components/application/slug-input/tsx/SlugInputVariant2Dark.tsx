export type SlugInputVariant2DarkProps = {
  titleLabel: string
  title: string
  onTitleChange?: (value: string) => void
  /** Domain/path prefix shown before the slug, e.g. "tessera.dev/". */
  urlPrefix: string
  slug: string
  onEditClick?: () => void
}

/**
 * Copy-and-own Tailwind component. Read-only slug preview with an Edit
 * trigger, adapted for dark surfaces.
 */
export function SlugInput({
  titleLabel,
  title,
  onTitleChange,
  urlPrefix,
  slug,
  onEditClick,
}: SlugInputVariant2DarkProps) {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-800 bg-gray-900 p-4">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="page-title-dark" className="text-sm font-medium text-gray-300">
          {titleLabel}
        </label>
        <input
          id="page-title-dark"
          type="text"
          value={title}
          onChange={(event) => onTitleChange?.(event.target.value)}
          className="rounded-md border border-gray-700 bg-gray-950 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 rounded-md border border-gray-700 bg-gray-950 px-3 py-2">
        <p className="min-w-0 truncate text-sm text-gray-400">
          <span className="text-gray-500">{urlPrefix}</span>
          <span className="font-medium text-white">{slug}</span>
        </p>
        <button
          type="button"
          onClick={onEditClick}
          className="inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-gray-300 hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
          Edit
        </button>
      </div>
    </div>
  )
}
