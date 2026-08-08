import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type EqualizerSlidersVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function EqualizerSlidersVariant2Dark({
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
}: EqualizerSlidersVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-xs rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">Equalizer</h3>
              <label htmlFor="eq-preset-dark" className="sr-only">Preset</label>
              <select id="eq-preset-dark" className="rounded-md border-gray-700 bg-gray-800 py-1 pl-2 pr-7 text-xs text-gray-200 focus:border-white focus:ring-white">
                <option>Bass Boost</option>
                <option>Flat</option>
                <option>Vocal</option>
              </select>
            </div>
      
            <div className="mt-4 flex h-28 justify-between gap-2.5">
              <div className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-24 w-full items-end overflow-hidden rounded-sm bg-gray-800">
                  <div className="w-full rounded-sm bg-white" style={{height: '85%'}}></div>
                </div>
                <span className="text-[10px] text-gray-400">60</span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-24 w-full items-end overflow-hidden rounded-sm bg-gray-800">
                  <div className="w-full rounded-sm bg-white" style={{height: '68%'}}></div>
                </div>
                <span className="text-[10px] text-gray-400">250</span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-24 w-full items-end overflow-hidden rounded-sm bg-gray-800">
                  <div className="w-full rounded-sm bg-white" style={{height: '45%'}}></div>
                </div>
                <span className="text-[10px] text-gray-400">1K</span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-24 w-full items-end overflow-hidden rounded-sm bg-gray-800">
                  <div className="w-full rounded-sm bg-white" style={{height: '30%'}}></div>
                </div>
                <span className="text-[10px] text-gray-400">4K</span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1">
                <div className="flex h-24 w-full items-end overflow-hidden rounded-sm bg-gray-800">
                  <div className="w-full rounded-sm bg-white" style={{height: '55%'}}></div>
                </div>
                <span className="text-[10px] text-gray-400">16K</span>
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
