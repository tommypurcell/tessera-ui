import { Fragment } from 'react'

export type DragHandleRowItem = {
  id: string
  label: string
}

export type DragHandleRowVariant1DarkProps = {
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
 * Copy-and-own Tailwind component. Reorderable list row adapted for dark
 * surfaces.
 */
export function DragHandleRow({ items, dropIndicatorIndex }: DragHandleRowVariant1DarkProps) {
  return (
    <ul className="w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-2">
      {items.map((item, index) => (
        <Fragment key={item.id}>
          {dropIndicatorIndex === index && (
            <li aria-hidden="true" className="mx-2 h-0.5 rounded-full bg-blue-500" />
          )}
          <li className="flex items-center gap-2 rounded-lg px-2 py-2">
            <button
              type="button"
              className="cursor-grab touch-none rounded p-1 text-gray-500 hover:bg-gray-800 hover:text-gray-300"
              aria-label={`Reorder ${item.label}`}
            >
              <GripIcon />
            </button>
            <span className="text-sm text-white">{item.label}</span>
          </li>
        </Fragment>
      ))}
    </ul>
  )
}
