import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type QueueListVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  /** Replaces the component's default content while preserving its outer container. */
  children?: ReactNode
  /** Transforms the default content without copying the component's internal markup. */
  renderContent?: (defaultContent: ReactNode) => ReactNode
  /** Renders immediately before the main content. */
  before?: ReactNode
  /** Renders immediately after the main content. */
  after?: ReactNode
  /** Selects an application state. The default state preserves the original component UI. */
  state?: TesseraComponentState
  loadingContent?: ReactNode
  emptyContent?: ReactNode
  errorContent?: ReactNode
}

/**
 * Copy-and-own Tailwind component with content slots and explicit application states.
 * Omitting the optional props preserves the original markup and visual design.
 */
export function QueueListVariant1Dark({
  className,
  children,
  renderContent,
  before,
  after,
  state = 'default',
  loadingContent,
  emptyContent,
  errorContent,
  ...props
}: QueueListVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">Now playing</p>
      <div className="mt-2 flex items-center gap-3 rounded-md bg-white/5 p-2">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-blue-500 to-violet-600">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="size-3.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-white">Midnight Static</p>
          <p className="truncate text-xs text-gray-400">Nova Field</p>
        </div>
        <div className="h-4 w-16">
          <svg viewBox="0 0 40 16" className="size-full">
            <rect x="0" y="6" width="3" height="10" rx="1" className="fill-blue-400"><animate attributeName="height" values="10;4;10" dur="0.9s" repeatCount="indefinite" /></rect>
            <rect x="6" y="2" width="3" height="14" rx="1" className="fill-blue-400"><animate attributeName="height" values="14;6;14" dur="1.1s" repeatCount="indefinite" /></rect>
            <rect x="12" y="4" width="3" height="12" rx="1" className="fill-blue-400"><animate attributeName="height" values="12;3;12" dur="0.8s" repeatCount="indefinite" /></rect>
            <rect x="18" y="0" width="3" height="16" rx="1" className="fill-blue-400"><animate attributeName="height" values="16;7;16" dur="1s" repeatCount="indefinite" /></rect>
          </svg>
        </div>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-gray-500">Up next</p>
      <ol className="mt-2 space-y-1">
        <li className="group flex items-center gap-2 rounded-md p-2 hover:bg-white/5">
          <button type="button" aria-label="Drag to reorder" className="shrink-0 cursor-grab text-gray-600 hover:text-gray-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-700"></span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">Glass Horizon</p>
            <p className="truncate text-xs text-gray-400">Coral Drift</p>
          </div>
          <span className="shrink-0 text-xs text-gray-500">3:24</span>
          <button type="button" aria-label="Remove from queue" className="shrink-0 rounded p-1 text-gray-500 opacity-0 transition-opacity hover:bg-white/10 hover:text-gray-300 group-hover:opacity-100">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </li>

        <li className="group flex items-center gap-2 rounded-md p-2 hover:bg-white/5">
          <button type="button" aria-label="Drag to reorder" className="shrink-0 cursor-grab text-gray-600 hover:text-gray-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-amber-500 to-orange-700"></span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">Paper Lanterns</p>
            <p className="truncate text-xs text-gray-400">June Static</p>
          </div>
          <span className="shrink-0 text-xs text-gray-500">4:02</span>
          <button type="button" aria-label="Remove from queue" className="shrink-0 rounded p-1 text-gray-500 opacity-0 transition-opacity hover:bg-white/10 hover:text-gray-300 group-hover:opacity-100">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </li>

        <li className="group flex items-center gap-2 rounded-md p-2 hover:bg-white/5">
          <button type="button" aria-label="Drag to reorder" className="shrink-0 cursor-grab text-gray-600 hover:text-gray-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
          <span className="flex size-9 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-rose-500 to-pink-700"></span>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">Low Tide</p>
            <p className="truncate text-xs text-gray-400">Nova Field</p>
          </div>
          <span className="shrink-0 text-xs text-gray-500">2:51</span>
          <button type="button" aria-label="Remove from queue" className="shrink-0 rounded p-1 text-gray-500 opacity-0 transition-opacity hover:bg-white/10 hover:text-gray-300 group-hover:opacity-100">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </li>
      </ol>
    </div>
    </>
  )
  const content =
    children ??
    (state === 'loading'
      ? (loadingContent ?? <span role="status">Loading…</span>)
      : state === 'empty'
        ? (emptyContent ?? <span>No content available.</span>)
        : state === 'error'
          ? (errorContent ?? <span role="alert">Something went wrong.</span>)
          : renderContent
            ? renderContent(defaultContent)
            : defaultContent)

  return (
    <div className={className} aria-busy={state === 'loading' || undefined} {...props}>
      {before}
      {content}
      {after}
    </div>
  )
}
