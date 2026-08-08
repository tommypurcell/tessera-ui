import type { ReactNode } from 'react'

export type CardVariant1Props = {
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
 * author + action row — pass `children` to replace the body while keeping the card frame.
 */
export function CardVariant1({
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
}: CardVariant1Props) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`}
    >
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt} className="h-40 w-full object-cover" />
      ) : null}

      <div className="p-5">
        {children ?? (
          <>
            {eyebrow ? (
              <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                {eyebrow}
              </p>
            ) : null}

            <h3 className={`text-base font-semibold text-gray-900 ${eyebrow ? 'mt-1.5' : ''}`}>
              {title}
            </h3>

            {description ? (
              <p className="mt-1.5 text-sm leading-relaxed text-gray-600">{description}</p>
            ) : null}

            {authorName || actionLabel ? (
              <div className="mt-5 flex items-center justify-between">
                {authorName ? (
                  <div className="flex items-center gap-2">
                    {authorAvatarSrc ? (
                      <img src={authorAvatarSrc} alt="" className="size-7 rounded-full" />
                    ) : null}
                    <span className="text-xs font-medium text-gray-700">{authorName}</span>
                  </div>
                ) : (
                  <span />
                )}

                {actionLabel ? (
                  <button
                    type="button"
                    onClick={onAction}
                    className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50"
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
