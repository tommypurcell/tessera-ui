import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type EventCountdownHeroVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function EventCountdownHeroVariant1({
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
}: EventCountdownHeroVariant1Props) {
  const defaultContent = (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-gradient-to-br from-indigo-600 to-blue-600 p-8 text-center text-white">
            <p className="text-xs font-semibold tracking-wide text-indigo-200 uppercase">Save the date</p>
            <h1 className="mt-1 text-2xl font-bold">Tessera Conf 2026</h1>
            <p className="mt-1 text-sm text-indigo-100">March 14 · San Francisco, CA</p>
      
            <div id="event-hero-1" className="mt-6 grid grid-cols-4 gap-2">
              <div className="flex flex-col items-center gap-1 rounded-lg bg-white/10 py-3">
                <span className="js-days font-mono text-2xl font-bold tabular-nums">18</span>
                <span className="text-[10px] font-medium tracking-wide text-indigo-100 uppercase">Days</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-lg bg-white/10 py-3">
                <span className="js-hours font-mono text-2xl font-bold tabular-nums">06</span>
                <span className="text-[10px] font-medium tracking-wide text-indigo-100 uppercase">Hrs</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-lg bg-white/10 py-3">
                <span className="js-mins font-mono text-2xl font-bold tabular-nums">42</span>
                <span className="text-[10px] font-medium tracking-wide text-indigo-100 uppercase">Min</span>
              </div>
              <div className="flex flex-col items-center gap-1 rounded-lg bg-white/10 py-3">
                <span className="js-secs font-mono text-2xl font-bold tabular-nums">15</span>
                <span className="text-[10px] font-medium tracking-wide text-indigo-100 uppercase">Sec</span>
              </div>
            </div>
      
            <button
              type="button"
              className="mt-6 w-full rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-indigo-700 transition hover:bg-indigo-50"
            >
              RSVP now
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
