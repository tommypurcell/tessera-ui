import type { ReactNode } from 'react'

export type CardVariant1DarkProps = {
  /** Image shown at the top of the card. Omit for a text-only card. */
  imageSrc?: string
  imageAlt?: string
  eyebrow?: string
  title: string
  description?: string
  authorName?: string
  authorAvatarSrc?: string
  actionLabel?: string
  onAction?: () => void
  className?: string
  children?: ReactNode
}

/**
 * Copy-and-own Tailwind component. Media, eyebrow/title/description, and an optional
 * author + action row, adapted for dark surfaces.
 */
export function CardVariant1Dark({
  imageSrc,
  imageAlt = '',
  eyebrow,
  title,
  description,
  authorName,
  authorAvatarSrc,
  actionLabel,
  onAction,
  className,
  children,
}: CardVariant1DarkProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt} className="h-40 w-full object-cover" />
      ) : null}

      <div className="p-5">
        {children ?? (
          <>
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-400">
                {eyebrow}
              </p>
            ) : null}

            <h3 className={`text-base font-semibold text-white ${eyebrow ? 'mt-1.5' : ''}`}>
              {title}
            </h3>

            {description ? (
              <p className="mt-1.5 text-sm leading-relaxed text-gray-400">{description}</p>
            ) : null}

            {authorName || actionLabel ? (
              <div className="mt-5 flex items-center justify-between">
                {authorName ? (
                  <div className="flex items-center gap-2">
                    {authorAvatarSrc ? (
                      <img src={authorAvatarSrc} alt="" className="size-7 rounded-full" />
                    ) : null}
                    <span className="text-xs font-medium text-gray-300">{authorName}</span>
                  </div>
                ) : (
                  <span />
                )}

                {actionLabel ? (
                  <button
                    type="button"
                    onClick={onAction}
                    className="rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800"
                  >
                    {actionLabel}
                  </button>
                ) : null}
              </div>
            ) : null}
          </>
        )}
      </div>
    </div>
  )
}
