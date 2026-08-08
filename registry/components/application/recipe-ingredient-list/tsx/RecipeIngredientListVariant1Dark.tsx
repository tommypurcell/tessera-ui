import { useState } from 'react'

export type Ingredient = {
  id: string
  name: string
  baseQuantity: number
  unit?: string
}

export type RecipeIngredientListVariant1DarkProps = {
  ingredients: Ingredient[]
  baseServings: number
  minServings?: number
  maxServings?: number
  className?: string
}

function formatQuantity(value: number) {
  const rounded = Math.round(value * 100) / 100
  return String(rounded)
}

function pluralizeUnit(unit: string | undefined, quantity: number) {
  if (!unit) return unit
  return quantity === 1 ? unit : `${unit}s`
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the recipe ingredient list.
 */
export function RecipeIngredientListVariant1Dark({ ingredients, baseServings, minServings = 1, maxServings = 12, className }: RecipeIngredientListVariant1DarkProps) {
  const [servings, setServings] = useState(baseServings)
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  function toggleChecked(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className={`flex w-full max-w-sm flex-col gap-3 rounded-lg border border-gray-800 bg-gray-950 p-5 ${className ?? ''}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-medium text-white">Ingredients</h2>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Decrease servings"
            disabled={servings <= minServings}
            onClick={() => setServings((s) => Math.max(minServings, s - 1))}
            className="flex size-6 items-center justify-center rounded-md border border-gray-700 text-gray-400 hover:bg-gray-900 disabled:opacity-40"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          </button>
          <span className="w-20 shrink-0 text-center text-xs text-gray-400">
            {servings} {servings === 1 ? 'serving' : 'servings'}
          </span>
          <button
            type="button"
            aria-label="Increase servings"
            disabled={servings >= maxServings}
            onClick={() => setServings((s) => Math.min(maxServings, s + 1))}
            className="flex size-6 items-center justify-center rounded-md border border-gray-700 text-gray-400 hover:bg-gray-900 disabled:opacity-40"
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>

      <ul className="flex flex-col gap-1.5">
        {ingredients.map((ingredient) => {
          const isChecked = checked[ingredient.id] ?? false
          const scaledQuantity = ingredient.baseQuantity * (servings / baseServings)
          return (
            <li key={ingredient.id}>
              <label className="flex cursor-pointer items-center gap-2.5 rounded-md px-1.5 py-1 hover:bg-gray-900">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggleChecked(ingredient.id)}
                  className="size-4 shrink-0 rounded border-gray-700 bg-gray-950 text-blue-500 focus:ring-blue-500"
                />
                <span className={`text-sm ${isChecked ? 'text-gray-500 line-through' : 'text-gray-200'}`}>
                  <span className="font-medium text-white">
                    {formatQuantity(scaledQuantity)}
                    {ingredient.unit ? ` ${pluralizeUnit(ingredient.unit, scaledQuantity)}` : ''}
                  </span>{' '}
                  {ingredient.name}
                </span>
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
