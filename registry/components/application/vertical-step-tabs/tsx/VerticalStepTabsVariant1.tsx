import { useState } from 'react'

export type VerticalStepTab = {
  id: string
  label: string
  content: React.ReactNode
}

export type VerticalStepTabsVariant1Props = {
  tabs: VerticalStepTab[]
}

/**
 * Copy-and-own Tailwind component. Left rail of numbered, freely-navigable
 * tabs that swap the right-pane content — unlike a linear wizard, any step
 * can be selected at any time.
 */
export function VerticalStepTabs({ tabs }: VerticalStepTabsVariant1Props) {
  const [activeId, setActiveId] = useState(tabs[0]?.id)
  const active = tabs.find((tab) => tab.id === activeId) ?? tabs[0]

  return (
    <div className="flex w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
      <div role="tablist" aria-label="Sections" aria-orientation="vertical" className="w-52 shrink-0 border-r border-gray-200 bg-gray-50 p-3">
        {tabs.map((tab, index) => {
          const isActive = tab.id === active.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(tab.id)}
              className={
                isActive
                  ? 'flex w-full items-center gap-3 rounded-md bg-white px-3 py-2.5 text-left text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-200'
                  : 'mt-1 flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-sm font-medium text-gray-600 hover:bg-gray-100 first:mt-0'
              }
            >
              <span
                className={
                  isActive
                    ? 'flex size-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white'
                    : 'flex size-6 shrink-0 items-center justify-center rounded-full border border-gray-300 text-xs font-semibold text-gray-500'
                }
              >
                {index + 1}
              </span>
              {tab.label}
            </button>
          )
        })}
      </div>

      <div role="tabpanel" className="flex-1 p-6">
        {active.content}
      </div>
    </div>
  )
}
