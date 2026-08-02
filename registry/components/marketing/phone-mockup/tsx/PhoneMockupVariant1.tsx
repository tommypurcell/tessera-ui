import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PhoneMockupVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PhoneMockupVariant1({
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
}: PhoneMockupVariant1Props) {
  const defaultContent = (
    <>
      <section className="scene" aria-label="Mobile product preview">
            <div className="halo" aria-hidden="true"></div>
            <div className="device">
              <div className="screen">
                <div className="wallpaper" aria-hidden="true"><i className="orb one"></i><i className="orb two"></i></div>
                <div className="status"><span>9:41</span><span className="icons">▮▮▮ ◒</span></div>
                <div className="island" aria-label="Front camera and sensor"><i className="lens"></i></div>
                <div className="card"><small>Daily focus</small><h1>Make room<br />for what matters.</h1><div className="card-row"><span>3 collaborators</span><div className="avatar-stack" aria-hidden="true"><i className="avatar"></i><i className="avatar"></i><i className="avatar"></i></div></div></div>
                <div className="home" aria-hidden="true"></div>
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
