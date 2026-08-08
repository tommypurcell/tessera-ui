import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ShipmentTrackingMapVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ShipmentTrackingMapVariant1Dark({
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
}: ShipmentTrackingMapVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-lg overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-sm">
      <div className="relative h-56 bg-gray-800">
        <div className="absolute inset-0" style={{backgroundImage: 'linear-gradient(#374151 1px, transparent 1px), linear-gradient(90deg, #374151 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

        <svg viewBox="0 0 400 224" className="absolute inset-0 h-full w-full">
          <path d="M60,180 Q140,60 220,110 T340,50" fill="none" stroke="#60a5fa" strokeWidth="2.5" strokeDasharray="6 5" />
        </svg>

        <span className="absolute flex size-3 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gray-900 bg-gray-400 shadow" style={{left: '15%', top: '80%'}}></span>
        <span className="absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg ring-4 ring-blue-500/25" style={{left: '55%', top: '49%'}}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25h5.25l3 4.5m-2.25 6.75h-1.5m-7.5 0h-3.375c-.621 0-1.125-.504-1.125-1.125V17.25m0 0V6.375c0-.621.504-1.125 1.125-1.125H12" />
          </svg>
        </span>
        <span className="absolute flex size-3.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gray-900 bg-white shadow" style={{left: '85%', top: '22%'}}></span>
      </div>

      <div className="flex items-center justify-between border-t border-gray-700 px-4 py-3">
        <div>
          <p className="text-sm font-semibold text-white">Package #TS-48213</p>
          <p className="text-xs text-gray-400">In transit &middot; Kansas City distribution center</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-gray-400">Est. delivery</p>
          <p className="text-sm font-semibold text-blue-400">Tomorrow, 2:00 PM</p>
        </div>
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
