import { useId, useMemo, useState } from 'react'

export type ComboboxOption = {
  value: string
  label: string
}

export type ComboboxVariant1Props = {
  label: string
  options?: ComboboxOption[]
  placeholder?: string
  /** Called with the selected option's value when an option is chosen. */
  onSelect?: (value: string) => void
  className?: string
}

const DEFAULT_OPTIONS: ComboboxOption[] = [
  { value: 'priya-shah', label: 'Priya Shah' },
  { value: 'preston-ng', label: 'Preston Ng' },
  { value: 'marcus-lee', label: 'Marcus Lee' },
  { value: 'dana-osei', label: 'Dana Osei' },
]

/**
 * Copy-and-own Tailwind component. Text input filtered against a real options list,
 * with a listbox of matches and a selected/no-match state driven by actual state.
 */
export function ComboboxVariant1({
  label,
  options = DEFAULT_OPTIONS,
  placeholder = 'Search…',
  onSelect,
  className,
}: ComboboxVariant1Props) {
  const [query, setQuery] = useState('')
  const [selectedValue, setSelectedValue] = useState<string | undefined>()
  const [open, setOpen] = useState(false)
  const listboxId = useId()
  const inputId = useId()

  const filtered = useMemo(
    () => options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())),
    [options, query],
  )

  const handleSelect = (option: ComboboxOption) => {
    setSelectedValue(option.value)
    setQuery(option.label)
    setOpen(false)
    onSelect?.(option.value)
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <input
          id={inputId}
          type="text"
          role="combobox"
          aria-expanded={open}
          aria-controls={listboxId}
          autoComplete="off"
          value={query}
          placeholder={placeholder}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          className="w-full rounded-md border border-gray-300 py-2 pl-3 pr-9 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
        />

        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        {open ? (
          <ul
            id={listboxId}
            role="listbox"
            aria-label={label}
            className="absolute z-10 mt-1.5 w-full overflow-hidden rounded-md border border-gray-200 bg-white py-1 shadow-lg"
          >
            {filtered.length > 0 ? (
              filtered.map((option) => {
                const isSelected = option.value === selectedValue
                return (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => handleSelect(option)}
                    className={
                      isSelected
                        ? 'flex cursor-pointer items-center justify-between gap-2 bg-blue-50 px-3 py-1.5 text-sm text-blue-700'
                        : 'cursor-pointer px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50'
                    }
                  >
                    <span>{option.label}</span>
                    {isSelected ? (
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    ) : null}
                  </li>
                )
              })
            ) : (
              <li role="option" aria-disabled="true" aria-selected="false" className="px-3 py-1.5 text-sm text-gray-400">
                No matches
              </li>
            )}
          </ul>
        ) : null}
      </div>
    </div>
  )
}
