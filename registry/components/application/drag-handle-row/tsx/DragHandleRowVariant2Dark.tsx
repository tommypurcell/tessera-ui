import { Fragment } from 'react'

export type DragHandleRowItem = {
  id: string
  label: string
}

export type DragHandleRowVariant2DarkProps = {
  restItems: DragHandleRowItem[]
  draggedItem: DragHandleRowItem
  dropIndicatorIndex: number
  helperText?: string
}

const GripIcon = ({ className }: { className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <circle cx="9" cy="6" r="1.4" />
    <circle cx="15" cy="6" r="1.4" />
    <circle cx="9" cy="12" r="1.4" />
    <circle cx="15" cy="12" r="1.4" />
    <circle cx="9" cy="18" r="1.4" />
    <circle cx="15" cy="18" r="1.4" />
  </svg>
)

/**
 * Copy-and-own Tailwind component. Actively-dragging reorderable list state
 * adapted for dark surfaces.
 */
export function DragHandleRowDragging({
  restItems,
  draggedItem,
  dropIndicatorIndex,
  helperText = 'Dragging — drop indicator shows the target position; the lifted row follows the pointer.',
}: DragHandleRowVariant2DarkProps) {
  return (
    <div className="w-full max-w-sm">
      <ul className="rounded-xl border border-gray-800 bg-gray-900 p-2">
        <li className="flex items-center gap-2 rounded-lg px-2 py-2 opacity-50">
          <span className="rounded p-1 text-gray-600">
            <GripIcon className="size-4" />
          </span>
          <span className="text-sm text-gray-500">{draggedItem.label}</span>
        </li>

        {restItems.map((item, index) => (
          <Fragment key={item.id}>
            {dropIndicatorIndex === index && (
              <li aria-hidden="true" className="mx-2 h-0.5 rounded-full bg-blue-500" />
            )}
            <li className="flex items-center gap-2 rounded-lg px-2 py-2">
              <span className="rounded p-1 text-gray-500">
                <GripIcon className="size-4" />
              </span>
              <span className="text-sm text-white">{item.label}</span>
            </li>
          </Fragment>
        ))}
      </ul>

      <div className="mt-4 w-full rotate-2 rounded-lg border border-gray-700 bg-gray-800 px-2 py-2 shadow-lg shadow-black/40">
        <div className="flex items-center gap-2">
          <span className="cursor-grabbing rounded p-1 text-gray-300">
            <GripIcon className="size-4" />
          </span>
          <span className="text-sm font-medium text-white">{draggedItem.label}</span>
        </div>
      </div>
      <p className="mt-2 text-xs text-gray-400">{helperText}</p>
    </div>
  )
}
