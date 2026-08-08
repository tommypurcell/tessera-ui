import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CodeLanguageTabsVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CodeLanguageTabsVariant1({
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
}: CodeLanguageTabsVariant1Props) {
  const defaultContent = (
    <>
      <div className="overflow-hidden rounded-lg border border-gray-800 bg-gray-950">
            <input type="radio" id="lang-curl" name="lang-tabs-1" className="peer/curl sr-only" checked />
            <input type="radio" id="lang-js" name="lang-tabs-1" className="peer/js sr-only" />
            <input type="radio" id="lang-py" name="lang-tabs-1" className="peer/py sr-only" />
      
            <div className="flex items-center justify-between border-b border-gray-800 px-2">
              <div className="flex items-center">
                <label
                  htmlFor="lang-curl"
                  className="cursor-pointer border-b-2 border-transparent px-3 py-2.5 text-sm font-medium text-gray-400 transition peer-checked/curl:border-white peer-checked/curl:text-white"
                >
                  cURL
                </label>
      
                <label
                  htmlFor="lang-js"
                  className="cursor-pointer border-b-2 border-transparent px-3 py-2.5 text-sm font-medium text-gray-400 transition peer-checked/js:border-white peer-checked/js:text-white"
                >
                  JavaScript
                </label>
      
                <label
                  htmlFor="lang-py"
                  className="cursor-pointer border-b-2 border-transparent px-3 py-2.5 text-sm font-medium text-gray-400 transition peer-checked/py:border-white peer-checked/py:text-white"
                >
                  Python
                </label>
              </div>
      
              <button type="button" aria-label="Copy code" className="rounded-md p-1.5 text-gray-500 transition hover:bg-gray-800 hover:text-gray-300">
                <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
      
            <div className="hidden p-4 font-mono text-sm text-gray-300 peer-checked/curl:block">
              <pre className="whitespace-pre-wrap">curl -X POST https://api.tessera.dev/v1/components \
        -H "Authorization: Bearer $TOKEN" \
        -d '{"slug": "rating"}'</pre>
            </div>
            <div className="hidden p-4 font-mono text-sm text-gray-300 peer-checked/js:block">
              <pre className="whitespace-pre-wrap">const res = await fetch('https://api.tessera.dev/v1/components', {
        method: 'POST',
        headers: { Authorization: `Bearer ${'$'}{TOKEN}` },
        body: JSON.stringify({ slug: 'rating' }),
      })</pre>
            </div>
            <div className="hidden p-4 font-mono text-sm text-gray-300 peer-checked/py:block">
              <pre className="whitespace-pre-wrap">import requests
      
      requests.post(
          "https://api.tessera.dev/v1/components",
          headers={"Authorization": f"Bearer {TOKEN}"},
          json={"slug": "rating"},
      )</pre>
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
