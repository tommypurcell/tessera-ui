import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type TranscriptRibbonVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function TranscriptRibbonVariant1({
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
}: TranscriptRibbonVariant1Props) {
  const defaultContent = (
    <>
      <section className="stage" aria-labelledby="transcript-title">
            <p className="eyebrow">Voice, in motion</p>
            <h1 id="transcript-title">Let the idea move first.</h1>
            <p className="ghost" aria-hidden="true">Start with a thought. Keep the detail. Let the next line find its shape.</p>
            <div className="ribbon-wrap" aria-label="A moving transcript">
              <div className="ribbon">
                <div className="track">
                  <div className="words"><span className="separator">●</span> Keep the thought moving <span>— the next step is already taking shape.</span><span className="separator">●</span> Keep the thought moving <span>— the next step is already taking shape.</span></div>
                  <div className="words" aria-hidden="true"><span className="separator">●</span> Keep the thought moving <span>— the next step is already taking shape.</span><span className="separator">●</span> Keep the thought moving <span>— the next step is already taking shape.</span></div>
                </div>
              </div>
            </div>
            <div className="recorder" aria-label="Voice activity" role="img"><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i></div>
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
