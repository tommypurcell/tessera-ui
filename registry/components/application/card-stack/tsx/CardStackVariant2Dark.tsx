import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CardStackVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CardStackVariant2Dark({
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
}: CardStackVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="relative h-56 w-64">
            <div className="absolute inset-x-4 top-6 rotate-3 rounded-xl border border-gray-700 bg-gray-900 p-4 opacity-70 shadow-sm"></div>
            <div className="absolute inset-x-2 top-3 -rotate-2 rounded-xl border border-gray-700 bg-gray-900 p-4 opacity-85 shadow-sm"></div>
            <div className="absolute inset-0 rounded-xl border border-gray-700 bg-gray-900 p-4 shadow-lg shadow-black/40">
              <span className="inline-flex items-center rounded-full bg-indigo-500/10 px-2 py-0.5 text-[10px] font-semibold text-indigo-400">
                RECOMMENDED
              </span>
              <h3 className="mt-2 text-sm font-semibold text-white">Designing with constraints</h3>
              <p className="mt-1 text-xs leading-relaxed text-gray-400">
                Why limitations often lead to better product decisions than open-ended freedom.
              </p>
              <p className="mt-3 text-[11px] text-gray-500">6 min read · Design</p>
      
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button type="button" aria-label="Skip" className="inline-flex size-9 items-center justify-center rounded-full border border-gray-700 text-gray-500 hover:bg-gray-800">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
                <button type="button" aria-label="Save" className="inline-flex size-9 items-center justify-center rounded-full bg-white text-gray-900 hover:bg-gray-200">
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
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
