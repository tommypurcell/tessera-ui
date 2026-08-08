import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RatingDistributionVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RatingDistributionVariant2({
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
}: RatingDistributionVariant2Props) {
  const defaultContent = (
    <>
      <div className="rounded-lg border border-gray-100 bg-white p-5">
            <h2 className="text-sm font-semibold text-gray-900">Customer reviews</h2>
      
            <div className="mt-3 flex flex-col gap-1.5" role="list" aria-label="Rating breakdown">
              <div className="flex items-center gap-2 text-xs">
                <span className="flex w-8 items-center gap-0.5 text-gray-600">
                  5
                  <svg className="size-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-gray-900" style={{width: '72%'}}></div>
                </div>
                <span className="w-8 text-right tabular-nums text-gray-400">867</span>
              </div>
      
              <div className="flex items-center gap-2 text-xs">
                <span className="flex w-8 items-center gap-0.5 text-gray-600">
                  4
                  <svg className="size-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-gray-900" style={{width: '18%'}}></div>
                </div>
                <span className="w-8 text-right tabular-nums text-gray-400">217</span>
              </div>
      
              <div className="flex items-center gap-2 text-xs">
                <span className="flex w-8 items-center gap-0.5 text-gray-600">
                  3
                  <svg className="size-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-gray-900" style={{width: '6%'}}></div>
                </div>
                <span className="w-8 text-right tabular-nums text-gray-400">72</span>
              </div>
      
              <div className="flex items-center gap-2 text-xs">
                <span className="flex w-8 items-center gap-0.5 text-gray-600">
                  2
                  <svg className="size-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-gray-900" style={{width: '2%'}}></div>
                </div>
                <span className="w-8 text-right tabular-nums text-gray-400">24</span>
              </div>
      
              <div className="flex items-center gap-2 text-xs">
                <span className="flex w-8 items-center gap-0.5 text-gray-600">
                  1
                  <svg className="size-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
                </span>
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-gray-900" style={{width: '2%'}}></div>
                </div>
                <span className="w-8 text-right tabular-nums text-gray-400">24</span>
              </div>
            </div>
      
            <p className="mt-3 border-t border-gray-100 pt-3 text-xs text-gray-500">
              <span className="font-semibold text-gray-900">4.6</span> average from 1,204 ratings
            </p>
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
