export type SlugInputVariant1DarkProps = {
  titleLabel: string
  title: string
  onTitleChange?: (value: string) => void
  slugLabel: string
  /** Domain/path prefix shown before the editable slug, e.g. "tessera.dev/blog/". */
  urlPrefix: string
  slug: string
  onSlugChange?: (value: string) => void
  helpText: string
}

/**
 * Copy-and-own Tailwind component. Title and editable URL slug field pair,
 * adapted for dark surfaces.
 */
export function SlugInput({
  titleLabel,
  title,
  onTitleChange,
  slugLabel,
  urlPrefix,
  slug,
  onSlugChange,
  helpText,
}: SlugInputVariant1DarkProps) {
  return (
    <div className="w-full max-w-sm">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="slug-title-dark" className="text-sm font-medium text-gray-300">
          {titleLabel}
        </label>
        <input
          id="slug-title-dark"
          type="text"
          value={title}
          onChange={(event) => onTitleChange?.(event.target.value)}
          className="rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        <label htmlFor="slug-value-dark" className="text-sm font-medium text-gray-300">
          {slugLabel}
        </label>
        <div className="flex items-center gap-1 rounded-md border border-blue-500 bg-gray-900 px-3 py-2 shadow-sm focus-within:border-blue-400">
          <span className="shrink-0 text-sm text-gray-500">{urlPrefix}</span>
          <input
            id="slug-value-dark"
            type="text"
            value={slug}
            onChange={(event) => onSlugChange?.(event.target.value)}
            className="min-w-0 flex-1 border-0 bg-transparent p-0 text-sm text-white focus:outline-none"
          />
        </div>
        <p className="text-xs text-gray-500">{helpText}</p>
      </div>
    </div>
  )
}
