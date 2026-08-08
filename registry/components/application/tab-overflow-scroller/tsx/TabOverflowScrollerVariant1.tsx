import { useRef } from 'react'

export type TabOverflowScrollerTab = {
  id: string
  label: string
}

export type TabOverflowScrollerVariant1Props = {
  label: string
  tabs: TabOverflowScrollerTab[]
  activeId: string
  onSelect?: (id: string) => void
}

const SCROLL_AMOUNT = 160

/**
 * Copy-and-own Tailwind component. Horizontally scrollable tab strip with
 * prev/next arrow buttons at both ends — for a fixed set of tabs too wide to
 * fit at once, distinct from application-tabs which assumes all tabs fit.
 */
export function TabOverflowScroller({ label, tabs, activeId, onSelect }: TabOverflowScrollerVariant1Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scrollBy = (amount: number) => {
    scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <div className="flex w-full items-center border-b border-gray-200">
      <button
        type="button"
        aria-label="Scroll tabs left"
        onClick={() => scrollBy(-SCROLL_AMOUNT)}
        className="flex size-9 shrink-0 items-center justify-center text-gray-400 hover:text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div ref={scrollRef} role="tablist" aria-label={label} className="flex flex-1 gap-1 overflow-x-auto">
        {tabs.map((tab) => {
          const active = tab.id === activeId
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onSelect?.(tab.id)}
              className={`relative shrink-0 px-3 py-2.5 text-sm font-medium ${
                active ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.label}
              {active ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-gray-900" aria-hidden="true" />
              ) : null}
            </button>
          )
        })}
      </div>

      <button
        type="button"
        aria-label="Scroll tabs right"
        onClick={() => scrollBy(SCROLL_AMOUNT)}
        className="flex size-9 shrink-0 items-center justify-center text-gray-700 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  )
}
