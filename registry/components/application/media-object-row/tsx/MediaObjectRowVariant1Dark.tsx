import type { ReactNode } from 'react'

export type MediaObjectRowItem = {
  id: string
  imageSrc: string
  imageAlt?: string
  title: string
  meta: string
}

export type MediaObjectRowVariant1DarkProps = {
  items: MediaObjectRowItem[]
  /** Renders a trailing action for each row, e.g. a play or menu button. */
  renderAction?: (item: MediaObjectRowItem) => ReactNode
  className?: string
}

function PlayIcon() {
  return (
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3.5 translate-x-px">
      <path
        fillRule="evenodd"
        d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/**
 * Copy-and-own Tailwind component. Reusable media-row primitive adapted for dark surfaces
 * — thumbnail, title, meta line, and a trailing action slot.
 */
export function MediaObjectRowVariant1Dark({ items, renderAction, className }: MediaObjectRowVariant1DarkProps) {
  return (
    <ul className={`divide-y divide-gray-800 rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}>
      {items.map((item) => (
        <li key={item.id} className="flex items-center gap-3 p-4">
          <img src={item.imageSrc} alt={item.imageAlt ?? ''} className="size-12 shrink-0 rounded-lg object-cover" />

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">{item.title}</p>
            <p className="truncate text-xs text-gray-500">{item.meta}</p>
          </div>

          {renderAction ? (
            renderAction(item)
          ) : (
            <button
              type="button"
              aria-label={`Play ${item.title}`}
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-200"
            >
              <PlayIcon />
            </button>
          )}
        </li>
      ))}
    </ul>
  )
}
