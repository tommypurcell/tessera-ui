import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AvatarsVariant4Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
 * Copy-and-own Tailwind component. Add application-specific state and event handlers where needed.
 */
export function AvatarsVariant4({
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
}: AvatarsVariant4Props) {
  const defaultContent = (
    <>
      <div className="flex -space-x-3">
            <span
              aria-label="Ava Wilson"
              className="grid size-10 place-items-center rounded-full border-2 border-white bg-slate-900 text-xs font-semibold text-white"
            >
              AW
            </span>
            <span
              aria-label="Maya Chen"
              className="grid size-10 place-items-center rounded-full border-2 border-white bg-blue-50 text-xs font-semibold text-blue-700"
            >
              MC
            </span>
            <span
              aria-label="Noah Patel"
              className="grid size-10 place-items-center rounded-full border-2 border-white bg-amber-100 text-xs font-semibold text-amber-800"
            >
              NP
            </span>
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
