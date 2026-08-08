import { useState } from 'react'

export type Locale = {
  code: string
  label: string
  flag: string
}

export type LanguageSwitcherVariant1Props = {
  locales: Locale[]
  defaultLocale?: string
  onSelect?: (code: string) => void
  className?: string
}

const DEFAULT_LOCALES: Locale[] = [
  { code: 'en-US', label: 'English (US)', flag: '🇺🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'pt-BR', label: 'Português (BR)', flag: '🇧🇷' },
]

/**
 * Copy-and-own Tailwind component. Language/locale switcher list — flag, label, and a
 * checkmark on the active locale, driven by real selection state.
 */
export function LanguageSwitcherVariant1({
  locales = DEFAULT_LOCALES,
  defaultLocale,
  onSelect,
  className,
}: LanguageSwitcherVariant1Props) {
  const [active, setActive] = useState(defaultLocale ?? locales[0]?.code)

  const handleSelect = (code: string) => {
    setActive(code)
    onSelect?.(code)
  }

  return (
    <div className={`w-56 rounded-xl border border-gray-200 bg-white shadow-lg ${className ?? ''}`}>
      <ul role="listbox" aria-label="Language">
        {locales.map((locale) => {
          const isActive = locale.code === active
          return (
            <li key={locale.code}>
              <button
                type="button"
                role="option"
                aria-selected={isActive}
                onClick={() => handleSelect(locale.code)}
                className="flex w-full items-center gap-2.5 px-3 py-2 text-left hover:bg-gray-50"
              >
                <span aria-hidden="true" className="text-lg leading-none">
                  {locale.flag}
                </span>
                <span className={`min-w-0 flex-1 text-sm ${isActive ? 'font-medium text-gray-900' : 'text-gray-700'}`}>
                  {locale.label}
                </span>
                {isActive ? (
                  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 shrink-0 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                ) : null}
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
