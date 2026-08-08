import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type ScrollAreaVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function ScrollAreaVariant1({
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
}: ScrollAreaVariant1Props) {
  const defaultContent = (
    <>
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow-sm">
            <div className="border-b border-gray-200 px-4 py-3">
              <h3 className="text-sm font-semibold text-gray-900">Team members</h3>
              <p className="text-xs text-gray-500">18 people</p>
            </div>
            <div className="tessera-scroll-area h-64 overflow-y-auto p-2">
              <ul className="space-y-0.5">
                <li className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/64?img=1" alt="" className="size-8 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">Ava Martinez</p>
                    <p className="truncate text-xs text-gray-500">Engineering</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/64?img=2" alt="" className="size-8 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">Liam Chen</p>
                    <p className="truncate text-xs text-gray-500">Design</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/64?img=3" alt="" className="size-8 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">Noah Patel</p>
                    <p className="truncate text-xs text-gray-500">Engineering</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/64?img=4" alt="" className="size-8 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">Sofia Rossi</p>
                    <p className="truncate text-xs text-gray-500">Marketing</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/64?img=5" alt="" className="size-8 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">Ethan Kim</p>
                    <p className="truncate text-xs text-gray-500">Sales</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/64?img=6" alt="" className="size-8 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">Maria Garcia</p>
                    <p className="truncate text-xs text-gray-500">Product</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/64?img=7" alt="" className="size-8 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">James Wilson</p>
                    <p className="truncate text-xs text-gray-500">Engineering</p>
                  </div>
                </li>
                <li className="flex items-center gap-3 rounded-md px-2 py-2 hover:bg-gray-50">
                  <img src="https://i.pravatar.cc/64?img=8" alt="" className="size-8 rounded-full object-cover" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-gray-900">Yuki Tanaka</p>
                    <p className="truncate text-xs text-gray-500">Design</p>
                  </div>
                </li>
              </ul>
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
