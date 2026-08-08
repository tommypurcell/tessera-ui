export type CookieCategoryDark = {
  id: string
  label: string
  description: string
  checked: boolean
  disabled?: boolean
}

export type CookieConsentVariant2DarkProps = {
  categories: CookieCategoryDark[]
  onCategoryChange?: (id: string, checked: boolean) => void
  onBack?: () => void
  onSave?: () => void
}

/**
 * Copy-and-own Tailwind component. Expanded cookie preferences panel with a
 * per-category toggle list (essential is always on/disabled) and a save action.
 * Pairs with CookieConsentDark's "Customize" button.
 */
export function CookieConsentPreferencesDark({ categories, onCategoryChange, onBack, onSave }: CookieConsentVariant2DarkProps) {
  return (
    <div role="dialog" aria-label="Cookie preferences" className="w-full border-t border-gray-700 bg-gray-900 p-5 shadow-[0_-4px_16px_-4px_rgba(0,0,0,0.4)]">
      <div className="mx-auto flex max-w-2xl flex-col gap-4">
        <div>
          <h2 className="text-sm font-semibold text-white">Manage cookie preferences</h2>
          <p className="mt-1 text-sm text-gray-400">Essential cookies are always on. Choose which other categories to allow.</p>
        </div>

        <div className="flex flex-col divide-y divide-gray-800 rounded-lg border border-gray-700">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center justify-between gap-4 p-3.5">
              <div>
                <p className="text-sm font-medium text-white">{category.label}</p>
                <p className="text-xs text-gray-400">{category.description}</p>
              </div>
              <label
                htmlFor={category.id}
                className={`relative block h-8 w-12 shrink-0 [-webkit-tap-highlight-color:transparent] ${category.disabled ? 'opacity-60' : ''}`}
              >
                <input
                  type="checkbox"
                  id={category.id}
                  checked={category.checked}
                  disabled={category.disabled}
                  onChange={(event) => onCategoryChange?.(category.id, event.target.checked)}
                  className="peer sr-only"
                />
                <span className={`absolute inset-0 m-auto h-2 rounded-full ${category.checked ? 'bg-blue-300' : 'bg-gray-700'}`} />
                <span
                  className={`absolute inset-y-0 start-0 m-auto size-6 rounded-full bg-white shadow transition-[inset-inline-start] ${category.checked ? 'start-6' : ''}`}
                />
              </label>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2.5">
          <button
            type="button"
            onClick={onBack}
            className="rounded-md border border-gray-600 bg-gray-800 px-3.5 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-700"
          >
            Back
          </button>
          <button
            type="button"
            onClick={onSave}
            className="rounded-md bg-blue-300 px-3.5 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-blue-200"
          >
            Save preferences
          </button>
        </div>
      </div>
    </div>
  )
}
