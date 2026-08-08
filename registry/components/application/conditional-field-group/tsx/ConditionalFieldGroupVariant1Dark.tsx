import { useState, type ReactNode } from 'react'

export type ConditionalFieldGroupVariant1DarkProps = {
  label: string
  description?: string
  defaultChecked?: boolean
  children: ReactNode
  onToggle?: (checked: boolean) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Form section gated by a
 * controlling checkbox: when checked, an indented field group reveals below
 * with a connecting rail; when unchecked, an optional helper description
 * explains the fallback behavior instead.
 */
export function ConditionalFieldGroup({ label, description, defaultChecked = false, children, onToggle, className }: ConditionalFieldGroupVariant1DarkProps) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <div className={`rounded-lg border border-gray-800 p-4 ${className ?? ''}`}>
      <label className="flex items-start gap-2.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked)
            onToggle?.(e.target.checked)
          }}
          className="mt-0.5 h-4 w-4 rounded border-gray-700 bg-gray-950 text-indigo-500 focus:ring-indigo-400"
        />
        <span className="text-sm font-medium text-gray-100">{label}</span>
      </label>

      {checked ? (
        <div className="mt-3 ml-6.5 flex flex-col gap-3 border-l border-gray-800 pl-4">{children}</div>
      ) : description ? (
        <p className="mt-1 ml-6.5 text-xs text-gray-400">{description}</p>
      ) : null}
    </div>
  )
}
