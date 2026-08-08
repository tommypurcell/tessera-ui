import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RepCounterRingVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RepCounterRingVariant1Dark({
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
}: RepCounterRingVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="relative flex size-44 items-center justify-center">
            <svg className="size-44 -rotate-90" viewBox="0 0 160 160" role="img" aria-label="8 of 12 reps completed">
              <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="12" className="text-gray-800" />
              <circle
                cx="80"
                cy="80"
                r="70"
                fill="none"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                stroke-dasharray="439.8"
                stroke-dashoffset="146.6"
                className="text-purple-400"
              />
            </svg>
      
            <div className="absolute flex flex-col items-center">
              <p className="font-mono text-4xl font-semibold text-white">8</p>
              <p className="text-xs font-medium text-gray-500">of 12 reps</p>
            </div>
          </div>
      
          <div className="text-center">
            <p className="text-sm font-semibold text-white">Set 2 of 4</p>
            <p className="text-xs text-gray-400">Barbell squat · 60kg</p>
          </div>
      
          <button
            type="button"
            className="w-full rounded-md bg-purple-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-purple-400"
          >
            Log rep
          </button>
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
