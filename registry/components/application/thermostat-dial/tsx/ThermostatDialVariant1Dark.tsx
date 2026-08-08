import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ThermostatDialVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ThermostatDialVariant1Dark({
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
}: ThermostatDialVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="relative flex size-52 items-center justify-center">
            <svg className="size-52 -rotate-90" viewBox="0 0 180 180" role="img" aria-label="Current temperature 68 degrees, target 72 degrees">
              <circle cx="90" cy="90" r="80" fill="none" stroke="currentColor" strokeWidth="10" className="text-gray-800" />
              <circle
                cx="90"
                cy="90"
                r="80"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                stroke-dasharray="502.7"
                stroke-dashoffset="261.4"
                className="text-orange-400"
              />
            </svg>
      
            <div className="absolute flex flex-col items-center">
              <p className="font-mono text-5xl font-semibold text-white">68°</p>
              <p className="mt-1 text-xs font-medium text-gray-400">Target 72°</p>
            </div>
          </div>
      
          <div className="flex items-center gap-4">
            <button
              type="button"
              aria-label="Decrease target temperature"
              className="flex size-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:bg-gray-800"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" d="M5 12h14" />
              </svg>
            </button>
      
            <p className="text-sm font-medium text-gray-300">Heating to 72°</p>
      
            <button
              type="button"
              aria-label="Increase target temperature"
              className="flex size-10 items-center justify-center rounded-full border border-gray-700 text-gray-300 transition hover:bg-gray-800"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path strokeLinecap="round" d="M12 5v14M5 12h14" />
              </svg>
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
