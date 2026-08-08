import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type DurationInputVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function DurationInputVariant2Dark({
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
}: DurationInputVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm">
            <span className="block text-sm font-medium text-gray-300" id="duration-input-preset-label-dark">Timer duration</span>
            <div role="radiogroup" aria-labelledby="duration-input-preset-label-dark" className="mt-2 flex flex-wrap gap-1.5">
              <button type="button" role="radio" aria-checked="false" className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-gray-800">15m</button>
              <button type="button" role="radio" aria-checked="false" className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-gray-800">30m</button>
              <button type="button" role="radio" aria-checked="true" className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-900">1h</button>
              <button type="button" role="radio" aria-checked="false" className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-gray-800">2h</button>
              <button type="button" role="radio" aria-checked="false" className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs font-medium text-gray-300 hover:bg-gray-800">Custom</button>
            </div>
      
            <div className="mt-3 flex items-center gap-1 border-t border-gray-700 pt-3">
              <label htmlFor="duration-input-custom-h-dark" className="sr-only">Custom hours</label>
              <input
                id="duration-input-custom-h-dark"
                type="text"
                inputmode="numeric"
                placeholder="0"
                disabled
                className="w-10 rounded-md border-gray-700 bg-gray-800 py-1 text-center text-sm text-gray-500 shadow-sm"
              />
              <span className="text-sm text-gray-500">h</span>
              <label htmlFor="duration-input-custom-m-dark" className="sr-only">Custom minutes</label>
              <input
                id="duration-input-custom-m-dark"
                type="text"
                inputmode="numeric"
                placeholder="00"
                disabled
                className="w-10 rounded-md border-gray-700 bg-gray-800 py-1 text-center text-sm text-gray-500 shadow-sm"
              />
              <span className="text-sm text-gray-500">m</span>
              <span className="ml-auto text-xs text-gray-400">Selected: 1h 00m</span>
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
