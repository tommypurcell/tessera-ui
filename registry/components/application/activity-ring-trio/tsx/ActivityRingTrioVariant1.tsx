import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ActivityRingTrioVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ActivityRingTrioVariant1({
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
}: ActivityRingTrioVariant1Props) {
  const defaultContent = (
    <>
      <svg className="size-40 -rotate-90" viewBox="0 0 160 160" role="img" aria-label="Move 420 of 500 calories, Exercise 28 of 30 minutes, Stand 9 of 12 hours">
            <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="14" className="text-red-100" />
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              stroke-dasharray="439.8"
              stroke-dashoffset="70.4"
              className="text-red-500"
            />
      
            <circle cx="80" cy="80" r="52" fill="none" stroke="currentColor" strokeWidth="14" className="text-green-100" />
            <circle
              cx="80"
              cy="80"
              r="52"
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              stroke-dasharray="326.7"
              stroke-dashoffset="21.8"
              className="text-green-500"
            />
      
            <circle cx="80" cy="80" r="34" fill="none" stroke="currentColor" strokeWidth="14" className="text-blue-100" />
            <circle
              cx="80"
              cy="80"
              r="34"
              fill="none"
              stroke="currentColor"
              strokeWidth="14"
              strokeLinecap="round"
              stroke-dasharray="213.6"
              stroke-dashoffset="53.4"
              className="text-blue-500"
            />
          </svg>
      
          <div className="flex w-full flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-gray-700">
                <span className="size-2.5 rounded-full bg-red-500"></span>
                Move
              </span>
              <span className="tabular-nums text-gray-500">420/500 cal</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-gray-700">
                <span className="size-2.5 rounded-full bg-green-500"></span>
                Exercise
              </span>
              <span className="tabular-nums text-gray-500">28/30 min</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-2 text-gray-700">
                <span className="size-2.5 rounded-full bg-blue-500"></span>
                Stand
              </span>
              <span className="tabular-nums text-gray-500">9/12 hr</span>
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
