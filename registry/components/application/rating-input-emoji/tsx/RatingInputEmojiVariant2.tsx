import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RatingInputEmojiVariant2Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RatingInputEmojiVariant2({
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
}: RatingInputEmojiVariant2Props) {
  const defaultContent = (
    <>
      <div className="flex items-center justify-between gap-4 rounded-lg border border-gray-100 bg-white px-5 py-4">
            <p className="text-sm font-medium text-gray-700">Rate this article</p>
      
            <fieldset className="flex items-center gap-1">
              <legend className="sr-only">Satisfaction rating</legend>
      
              <input type="radio" id="rate2-1" name="rate2" value="1" className="peer/1 sr-only" />
              <label
                htmlFor="rate2-1"
                className="flex size-8 cursor-pointer items-center justify-center rounded-full text-lg opacity-40 grayscale transition hover:opacity-100 hover:grayscale-0 peer-checked/1:bg-gray-100 peer-checked/1:opacity-100 peer-checked/1:grayscale-0"
              >
                <span aria-hidden="true">😡</span>
                <span className="sr-only">Terrible</span>
              </label>
      
              <input type="radio" id="rate2-2" name="rate2" value="2" className="peer/2 sr-only" />
              <label
                htmlFor="rate2-2"
                className="flex size-8 cursor-pointer items-center justify-center rounded-full text-lg opacity-40 grayscale transition hover:opacity-100 hover:grayscale-0 peer-checked/2:bg-gray-100 peer-checked/2:opacity-100 peer-checked/2:grayscale-0"
              >
                <span aria-hidden="true">🙁</span>
                <span className="sr-only">Not great</span>
              </label>
      
              <input type="radio" id="rate2-3" name="rate2" value="3" className="peer/3 sr-only" />
              <label
                htmlFor="rate2-3"
                className="flex size-8 cursor-pointer items-center justify-center rounded-full text-lg opacity-40 grayscale transition hover:opacity-100 hover:grayscale-0 peer-checked/3:bg-gray-100 peer-checked/3:opacity-100 peer-checked/3:grayscale-0"
              >
                <span aria-hidden="true">😐</span>
                <span className="sr-only">Okay</span>
              </label>
      
              <input type="radio" id="rate2-4" name="rate2" value="4" className="peer/4 sr-only" />
              <label
                htmlFor="rate2-4"
                className="flex size-8 cursor-pointer items-center justify-center rounded-full text-lg opacity-40 grayscale transition hover:opacity-100 hover:grayscale-0 peer-checked/4:bg-gray-100 peer-checked/4:opacity-100 peer-checked/4:grayscale-0"
              >
                <span aria-hidden="true">🙂</span>
                <span className="sr-only">Good</span>
              </label>
      
              <input type="radio" id="rate2-5" name="rate2" value="5" className="peer/5 sr-only" checked />
              <label
                htmlFor="rate2-5"
                className="flex size-8 cursor-pointer items-center justify-center rounded-full text-lg opacity-40 grayscale transition hover:opacity-100 hover:grayscale-0 peer-checked/5:bg-green-50 peer-checked/5:opacity-100 peer-checked/5:grayscale-0"
              >
                <span aria-hidden="true">😄</span>
                <span className="sr-only">Excellent</span>
              </label>
            </fieldset>
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
