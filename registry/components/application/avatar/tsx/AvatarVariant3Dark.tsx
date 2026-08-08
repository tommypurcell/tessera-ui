import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type AvatarVariant3DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function AvatarVariant3Dark({
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
}: AvatarVariant3DarkProps) {
  const defaultContent = (
    <>
      <span className="relative inline-flex">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces"
              alt="Ava Wilson"
              className="size-12 rounded-full object-cover"
            />
            <span className="absolute right-0 bottom-0 size-3 rounded-full bg-green-500 ring-2 ring-gray-900" aria-hidden="true"></span>
            <span className="sr-only">Online</span>
          </span>
      
          <span className="relative inline-flex">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=faces"
              alt="Marcus Chen"
              className="size-12 rounded-full object-cover"
            />
            <span className="absolute right-0 bottom-0 size-3 rounded-full bg-gray-500 ring-2 ring-gray-900" aria-hidden="true"></span>
            <span className="sr-only">Offline</span>
          </span>
      
          <span className="relative inline-flex">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&h=96&fit=crop&crop=faces"
              alt="Sofia Ramirez"
              className="size-12 rounded-full object-cover"
            />
            <span className="absolute right-0 bottom-0 size-3 rounded-full bg-amber-500 ring-2 ring-gray-900" aria-hidden="true"></span>
            <span className="sr-only">Away</span>
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
