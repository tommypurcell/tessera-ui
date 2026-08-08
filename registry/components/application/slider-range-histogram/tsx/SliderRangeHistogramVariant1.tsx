import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SliderRangeHistogramVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SliderRangeHistogramVariant1({
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
}: SliderRangeHistogramVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-900">Price range</p>
        <p className="text-sm text-gray-500">$120 &ndash; $480</p>
      </div>

      <div className="mt-4 flex h-16 items-end gap-0.5">
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '17%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '20%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '33%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '29%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '44%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '46%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '44%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '63%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '53%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '72%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '62%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '58%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '64%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '70%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '44%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '41%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '44%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '43%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '30%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-900" style={{height: '21%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '20%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '7%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '8%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '6%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '5%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '5%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '6%'}}></div>
          <div className="flex-1 rounded-t-sm bg-gray-200" style={{height: '7%'}}></div>
      </div>

      <div className="relative mt-2 h-5">
        <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-gray-200"></div>
        <div className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-gray-900" style={{left: '21.43%', right: '28.57%'}}></div>

        <span className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-900 bg-white shadow" style={{left: '21.43%'}} role="slider" aria-label="Minimum price" aria-valuemin={0} aria-valuemax={1000} aria-valuenow={120} tabIndex={0}></span>
        <span className="absolute top-1/2 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-900 bg-white shadow" style={{left: '71.43%'}} role="slider" aria-label="Maximum price" aria-valuemin={0} aria-valuemax={1000} aria-valuenow={480} tabIndex={0}></span>
      </div>

      <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
        <span>$0</span>
        <span>$1,000</span>
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
