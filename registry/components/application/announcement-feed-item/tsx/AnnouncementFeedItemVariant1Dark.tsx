import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AnnouncementFeedItemVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AnnouncementFeedItemVariant1Dark({
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
}: AnnouncementFeedItemVariant1DarkProps) {
  const defaultContent = (
    <>
      <article className="rounded-lg border border-amber-500/25 bg-amber-500/5 p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
                  alt="Priya Patel"
                  className="size-9 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-white">Priya Patel</p>
                  <p className="text-xs text-gray-400">Product · 2 days ago</p>
                </div>
              </div>
      
              <span className="flex shrink-0 items-center gap-1 rounded-full bg-amber-500/15 px-2 py-1 text-xs font-medium text-amber-300">
                <svg className="size-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.448a1 1 0 00-.363 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.367-2.448a1 1 0 00-1.176 0l-3.367 2.448c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.363-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
                </svg>
                Pinned
              </span>
            </div>
      
            <h2 className="mt-3 text-sm font-semibold text-white">Introducing the new component playground</h2>
            <p className="mt-1 text-sm text-gray-300">
              You can now preview any component's props live and copy the generated markup directly — no more editing HTML by hand to test a variant.
            </p>
      
            <div className="mt-4 flex items-center gap-4 border-t border-amber-500/20 pt-3">
              <button type="button" className="flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-gray-200">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
                42
              </button>
      
              <button type="button" className="flex items-center gap-1.5 text-sm text-gray-400 transition hover:text-gray-200">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.076-.163-3.02-.462L3 21l1.607-3.822C3.59 15.867 3 14.482 3 13c0-4.418 4.03-8 9-8s9 3.582 9 7z" />
                </svg>
                8
              </button>
            </div>
          </article>
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
