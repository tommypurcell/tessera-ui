import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ProgressBarsVariant3Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ProgressBarsVariant3({
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
}: ProgressBarsVariant3Props) {
  const defaultContent = (
    <>
      <div
            role="progressbar"
            aria-valuenow={25}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="DownloadLabel"
          >
            <p id="DownloadLabel" className="text-xs font-medium tracking-wide text-gray-700 uppercase">
              Download
            </p>
      
            <div className="mt-2 h-1 w-full bg-gray-200">
              <div className="h-full bg-blue-600" style={{width: '25%'}}></div>
            </div>
      
            <p className="mt-2 text-xs text-gray-700">1.2 of 3.8 MB</p>
          </div>
      
          <div
            role="progressbar"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="FileConversionLabel"
          >
            <p id="FileConversionLabel" className="text-xs font-medium tracking-wide text-gray-700 uppercase">
              File Conversion
            </p>
      
            <div className="mt-2 h-1 w-full bg-gray-200">
              <div className="h-full bg-blue-600" style={{width: '75%'}}></div>
            </div>
      
            <p className="mt-2 text-xs text-gray-700">3/4 files done</p>
          </div>
      
          <div
            role="progressbar"
            aria-valuenow={100}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-labelledby="FileSyncLabel"
          >
            <p id="FileSyncLabel" className="text-xs font-medium tracking-wide text-gray-700 uppercase">
              File Sync
            </p>
      
            <div className="mt-2 h-1 w-full bg-gray-200">
              <div className="h-full bg-green-600" style={{width: '100%'}}></div>
            </div>
      
            <p className="mt-2 text-xs text-gray-700">Completed</p>
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
