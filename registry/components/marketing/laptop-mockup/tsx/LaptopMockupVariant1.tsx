import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type LaptopMockupVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function LaptopMockupVariant1({
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
}: LaptopMockupVariant1Props) {
  const defaultContent = (
    <>
      <section className="scene" aria-label="Desktop product preview"><div className="glow" aria-hidden="true"></div><div className="laptop"><div className="screen"><i className="camera" aria-label="Front camera"></i><div className="window"><aside className="side"><small>Workspace</small><i className="nav"></i><i className="nav"></i><i className="nav"></i><i className="nav"></i></aside><article className="content"><small>Weekly momentum</small><h1>Where the work is moving.</h1><div className="chart" aria-label="Weekly progress chart"><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i><i className="bar"></i></div></article></div></div><div className="deck" aria-hidden="true"></div></div></section>
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
