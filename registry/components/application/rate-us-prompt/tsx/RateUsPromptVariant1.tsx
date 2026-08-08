import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type RateUsPromptVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function RateUsPromptVariant1({
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
}: RateUsPromptVariant1Props) {
  const defaultContent = (
    <>
      <div className="relative rounded-lg border border-gray-100 bg-white p-5">
            <button
              type="button"
              aria-label="Dismiss"
              className="absolute top-3 right-3 rounded-md p-1 text-gray-400 transition hover:bg-gray-50 hover:text-gray-600"
            >
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
      
            <p className="pr-6 text-sm font-semibold text-gray-900">Enjoying Tessera UI?</p>
            <p className="mt-0.5 text-sm text-gray-500">Tap a star to let us know how we're doing.</p>
      
            <fieldset className="mt-3 flex items-center gap-1">
              <legend className="sr-only">Rate your experience</legend>
      
              <input type="radio" id="rateus-1" name="rateus" value="1" className="peer/1 sr-only" />
              <label htmlFor="rateus-1" className="cursor-pointer text-gray-200 transition hover:text-yellow-400 peer-checked/1:text-yellow-400">
                <span className="sr-only">1 star</span>
                <svg className="size-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
              </label>
      
              <input type="radio" id="rateus-2" name="rateus" value="2" className="peer/2 sr-only" />
              <label htmlFor="rateus-2" className="cursor-pointer text-gray-200 transition hover:text-yellow-400 peer-checked/2:text-yellow-400">
                <span className="sr-only">2 stars</span>
                <svg className="size-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
              </label>
      
              <input type="radio" id="rateus-3" name="rateus" value="3" className="peer/3 sr-only" />
              <label htmlFor="rateus-3" className="cursor-pointer text-gray-200 transition hover:text-yellow-400 peer-checked/3:text-yellow-400">
                <span className="sr-only">3 stars</span>
                <svg className="size-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
              </label>
      
              <input type="radio" id="rateus-4" name="rateus" value="4" className="peer/4 sr-only" checked />
              <label htmlFor="rateus-4" className="cursor-pointer text-gray-200 transition hover:text-yellow-400 peer-checked/4:text-yellow-400">
                <span className="sr-only">4 stars</span>
                <svg className="size-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
              </label>
      
              <input type="radio" id="rateus-5" name="rateus" value="5" className="peer/5 sr-only" />
              <label htmlFor="rateus-5" className="cursor-pointer text-gray-200 transition hover:text-yellow-400 peer-checked/5:text-yellow-400">
                <span className="sr-only">5 stars</span>
                <svg className="size-7" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M9.05 2.93c.3-.92 1.6-.92 1.9 0l1.36 4.18a1 1 0 00.95.69h4.4c.97 0 1.37 1.24.59 1.81l-3.56 2.59a1 1 0 00-.36 1.12l1.36 4.18c.3.92-.76 1.68-1.54 1.11l-3.56-2.58a1 1 0 00-1.18 0l-3.56 2.58c-.78.57-1.84-.19-1.54-1.11l1.36-4.18a1 1 0 00-.36-1.12L1.4 9.6c-.78-.57-.38-1.81.59-1.81h4.4a1 1 0 00.95-.69z" /></svg>
              </label>
            </fieldset>
      
            <div className="mt-4 flex items-center gap-2 rounded-md bg-green-50 px-3 py-2 text-sm text-green-800">
              <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Thanks! Mind leaving a review on the App Store?
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
