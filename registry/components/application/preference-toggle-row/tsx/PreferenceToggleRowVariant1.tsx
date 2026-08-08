export type PreferenceRow = {
  id: string
  label: string
  description: string
  checked: boolean
  locked?: boolean
  onChange?: (checked: boolean) => void
}

export type PreferenceToggleRowVariant1Props = {
  preferences: PreferenceRow[]
  className?: string
}

/**
 * Copy-and-own Tailwind component. Settings list where each row pairs a label and
 * description with a trailing switch. A locked row (e.g. a mandatory security
 * setting) renders its switch as non-interactive with reduced-opacity text,
 * distinct from the standalone Toggles primitive this composes.
 */
export function PreferenceToggleRow({ preferences, className }: PreferenceToggleRowVariant1Props) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white ${className ?? ''}`}>
      <ul className="divide-y divide-gray-200">
        {preferences.map((pref) => (
          <li key={pref.id} className={`flex items-center gap-4 px-4 py-3.5 ${pref.locked ? 'opacity-50' : ''}`}>
            <div className="min-w-0 flex-1">
              {pref.locked ? (
                <span className="block text-sm font-medium text-gray-900">{pref.label}</span>
              ) : (
                <label htmlFor={pref.id} className="block text-sm font-medium text-gray-900">
                  {pref.label}
                </label>
              )}
              <p className="mt-0.5 text-xs text-gray-500">{pref.description}</p>
            </div>

            {pref.locked ? (
              <span className="relative block h-7 w-12 shrink-0 cursor-not-allowed rounded-full bg-green-500">
                <span className="absolute inset-y-0 start-5 m-1 size-5 rounded-full bg-white" />
              </span>
            ) : (
              <label
                className={`relative block h-7 w-12 shrink-0 rounded-full transition-colors [-webkit-tap-highlight-color:transparent] ${
                  pref.checked ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  id={pref.id}
                  checked={pref.checked}
                  onChange={(e) => pref.onChange?.(e.target.checked)}
                  className="peer sr-only"
                />
                <span className="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-5" />
              </label>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
