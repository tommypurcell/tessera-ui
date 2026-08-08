import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ImageGalleryLightboxVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ImageGalleryLightboxVariant1({
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
}: ImageGalleryLightboxVariant1Props) {
  const defaultContent = (
    <>
<div className="grid w-full max-w-lg grid-cols-3 gap-2">
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg ring-2 ring-gray-900 ring-offset-2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-400"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-200 to-violet-400 transition-opacity group-hover:opacity-80"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-amber-400 transition-opacity group-hover:opacity-80"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-200 to-emerald-400 transition-opacity group-hover:opacity-80"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-200 to-rose-400 transition-opacity group-hover:opacity-80"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-400 transition-opacity group-hover:opacity-80"></div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-lg font-semibold text-white">+8</div>
      </button>
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
