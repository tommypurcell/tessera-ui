import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ColorPickerVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ColorPickerVariant2({
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
}: ColorPickerVariant2Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-xs rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
            <div
              className="relative h-32 w-full rounded-md"
              style={{backgroundImage: 'linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, #f59e0b)'}}
            >
              <div className="absolute size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white shadow" style={{left: '72%', top: '22%', backgroundColor: '#f59e0b'}}></div>
            </div>
      
            <div className="mt-3">
              <label htmlFor="color-picker-hue" className="sr-only">Hue</label>
              <input
                id="color-picker-hue"
                type="range"
                min="0"
                max="360"
                value="38"
                className="h-2.5 w-full appearance-none rounded-full"
                style={{backgroundImage: 'linear-gradient(to right, #f00, #ff0, #0f0, #0ff, #00f, #f0f, #f00)'}}
              />
            </div>
      
            <div className="mt-2.5">
              <label htmlFor="color-picker-alpha" className="sr-only">Opacity</label>
              <div
                className="relative h-2.5 w-full rounded-full"
                style={{backgroundImage: 'repeating-conic-gradient(#e5e7eb 0% 25%, transparent 0% 50%)', backgroundSize: '8px 8px'}}
              >
                <input
                  id="color-picker-alpha"
                  type="range"
                  min="0"
                  max="100"
                  value="100"
                  className="absolute inset-0 h-2.5 w-full appearance-none rounded-full"
                  style={{backgroundImage: 'linear-gradient(to right, transparent, #f59e0b)'}}
                />
              </div>
            </div>
      
            <div className="mt-3 flex items-center gap-2">
              <span className="size-8 shrink-0 rounded-md border border-black/10" style={{backgroundColor: '#f59e0b'}}></span>
              <div className="grid flex-1 grid-cols-3 gap-1.5">
                <div>
                  <label htmlFor="color-picker-r" className="block text-center text-[10px] font-medium uppercase text-gray-400">R</label>
                  <input id="color-picker-r" type="text" value="245" className="block w-full rounded-md border-gray-300 px-1.5 py-1 text-center text-xs text-gray-700 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
                </div>
                <div>
                  <label htmlFor="color-picker-g" className="block text-center text-[10px] font-medium uppercase text-gray-400">G</label>
                  <input id="color-picker-g" type="text" value="158" className="block w-full rounded-md border-gray-300 px-1.5 py-1 text-center text-xs text-gray-700 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
                </div>
                <div>
                  <label htmlFor="color-picker-b" className="block text-center text-[10px] font-medium uppercase text-gray-400">B</label>
                  <input id="color-picker-b" type="text" value="11" className="block w-full rounded-md border-gray-300 px-1.5 py-1 text-center text-xs text-gray-700 shadow-sm focus:border-gray-900 focus:ring-gray-900" />
                </div>
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
