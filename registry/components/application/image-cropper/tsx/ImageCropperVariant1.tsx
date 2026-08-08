import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ImageCropperVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ImageCropperVariant1({
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
}: ImageCropperVariant1Props) {
  const defaultContent = (
    <>
<div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-semibold text-gray-900">Crop image</p>

      <div className="relative mt-3 aspect-square w-full overflow-hidden rounded-md bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400"></div>
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-x-[15%] inset-y-[22%] outline outline-[999px] outline-black/50"></div>

        <div className="absolute inset-x-[15%] inset-y-[22%] border-2 border-white">
          <div className="pointer-events-none absolute inset-0 grid grid-cols-3 grid-rows-3">
            <div className="border-b border-r border-white/40"></div>
            <div className="border-b border-r border-white/40"></div>
            <div className="border-b border-white/40"></div>
            <div className="border-b border-r border-white/40"></div>
            <div className="border-b border-r border-white/40"></div>
            <div className="border-b border-white/40"></div>
            <div className="border-r border-white/40"></div>
            <div className="border-r border-white/40"></div>
            <div></div>
          </div>

          <span className="absolute -left-1 -top-1 size-3 rounded-sm border-2 border-white bg-gray-900"></span>
          <span className="absolute -right-1 -top-1 size-3 rounded-sm border-2 border-white bg-gray-900"></span>
          <span className="absolute -bottom-1 -left-1 size-3 rounded-sm border-2 border-white bg-gray-900"></span>
          <span className="absolute -bottom-1 -right-1 size-3 rounded-sm border-2 border-white bg-gray-900"></span>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5">
        <button type="button" aria-pressed="true" className="rounded-md bg-gray-900 px-2.5 py-1 text-xs font-medium text-white">1:1</button>
        <button type="button" aria-pressed="false" className="rounded-md px-2.5 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100">4:3</button>
        <button type="button" aria-pressed="false" className="rounded-md px-2.5 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100">16:9</button>
        <button type="button" aria-pressed="false" className="rounded-md px-2.5 py-1 text-xs font-medium text-gray-600 hover:bg-gray-100">Free</button>
      </div>

      <div className="mt-3">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Zoom</span>
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-3.5 shrink-0 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m-3-3h6" />
          </svg>
          <div className="relative h-1 w-full rounded-full bg-gray-200">
            <div className="absolute inset-y-0 left-0 w-2/5 rounded-full bg-gray-900"></div>
            <span className="absolute top-1/2 size-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-gray-900 bg-white shadow" style={{left: '40%'}}></span>
          </div>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 shrink-0 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM7.5 10.5h6" />
          </svg>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-end gap-2">
        <button type="button" className="rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50">Cancel</button>
        <button type="button" className="rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-gray-800">Apply crop</button>
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
