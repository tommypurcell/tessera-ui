import { useState, type ReactNode } from 'react'

export type Scene = {
  id: string
  label: string
  icon: ReactNode
}

export type SceneSelectorVariant1DarkProps = {
  scenes: Scene[]
  defaultActiveId?: string
  onSelect?: (sceneId: string) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Grid of home-scene preset cards adapted for dark
 * surfaces — icon, label, and a single-select active state.
 */
export function SceneSelectorVariant1Dark({
  scenes,
  defaultActiveId,
  onSelect,
  className,
}: SceneSelectorVariant1DarkProps) {
  const [active, setActive] = useState(defaultActiveId ?? scenes[0]?.id)

  const handleSelect = (id: string) => {
    setActive(id)
    onSelect?.(id)
  }

  return (
    <div role="radiogroup" aria-label="Scene" className={`grid grid-cols-2 gap-3 ${className ?? ''}`}>
      {scenes.map((scene) => {
        const isActive = scene.id === active
        return (
          <button
            key={scene.id}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => handleSelect(scene.id)}
            className={
              isActive
                ? 'flex flex-col items-center gap-2 rounded-xl border-2 border-blue-500 bg-blue-950 p-4'
                : 'flex flex-col items-center gap-2 rounded-xl border border-gray-800 bg-gray-950 p-4 hover:bg-gray-900'
            }
          >
            <span className={isActive ? 'text-blue-400' : 'text-gray-400'}>{scene.icon}</span>
            <span className={`text-sm ${isActive ? 'font-semibold text-blue-300' : 'font-medium text-gray-200'}`}>
              {scene.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
