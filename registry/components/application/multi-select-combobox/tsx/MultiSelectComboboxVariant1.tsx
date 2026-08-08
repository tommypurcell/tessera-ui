import { useId, useMemo, useRef, useState } from 'react'

export type MultiSelectComboboxOption = {
  value: string
  label: string
}

export type MultiSelectComboboxVariant1Props = {
  label: string
  options?: MultiSelectComboboxOption[]
  placeholder?: string
  /** Called with the full set of selected values whenever selection changes. */
  onChange?: (values: string[]) => void
  className?: string
}

const DEFAULT_OPTIONS: MultiSelectComboboxOption[] = [
  { value: 'priya-shah', label: 'Priya Shah' },
  { value: 'preston-ng', label: 'Preston Ng' },
  { value: 'marcus-lee', label: 'Marcus Lee' },
  { value: 'dana-osei', label: 'Dana Osei' },
  { value: 'lena-fischer', label: 'Lena Fischer' },
]

/**
 * Copy-and-own Tailwind component. Searchable dropdown that returns
 * multiple checked values, rendered as removable chips inside the input.
 * Distinct from the single-select Combobox (one value) and Tag Input
 * (free-text, no predefined option list).
 */
export function MultiSelectCombobox({
  label,
  options = DEFAULT_OPTIONS,
  placeholder = 'Search…',
  onChange,
  className,
}: MultiSelectComboboxVariant1Props) {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<MultiSelectComboboxOption[]>([])
  const [open, setOpen] = useState(false)
  const listboxId = useId()
  const inputId = useId()
  const inputRef = useRef<HTMLInputElement>(null)

  const filtered = useMemo(
    () => options.filter((o) => o.label.toLowerCase().includes(query.toLowerCase())),
    [options, query],
  )

  function toggle(option: MultiSelectComboboxOption) {
    const isSelected = selected.some((o) => o.value === option.value)
    const next = isSelected ? selected.filter((o) => o.value !== option.value) : [...selected, option]
    setSelected(next)
    setQuery('')
    onChange?.(next.map((o) => o.value))
    inputRef.current?.focus()
  }

  function remove(value: string) {
    const next = selected.filter((o) => o.value !== value)
    setSelected(next)
    onChange?.(next.map((o) => o.value))
  }

  return (
    <div className={`flex flex-col gap-1.5 ${className ?? ''}`}>
      <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <div className="relative">
        <div
          onClick={() => inputRef.current?.focus()}
          className="flex flex-wrap items-center gap-1.5 rounded-md border border-gray-300 bg-white p-1.5 shadow-sm focus-within:border-gray-500"
        >
          {selected.map((option) => (
            <span key={option.value} className="inline-flex items-center gap-1 rounded-full bg-blue-50 py-0.5 pr-1 pl-2.5 text-sm text-blue-700">
              {option.label}
              <button
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => remove(option.value)}
                aria-label={`Remove ${option.label}`}
                className="rounded-full p-0.5 hover:bg-blue-100"
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </span>
          ))}

          <input
            ref={inputRef}
            id={inputId}
            type="text"
            role="combobox"
            aria-expanded={open}
            aria-controls={listboxId}
            autoComplete="off"
            value={query}
            placeholder={selected.length === 0 ? placeholder : ''}
            onChange={(e) => {
              setQuery(e.target.value)
              setOpen(true)
            }}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            className="min-w-24 flex-1 border-0 p-1 text-sm text-gray-900 placeholder:text-gray-400 focus:ring-0 focus:outline-none"
          />
        </div>

        {open ? (
          <ul
            id={listboxId}
            role="listbox"
            aria-label={label}
            aria-multiselectable="true"
            className="absolute z-10 mt-1.5 w-full overflow-hidden rounded-md border border-gray-200 bg-white py-1 shadow-lg"
          >
            {filtered.length > 0 ? (
              filtered.map((option) => {
                const isSelected = selected.some((o) => o.value === option.value)
                return (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={isSelected}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => toggle(option)}
                    className={
                      isSelected
                        ? 'flex cursor-pointer items-center justify-between gap-2 bg-blue-50 px-3 py-1.5 text-sm text-blue-700'
                        : 'flex cursor-pointer items-center justify-between gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50'
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
