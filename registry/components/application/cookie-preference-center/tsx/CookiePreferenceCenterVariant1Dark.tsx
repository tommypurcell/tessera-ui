export type CookieCategory = {
  id: string
  label: string
  description: string
  checked: boolean
  locked?: boolean
  onChange?: (checked: boolean) => void
}

export type CookiePreferenceCenterVariant1DarkProps = {
  categories: CookieCategory[]
  onSave?: () => void
  onAcceptAll?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Categorized cookie-consent
 * panel: a locked "Necessary" row always on, plus toggleable categories each
 * with a label and description, and footer Save preferences / Accept all
 * actions.
 */
export function CookiePreferenceCenter({ categories, onSave, onAcceptAll, className }: CookiePreferenceCenterVariant1DarkProps) {
  return (
    <div className={`w-full rounded-xl border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <div className="border-b border-gray-800 px-5 py-4">
        <h2 className="text-sm font-semibold text-gray-100">Privacy preferences</h2>
        <p className="mt-1 text-xs text-gray-400">Choose which categories of cookies you allow us to use.</p>
      </div>

      <ul className="divide-y divide-gray-800">
        {categories.map((cat) => (
          <li key={cat.id} className={`flex items-center gap-4 px-5 py-3.5 ${cat.locked ? 'opacity-70' : ''}`}>
            <div className="min-w-0 flex-1">
              {cat.locked ? (
                <p className="text-sm font-medium text-gray-100">{cat.label}</p>
              ) : (
                <label htmlFor={cat.id} className="text-sm font-medium text-gray-100">
                  {cat.label}
                </label>
              )}
              <p className="mt-0.5 text-xs text-gray-400">{cat.description}</p>
            </div>

            {cat.locked ? (
              <span className="relative block h-7 w-12 shrink-0 cursor-not-allowed rounded-full bg-green-500">
                <span className="absolute inset-y-0 start-5 m-1 size-5 rounded-full bg-white" />
              </span>
            ) : (
              <label
                className={`relative block h-7 w-12 shrink-0 rounded-full transition-colors [-webkit-tap-highlight-color:transparent] ${
                  cat.checked ? 'bg-green-500' : 'bg-gray-700'
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

      <div className="flex gap-2 border-t border-gray-800 px-5 py-4">
        <button type="button" onClick={onSave} className="flex-1 rounded-md border border-gray-700 px-3 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800">
          Save preferences
        </button>
        <button type="button" onClick={onAcceptAll} className="flex-1 rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400">
          Accept all
        </button>
      </div>
    </div>
  )
}
