import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type LogoCloudsVariant5Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function LogoCloudsVariant5({
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
}: LogoCloudsVariant5Props) {
  const defaultContent = (
    <>
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
            <p className="text-center text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              Trusted by teams shipping fast
            </p>
            <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Northlane</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Vaultform</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Ridgeline</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Circuiton</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Fernwell</span>
              <span className="text-center text-lg font-bold tracking-tight text-gray-400 transition hover:text-gray-950">Basecove</span>
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
