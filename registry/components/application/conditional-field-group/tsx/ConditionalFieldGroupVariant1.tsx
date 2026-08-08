import { useState, type ReactNode } from 'react'

export type ConditionalFieldGroupVariant1Props = {
  label: string
  description?: string
  defaultChecked?: boolean
  children: ReactNode
  onToggle?: (checked: boolean) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Form section gated by a controlling checkbox:
 * when checked, an indented field group (any children) reveals below with a
 * connecting rail; when unchecked, an optional helper description explains the
 * fallback behavior instead. Uncontrolled by default via defaultChecked, but
 * fires onToggle so a parent can drive it as a controlled field.
 */
export function ConditionalFieldGroup({ label, description, defaultChecked = false, children, onToggle, className }: ConditionalFieldGroupVariant1Props) {
  const [checked, setChecked] = useState(defaultChecked)

  return (
    <div className={`rounded-lg border border-gray-200 p-4 ${className ?? ''}`}>
      <label className="flex items-start gap-2.5">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            setChecked(e.target.checked)
            onToggle?.(e.target.checked)
          }}
          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
        <span className="text-sm font-medium text-gray-900">{label}</span>
      </label>

      {checked ? (
        <div className="mt-3 ml-6.5 flex flex-col gap-3 border-l border-gray-200 pl-4">{children}</div>
      ) : description ? (
        <p className="mt-1 ml-6.5 text-xs text-gray-500">{description}</p>
      ) : null}
    </div>
  )
}
