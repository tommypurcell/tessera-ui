import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type FieldArrayEditorVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function FieldArrayEditorVariant1Dark({
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
}: FieldArrayEditorVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-md">
      <label className="mb-1.5 block text-sm font-medium text-gray-300">Team member emails</label>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Drag to reorder" className="flex size-8 shrink-0 cursor-grab items-center justify-center text-gray-600 hover:text-gray-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
          <input type="email" defaultValue="priya@acme.com" className="h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 text-sm text-white shadow-sm focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100" />
          <button type="button" aria-label="Remove" className="flex size-8 shrink-0 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-white/5 hover:text-red-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" aria-label="Drag to reorder" className="flex size-8 shrink-0 cursor-grab items-center justify-center text-gray-600 hover:text-gray-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
          <input type="email" defaultValue="dev-team@acme.com" className="h-10 w-full rounded-md border border-gray-700 bg-gray-900 px-3 text-sm text-white shadow-sm focus:border-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-100" />
          <button type="button" aria-label="Remove" className="flex size-8 shrink-0 items-center justify-center rounded-md text-gray-500 transition-colors hover:bg-white/5 hover:text-red-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" aria-label="Drag to reorder" className="flex size-8 shrink-0 cursor-grab items-center justify-center text-gray-600 hover:text-gray-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
            </svg>
          </button>
          <div className="relative w-full">
            <input type="email" defaultValue="not-an-email" aria-invalid="true" aria-describedby="row3-error-dark" className="h-10 w-full rounded-md border border-red-800 bg-gray-900 px-3 text-sm text-white shadow-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-500" />
            <p id="row3-error-dark" className="mt-1 text-xs text-red-400">Enter a valid email address.</p>
          </div>
          <button type="button" aria-label="Remove" className="flex size-8 shrink-0 items-center justify-center self-start rounded-md text-gray-500 transition-colors hover:bg-white/5 hover:text-red-400">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <button type="button" className="mt-3 flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-white">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add another email
      </button>
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
