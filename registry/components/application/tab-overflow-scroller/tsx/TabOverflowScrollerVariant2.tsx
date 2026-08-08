export type TabOverflowScrollerTab = {
  id: string
  label: string
}

export type TabOverflowScrollerVariant2Props = {
  label: string
  tabs: TabOverflowScrollerTab[]
  activeId: string
  onSelect?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Horizontally scrollable tab strip with an
 * edge-fade gradient signaling more tabs off-screen, relying on native
 * touch/trackpad scrolling instead of arrow buttons.
 */
export function TabOverflowScroller({ label, tabs, activeId, onSelect }: TabOverflowScrollerVariant2Props) {
  return (
    <div className="relative w-full border-b border-gray-200">
      <div role="tablist" aria-label={label} className="flex gap-1 overflow-x-auto px-1">
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
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent"
        aria-hidden="true"
      />
    </div>
  )
}
