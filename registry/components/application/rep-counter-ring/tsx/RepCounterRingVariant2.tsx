import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RepCounterRingVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RepCounterRingVariant2({
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
}: RepCounterRingVariant2Props) {
  const defaultContent = (
    <>
      <div id="rest-1" className="relative flex size-36 items-center justify-center">
            <svg className="size-36 -rotate-90" viewBox="0 0 140 140" role="img" aria-label="Rest timer, 25 seconds remaining">
              <circle cx="70" cy="70" r="60" fill="none" stroke="currentColor" strokeWidth="10" className="text-gray-100" />
              <circle
                className="js-ring text-teal-500 transition-[stroke-dashoffset] duration-1000 ease-linear"
                cx="70"
                cy="70"
                r="60"
                fill="none"
                stroke="currentColor"
                strokeWidth="10"
                strokeLinecap="round"
                stroke-dasharray="377"
                stroke-dashoffset="167.6"
              />
            </svg>
      
            <div className="absolute flex flex-col items-center">
              <p className="js-time font-mono text-3xl font-semibold text-gray-900">00:25</p>
              <p className="text-xs font-medium text-gray-400 uppercase">Resting</p>
            </div>
          </div>
      
          <p className="text-sm text-gray-500">Next: Set 3 of 4 · Barbell squat</p>
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
