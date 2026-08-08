import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RatingVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RatingVariant1Dark({
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
}: RatingVariant1DarkProps) {
  const defaultContent = (
    <>
      <fieldset className="flex flex-col gap-3 rounded-lg border border-gray-800 bg-gray-900 p-6">
            <legend className="text-sm font-medium text-gray-200">Rate your experience</legend>
      
            <div className="flex flex-row-reverse items-center justify-end gap-1">
              <input type="radio" id="rate-5" name="rating" value="5" className="peer/5 sr-only" />
              <label
                htmlFor="rate-5"
                className="cursor-pointer text-gray-700 transition hover:text-yellow-400 peer-checked/5:text-yellow-400 [&:hover~label]:text-yellow-400"
              >
                <span className="sr-only">5 stars</span>
                <svg className="size-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" />
                </svg>
              </label>
      
              <input type="radio" id="rate-4" name="rating" value="4" className="peer/4 sr-only" />
              <label
                htmlFor="rate-4"
                className="cursor-pointer text-gray-700 transition hover:text-yellow-400 peer-checked/4:text-yellow-400 [&:hover~label]:text-yellow-400"
              >
                <span className="sr-only">4 stars</span>
                <svg className="size-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" />
                </svg>
              </label>
      
              <input type="radio" id="rate-3" name="rating" value="3" className="peer/3 sr-only" checked />
              <label
                htmlFor="rate-3"
                className="cursor-pointer text-gray-700 transition hover:text-yellow-400 peer-checked/3:text-yellow-400 [&:hover~label]:text-yellow-400"
              >
                <span className="sr-only">3 stars</span>
                <svg className="size-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" />
                </svg>
              </label>
      
              <input type="radio" id="rate-2" name="rating" value="2" className="peer/2 sr-only" />
              <label
                htmlFor="rate-2"
                className="cursor-pointer text-gray-700 transition hover:text-yellow-400 peer-checked/2:text-yellow-400 [&:hover~label]:text-yellow-400"
              >
                <span className="sr-only">2 stars</span>
                <svg className="size-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" />
                </svg>
              </label>
      
              <input type="radio" id="rate-1" name="rating" value="1" className="peer/1 sr-only" />
              <label
                htmlFor="rate-1"
                className="cursor-pointer text-gray-700 transition hover:text-yellow-400 peer-checked/1:text-yellow-400 [&:hover~label]:text-yellow-400"
              >
                <span className="sr-only">1 star</span>
                <svg className="size-8" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" />
                </svg>
              </label>
            </div>
      
            <p className="text-xs text-gray-400">Tap a star to set your rating.</p>
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
