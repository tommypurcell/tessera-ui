export type SlugInputVariant1Props = {
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
 * Copy-and-own Tailwind component. Title field paired with an always-
 * editable URL slug field beneath it. Pass your own slugify function to
 * derive `slug` from `title` changes — this component only renders the
 * two fields and their relationship, not the slugify logic itself.
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
}: SlugInputVariant1Props) {
  return (
    <div className="w-full max-w-sm">
      <div className="flex flex-col gap-1.5">
        <label htmlFor="slug-title" className="text-sm font-medium text-gray-700">
          {titleLabel}
        </label>
        <input
          id="slug-title"
          type="text"
          value={title}
          onChange={(event) => onTitleChange?.(event.target.value)}
          className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div className="mt-3 flex flex-col gap-1.5">
        <label htmlFor="slug-value" className="text-sm font-medium text-gray-700">
          {slugLabel}
        </label>
        <div className="flex items-center gap-1 rounded-md border border-blue-400 bg-white px-3 py-2 shadow-sm focus-within:border-blue-500">
          <span className="shrink-0 text-sm text-gray-400">{urlPrefix}</span>
          <input
            id="slug-value"
            type="text"
            value={slug}
            onChange={(event) => onSlugChange?.(event.target.value)}
            className="min-w-0 flex-1 border-0 p-0 text-sm text-gray-900 focus:outline-none"
          />
        </div>
        <p className="text-xs text-gray-500">{helpText}</p>
      </div>
    </div>
  )
}
