import { useState, type ReactNode } from 'react'

export type Scene = {
  id: string
  label: string
  icon: ReactNode
}

export type SceneSelectorVariant1Props = {
  scenes: Scene[]
  defaultActiveId?: string
  onSelect?: (sceneId: string) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Grid of home-scene preset cards — icon, label, and a
 * single-select active state driven by real radiogroup state.
 */
export function SceneSelectorVariant1({
  scenes,
  defaultActiveId,
  onSelect,
  className,
}: SceneSelectorVariant1Props) {
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
                ? 'flex flex-col items-center gap-2 rounded-xl border-2 border-blue-600 bg-blue-50 p-4'
                : 'flex flex-col items-center gap-2 rounded-xl border border-gray-200 bg-white p-4 hover:bg-gray-50'
            }
          >
            <span className={isActive ? 'text-blue-600' : 'text-gray-500'}>{scene.icon}</span>
            <span className={`text-sm ${isActive ? 'font-semibold text-blue-700' : 'font-medium text-gray-700'}`}>
              {scene.label}
            </span>
          </button>
        )
      })}
    </div>
  )
}
