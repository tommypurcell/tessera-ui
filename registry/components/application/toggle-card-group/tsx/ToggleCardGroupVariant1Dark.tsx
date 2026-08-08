export type ToggleCardOptionDark = {
  value: string
  title: string
  description: string
}

export type ToggleCardGroupVariant1DarkProps = {
  name: string
  legend: string
  options: ToggleCardOptionDark[]
  value: string
  onChange?: (value: string) => void
}

/**
 * Copy-and-own Tailwind component. Grid of selectable cards backed by native
 * radio inputs, each showing a title, description, and a checkmark badge when
 * selected. Richer than a plain radio-group list for choices that need more
 * explanatory copy per option (plans, modes, templates).
 */
export function ToggleCardGroupDark({ name, legend, options, value, onChange }: ToggleCardGroupVariant1DarkProps) {
  return (
    <fieldset className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <legend className="sr-only">{legend}</legend>

      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={`${name}-${option.value}`}
          className="relative flex cursor-pointer flex-col gap-1 rounded-lg border border-gray-700 bg-gray-900 p-4 shadow-sm transition-colors hover:bg-gray-800 has-checked:border-blue-300 has-checked:ring-1 has-checked:ring-blue-300"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            id={`${name}-${option.value}`}
            checked={value === option.value}
            onChange={(event) => onChange?.(event.target.value)}
            className="peer sr-only"
          />
          <span
            aria-hidden="true"
            className="absolute right-3 top-3 flex size-5 items-center justify-center rounded-full border border-gray-600 text-gray-900 opacity-0 peer-checked:border-blue-300 peer-checked:bg-blue-300 peer-checked:opacity-100"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-white">{option.title}</span>
          <span className="text-xs leading-relaxed text-gray-400">{option.description}</span>
        </label>
      ))}
    </fieldset>
  )
}
