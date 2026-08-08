import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type StackedAreaChartVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function StackedAreaChartVariant1({
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
}: StackedAreaChartVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-xl rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-900">Monthly signups by channel</p>
      </div>

      <svg viewBox="0 0 480 200" className="mt-4 w-full">
          <line x1="0" y1="0.0" x2="480" y2="0.0" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="66.7" x2="480" y2="66.7" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="133.3" x2="480" y2="133.3" stroke="#e5e7eb" strokeWidth="1" />
          <line x1="0" y1="200.0" x2="480" y2="200.0" stroke="#e5e7eb" strokeWidth="1" />
          <path d="M0.0,152.7 L43.6,137.5 L87.3,120.5 L130.9,137.5 L174.5,124.2 L218.2,145.1 L261.8,133.7 L305.5,150.8 L349.1,114.8 L392.7,133.7 L436.4,114.8 L480.0,131.8 L480.0,200.0 L436.4,200.0 L392.7,200.0 L349.1,200.0 L305.5,200.0 L261.8,200.0 L218.2,200.0 L174.5,200.0 L130.9,200.0 L87.3,200.0 L43.6,200.0 L0.0,200.0 Z" fill="rgba(59,130,246,0.35)" stroke="none" />
          <path d="M0.0,114.8 L43.6,78.8 L87.3,61.7 L130.9,95.8 L174.5,95.8 L218.2,116.7 L261.8,84.5 L305.5,88.3 L349.1,61.7 L392.7,101.5 L436.4,78.8 L480.0,90.2 L480.0,131.8 L436.4,114.8 L392.7,133.7 L349.1,114.8 L305.5,150.8 L261.8,133.7 L218.2,145.1 L174.5,124.2 L130.9,137.5 L87.3,120.5 L43.6,137.5 L0.0,152.7 Z" fill="rgba(139,92,246,0.35)" stroke="none" />
          <path d="M0.0,82.6 L43.6,58.0 L87.3,18.2 L130.9,52.3 L174.5,50.4 L218.2,95.8 L261.8,46.6 L305.5,40.9 L349.1,37.1 L392.7,61.7 L436.4,59.8 L480.0,63.6 L480.0,90.2 L436.4,78.8 L392.7,101.5 L349.1,61.7 L305.5,88.3 L261.8,84.5 L218.2,116.7 L174.5,95.8 L130.9,95.8 L87.3,61.7 L43.6,78.8 L0.0,114.8 Z" fill="rgba(236,72,153,0.35)" stroke="none" />
          <path d="M0.0,152.7 L43.6,137.5 L87.3,120.5 L130.9,137.5 L174.5,124.2 L218.2,145.1 L261.8,133.7 L305.5,150.8 L349.1,114.8 L392.7,133.7 L436.4,114.8 L480.0,131.8" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
          <path d="M0.0,114.8 L43.6,78.8 L87.3,61.7 L130.9,95.8 L174.5,95.8 L218.2,116.7 L261.8,84.5 L305.5,88.3 L349.1,61.7 L392.7,101.5 L436.4,78.8 L480.0,90.2" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
          <path d="M0.0,82.6 L43.6,58.0 L87.3,18.2 L130.9,52.3 L174.5,50.4 L218.2,95.8 L261.8,46.6 L305.5,40.9 L349.1,37.1 L392.7,61.7 L436.4,59.8 L480.0,63.6" fill="none" stroke="#ec4899" strokeWidth="1.5" />
      </svg>

      <div className="mt-3 flex items-center gap-4 text-xs text-gray-600">
        <button type="button" aria-pressed="true" className="flex items-center gap-1.5">
          <span className="size-2 rounded-full" style={{backgroundColor: '#3b82f6'}}></span>Organic
        </button>
        <button type="button" aria-pressed="true" className="flex items-center gap-1.5">
          <span className="size-2 rounded-full" style={{backgroundColor: '#8b5cf6'}}></span>Referral
        </button>
        <button type="button" aria-pressed="true" className="flex items-center gap-1.5">
          <span className="size-2 rounded-full" style={{backgroundColor: '#ec4899'}}></span>Paid
        </button>
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
