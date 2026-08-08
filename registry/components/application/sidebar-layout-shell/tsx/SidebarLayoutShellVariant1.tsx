import type { HTMLAttributes, ReactNode } from 'react'

export type TesseraComponentState = 'default' | 'loading' | 'empty' | 'error'

export type SidebarLayoutShellVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
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
export function SidebarLayoutShellVariant1({
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
}: SidebarLayoutShellVariant1Props) {
  const defaultContent = (
    <>
<aside className="flex w-56 shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3.5">
        <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-gray-900 text-xs font-bold text-white">T</span>
        <span className="truncate text-sm font-semibold text-gray-900">Tessera Inc.</span>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto p-2">
        <a href="#" className="flex items-center gap-2.5 rounded-md bg-gray-100 px-2.5 py-2 text-sm font-medium text-gray-900">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-4 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          Dashboard
        </a>
        <a href="#" className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-4 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
          </svg>
          Projects
        </a>
        <a href="#" className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-4 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
          </svg>
          Team
        </a>
        <a href="#" className="flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" className="size-4 shrink-0">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
          </svg>
          Settings
        </a>
      </nav>

      <div className="flex items-center gap-2 border-t border-gray-100 p-3">
        <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">AM</span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-medium text-gray-900">Alex Morgan</p>
          <p className="truncate text-[11px] text-gray-500">alex@acme.com</p>
        </div>
      </div>
    </aside>

    <div className="flex min-w-0 flex-1 flex-col">
      <header className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-white px-5 py-3">
        <div className="flex items-center gap-1.5 text-sm">
          <span className="text-gray-500">Projects</span>
          <span className="text-gray-300">/</span>
          <span className="font-medium text-gray-900">Design System</span>
        </div>
        <div className="flex items-center gap-3">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <span className="size-7 rounded-full bg-blue-100"></span>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="h-20 rounded-lg border border-gray-200 bg-white"></div>
          <div className="h-20 rounded-lg border border-gray-200 bg-white"></div>
          <div className="h-20 rounded-lg border border-gray-200 bg-white"></div>
        </div>
        <div className="mt-4 h-32 rounded-lg border border-gray-200 bg-white"></div>
      </main>
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
