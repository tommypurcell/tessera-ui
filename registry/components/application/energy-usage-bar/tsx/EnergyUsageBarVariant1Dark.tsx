import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type EnergyUsageBarVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function EnergyUsageBarVariant1Dark({
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
}: EnergyUsageBarVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm rounded-lg border border-gray-700 bg-gray-900 p-5 shadow-sm">
      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Current draw</p>
          <p className="mt-0.5 text-2xl font-semibold text-white">2,140<span className="ml-1 text-sm font-normal text-gray-400">W</span></p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Est. cost today</p>
          <p className="text-sm font-semibold text-amber-400">$4.82</p>
        </div>
      </div>

      <div className="relative mt-4 h-3 w-full rounded-full bg-gray-800">
        <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 to-red-500" style={{width: '62%'}}></div>
        <div className="absolute inset-y-0 flex items-center" style={{left: '82%'}}>
          <span className="h-5 w-0.5 rounded-full bg-white"></span>
        </div>
      </div>

      <div className="mt-1.5 flex items-center justify-between text-xs text-gray-400">
        <span>0 W</span>
        <span className="flex items-center gap-1 font-medium text-gray-300">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0-7 7m7-7 7 7" />
          </svg>
          Peak: 2,850 W (6:40 PM)
        </span>
        <span>3,450 W</span>
      </div>

      <div className="mt-4 flex items-center gap-1.5 rounded-md bg-amber-950 px-3 py-2 text-xs text-amber-300">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5 shrink-0">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
        </svg>
        Usage is trending above yesterday's average.
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
