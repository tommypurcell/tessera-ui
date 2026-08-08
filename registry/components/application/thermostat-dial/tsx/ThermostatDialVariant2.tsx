import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ThermostatDialVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ThermostatDialVariant2({
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
}: ThermostatDialVariant2Props) {
  const defaultContent = (
    <>
      <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4">
            <div className="relative flex size-20 shrink-0 items-center justify-center">
              <svg className="size-20 -rotate-90" viewBox="0 0 90 90" role="img" aria-label="Current temperature 74 degrees, target 70 degrees">
                <circle cx="45" cy="45" r="40" fill="none" stroke="currentColor" strokeWidth="7" className="text-gray-100" />
                <circle
                  cx="45"
                  cy="45"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="7"
                  strokeLinecap="round"
                  stroke-dasharray="251.3"
                  stroke-dashoffset="163.4"
                  className="text-blue-500"
                />
              </svg>
              <p className="absolute font-mono text-lg font-semibold text-gray-900">74°</p>
            </div>
      
            <div className="min-w-0">
              <p className="text-sm font-semibold text-gray-900">Bedroom</p>
              <p className="text-xs text-blue-600">Cooling to 70°</p>
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
