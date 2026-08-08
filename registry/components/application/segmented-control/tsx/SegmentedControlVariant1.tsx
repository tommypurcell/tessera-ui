import { useId, useRef, useState, type KeyboardEvent } from 'react'

export type SegmentedControlOption = {
  value: string
  label: string
}

export type SegmentedControlVariant1Props = {
  options: SegmentedControlOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  label: string
  className?: string
}

/**
 * Copy-and-own Tailwind component. iOS-style single-select segmented control with
 * roving-tabindex keyboard navigation. Controlled via `value`/`onChange` or
 * uncontrolled via `defaultValue`. Renders as a real radiogroup.
 */
export function SegmentedControl({
  options,
  value,
  defaultValue,
  onChange,
  label,
  className,
}: SegmentedControlVariant1Props) {
  const groupId = useId()
  const refs = useRef<Array<HTMLButtonElement | null>>([])
  const [internal, setInternal] = useState(defaultValue ?? options[0]?.value)
  const selected = value ?? internal

  function select(next: string) {
    if (value === undefined) setInternal(next)
    onChange?.(next)
  }

  function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') nextIndex = (index + 1) % options.length
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') nextIndex = (index - 1 + options.length) % options.length
    else if (event.key === 'Home') nextIndex = 0
    else if (event.key === 'End') nextIndex = options.length - 1

    if (nextIndex !== null) {
      event.preventDefault()
      const option = options[nextIndex]
      select(option.value)
      refs.current[nextIndex]?.focus()
    }
  }

  return (
    <div
      role="radiogroup"
      aria-label={label}
      className={`inline-flex items-center gap-1 rounded-lg bg-gray-100 p-1 ${className ?? ''}`}
    >
      {options.map((option, index) => {
        const isSelected = option.value === selected
        return (
          <button
            key={option.value}
            ref={(node) => {
              refs.current[index] = node
            }}
            type="button"
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            id={`${groupId}-${option.value}`}
            onClick={() => select(option.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
            className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1 focus-visible:ring-offset-gray-100 ${
              isSelected
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
