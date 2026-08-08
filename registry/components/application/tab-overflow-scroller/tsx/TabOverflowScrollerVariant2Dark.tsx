export type TabOverflowScrollerTab = {
  id: string
  label: string
}

export type TabOverflowScrollerVariant2DarkProps = {
  label: string
  tabs: TabOverflowScrollerTab[]
  activeId: string
  onSelect?: (id: string) => void
}

/**
 * Copy-and-own Tailwind component. Edge-fade scrollable tab strip adapted
 * for dark surfaces.
 */
export function TabOverflowScroller({
  label,
  tabs,
  activeId,
  onSelect,
}: TabOverflowScrollerVariant2DarkProps) {
  return (
    <div className="relative w-full border-b border-gray-800">
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
                active ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
              {active ? (
                <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-white" aria-hidden="true" />
              ) : null}
            </button>
          )
        })}
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-950 to-transparent"
        aria-hidden="true"
      />
    </div>
  )
}
