import { Fragment } from 'react'

export type DragHandleRowItem = {
  id: string
  label: string
}

export type DragHandleRowVariant1Props = {
  items: DragHandleRowItem[]
  dropIndicatorIndex?: number
  onReorder?: (fromId: string, toIndex: number) => void
}

const GripIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="9" cy="6" r="1.4" />
    <circle cx="15" cy="6" r="1.4" />
    <circle cx="9" cy="12" r="1.4" />
    <circle cx="15" cy="12" r="1.4" />
    <circle cx="9" cy="18" r="1.4" />
    <circle cx="15" cy="18" r="1.4" />
  </svg>
)

/**
 * Copy-and-own Tailwind component. Generic reorderable list row with a grip
 * drag handle and a drop-indicator line showing the target position during a
 * drag. Distinct from application-queue-list, which is a media-player
 * "now playing" + "up next" pattern rather than a general-purpose reorderable
 * list.
 */
export function DragHandleRow({ items, dropIndicatorIndex }: DragHandleRowVariant1Props) {
  return (
    <ul className="w-full max-w-sm rounded-xl border border-gray-200 bg-white p-2">
      {items.map((item, index) => (
        <Fragment key={item.id}>
          {dropIndicatorIndex === index && (
            <li aria-hidden="true" className="mx-2 h-0.5 rounded-full bg-blue-500" />
          )}
          <li className="flex items-center gap-2 rounded-lg px-2 py-2">
            <button
              type="button"
              className="cursor-grab touch-none rounded p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              aria-label={`Reorder ${item.label}`}
            >
              <GripIcon />
            </button>
            <span className="text-sm text-gray-900">{item.label}</span>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}
