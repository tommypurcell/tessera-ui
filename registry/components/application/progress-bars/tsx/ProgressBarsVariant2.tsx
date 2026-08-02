import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProgressBarsVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ProgressBarsVariant2({
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
}: ProgressBarsVariant2Props) {
  const defaultContent = (
    <>
      <div
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="UpdatingLabel"
          >
            <div className="flex justify-between gap-4">
              <span id="UpdatingLabel" className="text-sm font-medium text-gray-900">Updating</span>
      
              <span className="text-sm font-medium text-gray-900">25%</span>
            </div>
      
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              <div className="h-full rounded-full bg-blue-600" style={{width: '25%'}}></div>
            </div>
          </div>
      
          <div
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="DownloadingLabel"
          >
            <div className="flex justify-between gap-4">
              <span id="DownloadingLabel" className="text-sm font-medium text-gray-900">Downloading</span>
      
              <span className="text-sm font-medium text-gray-900">100%</span>
            </div>
      
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              <div className="h-full rounded-full bg-green-600" style={{width: '100%'}}></div>
            </div>
          </div>
      
          <div
            role="progressbar"
            aria-valuenow={50}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="LoadingLabel"
          >
            <div className="flex justify-between gap-4">
              <span id="LoadingLabel" className="text-sm font-medium text-gray-900">Loading</span>
      
              <span className="text-sm font-medium text-gray-900">50%</span>
            </div>
      
            <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
              <div className="h-full rounded-full bg-gray-600" style={{width: '50%'}}></div>
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
