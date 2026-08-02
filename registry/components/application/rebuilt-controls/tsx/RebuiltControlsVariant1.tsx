import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RebuiltControlsVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function RebuiltControlsVariant1({
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
}: RebuiltControlsVariant1Props) {
  const defaultContent = (
    <>
      <div className="grid max-w-2xl gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white">
                Open command menu
              </button>
              <button
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Select date
              </button>
              <button
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Upload files
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <input
                aria-label="Search"
                placeholder="Search"
                className="h-10 rounded-lg border border-slate-300 px-3 text-sm"
              />
              <input
                aria-label="Date"
                type="date"
                className="h-10 rounded-lg border border-slate-300 px-3 text-sm"
              />
              <div
                className="col-span-2 flex h-10 items-center gap-2 rounded-lg border border-slate-300 px-3 text-sm text-slate-500"
              >
                <span className="rounded bg-blue-50 px-2 py-1 text-xs text-blue-700">Design ×</span
                ><span>Add filter…</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-emerald-700">Ready</span
              ><span>Keyboard-first, focus-visible, responsive</span>
            </div>
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
