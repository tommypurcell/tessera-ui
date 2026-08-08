import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ImageGalleryLightboxVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ImageGalleryLightboxVariant1Dark({
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
}: ImageGalleryLightboxVariant1DarkProps) {
  const defaultContent = (
    <>
<div className="grid w-full max-w-lg grid-cols-3 gap-2">
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg ring-2 ring-gray-100 ring-offset-2 ring-offset-gray-950">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-blue-900"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-700 to-violet-900 transition-opacity group-hover:opacity-80"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 to-amber-900 transition-opacity group-hover:opacity-80"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-700 to-emerald-900 transition-opacity group-hover:opacity-80"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-700 to-rose-900 transition-opacity group-hover:opacity-80"></div>
      </button>
      <button type="button" className="group relative aspect-square overflow-hidden rounded-lg">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 transition-opacity group-hover:opacity-80"></div>
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
