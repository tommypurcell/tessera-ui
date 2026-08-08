import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AvatarVariant2DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AvatarVariant2Dark({
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
}: AvatarVariant2DarkProps) {
  const defaultContent = (
    <>
      <span
            role="img"
            aria-label="Ava Wilson"
            className="grid size-10 place-items-center rounded-full bg-indigo-500 text-sm font-semibold text-white"
          >
            AW
          </span>
          <span
            role="img"
            aria-label="Marcus Chen"
            className="grid size-10 place-items-center rounded-full bg-emerald-500 text-sm font-semibold text-white"
          >
            MC
          </span>
          <span
            role="img"
            aria-label="Sofia Ramirez"
            className="grid size-10 place-items-center rounded-full bg-rose-500 text-sm font-semibold text-white"
          >
            SR
          </span>
          <span
            role="img"
            aria-label="Unknown user"
            className="grid size-10 place-items-center rounded-full bg-gray-700 text-gray-300"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.5c-3.3 0-9.8 1.6-9.8 4.9v2.4h19.6v-2.4c0-3.3-6.5-4.9-9.8-4.9z" />
            </svg>
          </span>
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
