export type ThemeOption = 'light' | 'dark' | 'system'

export type ThemeToggleSwitchVariant1DarkProps = {
  value: ThemeOption
  onChange: (value: ThemeOption) => void
  name?: string
  className?: string
}

const options: { value: ThemeOption; label: string; icon: JSX.Element }[] = [
  {
    value: 'light',
    label: 'Light',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 9a1 1 0 100 2h1a1 1 0 100-2h-1zM4.464 4.343a1 1 0 010 1.414L3.757 6.464A1 1 0 112.343 5.05l.707-.707a1 1 0 011.414 0zM10 17a1 1 0 011-1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 15.536a1 1 0 001.414 0l.707-.707a1 1 0 00-1.414-1.414l-.707.707a1 1 0 000 1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1z" />
      </svg>
    ),
  },
  {
    value: 'dark',
    label: 'Dark',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    value: 'system',
    label: 'System',
    icon: (
      <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M2 4.25A2.25 2.25 0 014.25 2h11.5A2.25 2.25 0 0118 4.25v8.5A2.25 2.25 0 0115.75 15h-3.105a3.501 3.501 0 001.1 1.677A.75.75 0 0113.26 18H6.74a.75.75 0 01-.484-1.323A3.501 3.501 0 007.355 15H4.25A2.25 2.25 0 012 12.75v-8.5zm1.5 0a.75.75 0 01.75-.75h11.5a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H4.25a.75.75 0 01-.75-.75v-7.5z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
]

/**
 * Copy-and-own Tailwind component (dark surface). Three-way Light/Dark/System
 * theme selector built as a real radio group; the selected option gets a
 * contrasting pill background while the others sit flush against the track.
 */
export function ThemeToggleSwitch({ value, onChange, name = 'theme', className }: ThemeToggleSwitchVariant1DarkProps) {
  return (
    <fieldset className={`inline-flex rounded-lg bg-gray-800 p-1 ${className ?? ''}`} role="radiogroup" aria-label="Theme">
      <legend className="sr-only">Theme</legend>
      {options.map((opt) => {
        const selected = value === opt.value
        return (
          <label
            key={opt.value}
            className={`relative flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
              selected ? 'bg-gray-950 text-gray-100 shadow-sm' : 'text-gray-400 hover:text-gray-200'
            }`}
          >
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={selected}
              onChange={() => onChange(opt.value)}
              className="sr-only"
            />
            {opt.icon}
            {opt.label}
          </label>
        )
      })}
    </fieldset>
  )
}
