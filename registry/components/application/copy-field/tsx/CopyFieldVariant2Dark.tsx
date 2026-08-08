import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type CopyFieldVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function CopyFieldVariant2Dark({
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
}: CopyFieldVariant2DarkProps) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm">
            <label htmlFor="copy-field-invite-link-dark" className="block text-sm font-medium text-gray-300">Invite link</label>
            <div className="mt-1.5 flex items-center rounded-md border border-emerald-500/40 bg-gray-900 shadow-sm ring-1 ring-emerald-500/60">
              <input
                id="copy-field-invite-link-dark"
                type="text"
                readonly
                value="https://tessera.dev/invite/8k2nfq"
                className="block w-full truncate rounded-l-md border-0 bg-transparent px-3 py-2 text-sm text-gray-200 focus:outline-none focus:ring-0"
              />
              <button
                type="button"
                aria-live="polite"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-r-md border-l border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm font-medium text-emerald-400"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Copied
              </button>
            </div>
            <p className="mt-1.5 text-xs text-emerald-400">Link copied to clipboard.</p>
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
