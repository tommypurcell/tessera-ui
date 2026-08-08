export type CookieCategory = {
  id: string
  label: string
  description: string
  checked: boolean
  locked?: boolean
  onChange?: (checked: boolean) => void
}

export type CookiePreferenceCenterVariant1Props = {
  categories: CookieCategory[]
  onSave?: () => void
  onAcceptAll?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Categorized cookie-consent panel: a locked
 * "Necessary" row always on, plus toggleable categories (Analytics, Marketing,
 * Personalization) each with a label and description, and footer Save
 * preferences / Accept all actions. Distinct from a simple cookie consent
 * banner, which is a single accept/reject bar with no per-category control.
 */
export function CookiePreferenceCenter({ categories, onSave, onAcceptAll, className }: CookiePreferenceCenterVariant1Props) {
  return (
    <div className={`w-full rounded-xl border border-gray-200 bg-white ${className ?? ''}`}>
      <div className="border-b border-gray-200 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-900">Privacy preferences</h2>
        <p className="mt-1 text-xs text-gray-500">Choose which categories of cookies you allow us to use.</p>
      </div>

      <ul className="divide-y divide-gray-200">
        {categories.map((cat) => (
          <li key={cat.id} className={`flex items-center gap-4 px-5 py-3.5 ${cat.locked ? 'opacity-70' : ''}`}>
            <div className="min-w-0 flex-1">
              {cat.locked ? (
                <p className="text-sm font-medium text-gray-900">{cat.label}</p>
              ) : (
                <label htmlFor={cat.id} className="text-sm font-medium text-gray-900">
                  {cat.label}
                </label>
              )}
              <p className="mt-0.5 text-xs text-gray-500">{cat.description}</p>
            </div>

            {cat.locked ? (
              <span className="relative block h-7 w-12 shrink-0 cursor-not-allowed rounded-full bg-green-500">
                <span className="absolute inset-y-0 start-5 m-1 size-5 rounded-full bg-white" />
              </span>
            ) : (
              <label
                className={`relative block h-7 w-12 shrink-0 rounded-full transition-colors [-webkit-tap-highlight-color:transparent] ${
                  cat.checked ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  id={cat.id}
                  checked={cat.checked}
                  onChange={(e) => cat.onChange?.(e.target.checked)}
                  className="peer sr-only"
                />
                <span className="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-5" />
              </label>
            )}
          </li>
        ))}
      </ul>

      <div className="flex gap-2 border-t border-gray-200 px-5 py-4">
        <button type="button" onClick={onSave} className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          Save preferences
        </button>
        <button type="button" onClick={onAcceptAll} className="flex-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-500">
          Accept all
        </button>
      </div>
    </div>
  )
}
