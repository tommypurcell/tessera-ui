import type { HTMLAttributes } from 'react'

export type ToolbarAction = {
  text: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
  disabled?: boolean
}

export type ToolbarVariant1DarkProps = Omit<HTMLAttributes<HTMLElement>, 'children'> & {
  title: string
  description?: string
  actions?: ToolbarAction[]
}

const actionStyles: Record<NonNullable<ToolbarAction['variant']>, string> = {
  primary: 'bg-white text-gray-900 hover:bg-gray-200',
  secondary: 'border border-gray-700 bg-gray-900 text-gray-200 hover:bg-gray-800',
}

/**
 * Copy-and-own Tailwind component. Page/section header with a title, optional
 * description, and a row of typed actions — pass real handlers, not placeholder buttons.
 */
export function ToolbarDark({ className, title, description, actions = [], ...props }: ToolbarVariant1DarkProps) {
  return (
    <div
      className={`flex flex-col gap-4 border-b border-gray-800 pb-4 sm:flex-row sm:items-center sm:justify-between ${className ?? ''}`}
      {...props}
    >
      <div>
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        {description ? <p className="mt-1 text-sm text-gray-400">{description}</p> : null}
      </div>

      {actions.length ? (
        <div className="flex flex-wrap items-center gap-2">
          {actions.map((action) => (
            <button
              key={action.text}
              type="button"
              onClick={action.onClick}
              disabled={action.disabled}
              className={`rounded-md px-3 py-2 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-50 ${actionStyles[action.variant ?? 'secondary']}`}
            >
              {action.text}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
