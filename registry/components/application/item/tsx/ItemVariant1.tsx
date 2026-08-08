import type { ReactNode } from 'react'

export type ItemAction =
  | { kind: 'link'; href: string }
  | { kind: 'button'; label: string; onClick?: () => void }
  | { kind: 'checkbox'; checked: boolean; onChange?: (checked: boolean) => void }
  | { kind: 'none' }

export type ItemVariant1Props = {
  icon?: ReactNode
  avatarSrc?: string
  title: string
  description?: string
  action?: ItemAction
  className?: string
}

/**
 * Copy-and-own Tailwind component. Composable row: icon or avatar slot, title/description
 * text block, and a trailing action (link chevron, button, or checkbox). Meant to be
 * stacked inside a divided list container for settings rows, member rows, or option rows.
 */
export function Item({ icon, avatarSrc, title, description, action = { kind: 'none' }, className }: ItemVariant1Props) {
  const media = avatarSrc ? (
    <img src={avatarSrc} alt="" className="h-9 w-9 shrink-0 rounded-full object-cover" />
  ) : icon ? (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-50 text-indigo-600">{icon}</span>
  ) : null

  const content = (
    <>
      {media}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-gray-900">{title}</span>
        {description ? <span className="block truncate text-xs text-gray-500">{description}</span> : null}
      </span>
      {action.kind === 'link' ? (
        <svg className="h-4 w-4 shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      ) : action.kind === 'button' ? (
        <button
          type="button"
          onClick={action.onClick}
          className="shrink-0 rounded-md border border-gray-300 px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          {action.label}
        </button>
      ) : action.kind === 'checkbox' ? (
        <input
          type="checkbox"
          checked={action.checked}
          onChange={(e) => action.onChange?.(e.target.checked)}
          className="h-4 w-4 shrink-0 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        />
      ) : null}
    </>
  )

  const rowClassName = `flex items-center gap-3 px-4 py-3 ${className ?? ''}`

  if (action.kind === 'link') {
    return (
      <a href={action.href} className={`${rowClassName} hover:bg-gray-50`}>
        {content}
      </a>
    )
  }

  if (action.kind === 'checkbox') {
    return <label className={`${rowClassName} cursor-pointer hover:bg-gray-50`}>{content}</label>
  }

  return <div className={rowClassName}>{content}</div>
}
