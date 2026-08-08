import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type PhoneNumberInputVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function PhoneNumberInputVariant1Dark({
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
}: PhoneNumberInputVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm">
      <label htmlFor="phone-input-dark" className="mb-1.5 block text-sm font-medium text-gray-300">Phone number</label>
      <div className="flex items-stretch rounded-md border border-gray-700 bg-gray-900 shadow-sm transition-colors focus-within:border-gray-100 focus-within:ring-1 focus-within:ring-gray-100">
        <button
          type="button"
          className="flex shrink-0 items-center gap-1.5 rounded-l-md border-r border-gray-700 bg-gray-800 px-3 text-sm text-gray-200 transition-colors hover:bg-gray-700"
        >
          <span className="text-base leading-none" aria-hidden="true">🇺🇸</span>
          <span className="text-gray-400">+1</span>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-3 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </button>
        <input
          type="tel"
          id="phone-input-dark"
          defaultValue="(415) 555-0132"
          className="h-10 w-full border-0 bg-transparent px-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-0"
        />
      </div>
      <p className="mt-1.5 text-xs text-gray-400">We'll text a verification code to this number.</p>
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
