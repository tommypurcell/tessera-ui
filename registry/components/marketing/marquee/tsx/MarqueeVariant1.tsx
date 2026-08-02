import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type MarqueeVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function MarqueeVariant1({
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
}: MarqueeVariant1Props) {
  const defaultContent = (
    <>
      <section className="ribbon" aria-label="Product signals">
            <div className="track">
              <div className="items">
                <span className="item"><span className="dot"></span><strong>94% faster</strong> component discovery</span>
                <a className="item" href="#"><span className="dot"></span><strong>Zero guesswork</strong> installation notes</a>
                <span className="item"><span className="dot"></span><strong>Built for teams</strong> that ship weekly</span>
                <a className="item" href="#"><span className="dot"></span><strong>One registry</strong> for every surface</a>
              </div>
              <div className="items" aria-hidden="true">
                <span className="item"><span className="dot"></span><strong>94% faster</strong> component discovery</span>
                <span className="item"><span className="dot"></span><strong>Zero guesswork</strong> installation notes</span>
                <span className="item"><span className="dot"></span><strong>Built for teams</strong> that ship weekly</span>
                <span className="item"><span className="dot"></span><strong>One registry</strong> for every surface</span>
              </div>
            </div>
          </section>
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
