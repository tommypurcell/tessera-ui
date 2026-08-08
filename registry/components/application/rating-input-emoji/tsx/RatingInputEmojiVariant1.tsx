import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RatingInputEmojiVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RatingInputEmojiVariant1({
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
}: RatingInputEmojiVariant1Props) {
  const defaultContent = (
    <>
      <fieldset className="flex flex-col items-center gap-3 rounded-lg border border-gray-100 bg-white p-6">
            <legend className="mx-auto text-sm font-medium text-gray-700">How was your experience?</legend>
      
            <div className="flex items-center gap-2">
              <input type="radio" id="mood-1" name="mood" value="1" className="peer/1 sr-only" />
              <label
                htmlFor="mood-1"
                className="group flex size-11 cursor-pointer items-center justify-center rounded-full text-2xl grayscale transition hover:scale-110 hover:grayscale-0 peer-checked/1:scale-110 peer-checked/1:bg-red-50 peer-checked/1:grayscale-0 peer-focus-visible/1:ring-2 peer-focus-visible/1:ring-gray-900 peer-focus-visible/1:ring-offset-2"
              >
                <span aria-hidden="true">😡</span>
                <span className="sr-only">Terrible</span>
              </label>
      
              <input type="radio" id="mood-2" name="mood" value="2" className="peer/2 sr-only" />
              <label
                htmlFor="mood-2"
                className="group flex size-11 cursor-pointer items-center justify-center rounded-full text-2xl grayscale transition hover:scale-110 hover:grayscale-0 peer-checked/2:scale-110 peer-checked/2:bg-orange-50 peer-checked/2:grayscale-0 peer-focus-visible/2:ring-2 peer-focus-visible/2:ring-gray-900 peer-focus-visible/2:ring-offset-2"
              >
                <span aria-hidden="true">🙁</span>
                <span className="sr-only">Not great</span>
              </label>
      
              <input type="radio" id="mood-3" name="mood" value="3" className="peer/3 sr-only" checked />
              <label
                htmlFor="mood-3"
                className="group flex size-11 cursor-pointer items-center justify-center rounded-full text-2xl grayscale transition hover:scale-110 hover:grayscale-0 peer-checked/3:scale-110 peer-checked/3:bg-yellow-50 peer-checked/3:grayscale-0 peer-focus-visible/3:ring-2 peer-focus-visible/3:ring-gray-900 peer-focus-visible/3:ring-offset-2"
              >
                <span aria-hidden="true">😐</span>
                <span className="sr-only">Okay</span>
              </label>
      
              <input type="radio" id="mood-4" name="mood" value="4" className="peer/4 sr-only" />
              <label
                htmlFor="mood-4"
                className="group flex size-11 cursor-pointer items-center justify-center rounded-full text-2xl grayscale transition hover:scale-110 hover:grayscale-0 peer-checked/4:scale-110 peer-checked/4:bg-lime-50 peer-checked/4:grayscale-0 peer-focus-visible/4:ring-2 peer-focus-visible/4:ring-gray-900 peer-focus-visible/4:ring-offset-2"
              >
                <span aria-hidden="true">🙂</span>
                <span className="sr-only">Good</span>
              </label>
      
              <input type="radio" id="mood-5" name="mood" value="5" className="peer/5 sr-only" />
              <label
                htmlFor="mood-5"
                className="group flex size-11 cursor-pointer items-center justify-center rounded-full text-2xl grayscale transition hover:scale-110 hover:grayscale-0 peer-checked/5:scale-110 peer-checked/5:bg-green-50 peer-checked/5:grayscale-0 peer-focus-visible/5:ring-2 peer-focus-visible/5:ring-gray-900 peer-focus-visible/5:ring-offset-2"
              >
                <span aria-hidden="true">😄</span>
                <span className="sr-only">Excellent</span>
              </label>
            </div>
      
            <p className="text-xs text-gray-500">Okay</p>
          </fieldset>
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
