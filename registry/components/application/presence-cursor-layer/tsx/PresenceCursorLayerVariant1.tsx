import type { ReactNode } from 'react'

export type PresenceCursor = {
  id: string
  name: string
  /** Percentage position (0-100) within the canvas. */
  x: number
  y: number
  color: string
  /** Optional selection rectangle, in pixels relative to the cursor tip. */
  selection?: { width: number; height: number }
}

export type PresenceCursorLayerVariant1Props = {
  cursors: PresenceCursor[]
  canvasLabel?: string
  className?: string
  children?: ReactNode
}

/**
 * Copy-and-own Tailwind component. Overlays named, colored cursor markers (with an
 * optional selection box) on top of a shared canvas area, for live multiplayer presence.
 */
export function PresenceCursorLayerVariant1({
  cursors,
  canvasLabel = 'Shared canvas',
  className,
  children,
}: PresenceCursorLayerVariant1Props) {
  return (
    <div
      className={`relative h-72 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 ${className ?? ''}`}
    >
      <div className="absolute inset-6 rounded-lg border border-dashed border-gray-300 bg-white p-4">
        {children ?? <p className="text-xs font-medium text-gray-400">{canvasLabel}</p>}
      </div>

      {cursors.map((cursor) => (
        <div
          key={cursor.id}
          className="pointer-events-none absolute -translate-x-1 -translate-y-1"
          style={{ left: `${cursor.x}%`, top: `${cursor.y}%` }}
          role="img"
          aria-label={
            cursor.selection ? `${cursor.name}'s cursor, selecting a region` : `${cursor.name}'s cursor`
          }
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill={cursor.color}
            className="size-5 drop-shadow"
          >
            <path d="M4.5 3.5 19 10.5l-6.2 1.7L10.5 19 4.5 3.5Z" />
          </svg>
          <span
            className="ml-4 -mt-1 inline-block rounded-md px-2 py-0.5 text-xs font-medium text-white shadow-sm"
            style={{ backgroundColor: cursor.color }}
          >
            {cursor.name}
          </span>
          {cursor.selection ? (
            <div
              className="absolute left-4 top-5 rounded-sm border-2"
              style={{
                width: cursor.selection.width,
                height: cursor.selection.height,
                borderColor: cursor.color,
                backgroundColor: cursor.color,
                opacity: 0.15,
              }}
            />
          ) : null}
        </div>
      ))}

      <p className="sr-only" role="status">
        {cursors.length} collaborator{cursors.length === 1 ? '' : 's'} active:{' '}
        {cursors.map((c) => c.name).join(', ')}.
      </p>
    </div>
  )
}
