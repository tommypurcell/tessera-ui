import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type EqualizerSlidersVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function EqualizerSlidersVariant1Dark({
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
}: EqualizerSlidersVariant1DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">Equalizer</h3>
              <span className="rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-300">Custom</span>
            </div>
      
            <div className="mt-4 flex h-40 items-stretch justify-between gap-3 px-2">
              <div className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-[10px] text-gray-500">+6</span>
                <input type="range" min="-12" max="12" value="2" className="tessera-eq-band-dark" style={{accentColor: '#ffffff'}} />
                <span className="text-[10px] text-gray-500">-6</span>
                <span className="text-[11px] font-medium text-gray-400">60</span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-[10px] text-gray-500">+6</span>
                <input type="range" min="-12" max="12" value="5" className="tessera-eq-band-dark" style={{accentColor: '#ffffff'}} />
                <span className="text-[10px] text-gray-500">-6</span>
                <span className="text-[11px] font-medium text-gray-400">150</span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-[10px] text-gray-500">+6</span>
                <input type="range" min="-12" max="12" value="-3" className="tessera-eq-band-dark" style={{accentColor: '#ffffff'}} />
                <span className="text-[10px] text-gray-500">-6</span>
                <span className="text-[11px] font-medium text-gray-400">400</span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-[10px] text-gray-500">+6</span>
                <input type="range" min="-12" max="12" value="0" className="tessera-eq-band-dark" style={{accentColor: '#ffffff'}} />
                <span className="text-[10px] text-gray-500">-6</span>
                <span className="text-[11px] font-medium text-gray-400">1K</span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-[10px] text-gray-500">+6</span>
                <input type="range" min="-12" max="12" value="4" className="tessera-eq-band-dark" style={{accentColor: '#ffffff'}} />
                <span className="text-[10px] text-gray-500">-6</span>
                <span className="text-[11px] font-medium text-gray-400">2.5K</span>
              </div>
              <div className="flex flex-1 flex-col items-center gap-1.5">
                <span className="text-[10px] text-gray-500">+6</span>
                <input type="range" min="-12" max="12" value="6" className="tessera-eq-band-dark" style={{accentColor: '#ffffff'}} />
                <span className="text-[10px] text-gray-500">-6</span>
                <span className="text-[11px] font-medium text-gray-400">8K</span>
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
