import type { ReactNode } from 'react'

export type ItemAction =
  | { kind: 'link'; href: string }
  | { kind: 'button'; label: string; onClick?: () => void }
  | { kind: 'checkbox'; checked: boolean; onChange?: (checked: boolean) => void }
  | { kind: 'none' }

export type ItemVariant1DarkProps = {
  icon?: ReactNode
  avatarSrc?: string
  title: string
  description?: string
  action?: ItemAction
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Composable row: icon or avatar slot,
 * title/description text block, and a trailing action (link chevron, button, or checkbox).
 */
export function Item({ icon, avatarSrc, title, description, action = { kind: 'none' }, className }: ItemVariant1DarkProps) {
  const media = avatarSrc ? (
    <img src={avatarSrc} alt="" className="h-9 w-9 shrink-0 rounded-full object-cover" />
  ) : icon ? (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-400">{icon}</span>
  ) : null

  const content = (
    <>
      {media}
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-medium text-gray-100">{title}</span>
        {description ? <span className="block truncate text-xs text-gray-400">{description}</span> : null}
      </span>
      {action.kind === 'link' ? (
        <svg className="h-4 w-4 shrink-0 text-gray-500" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
          className="shrink-0 rounded-md border border-gray-700 px-2.5 py-1 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800"
        >
          {action.label}
        </button>
      ) : action.kind === 'checkbox' ? (
        <input
          type="checkbox"
          checked={action.checked}
          onChange={(e) => action.onChange?.(e.target.checked)}
          className="h-4 w-4 shrink-0 rounded border-gray-700 bg-gray-900 text-indigo-500 focus:ring-indigo-400"
        />
      ) : null}
    </>
  )

  const rowClassName = `flex items-center gap-3 px-4 py-3 ${className ?? ''}`

  if (action.kind === 'link') {
    return (
      <a href={action.href} className={`${rowClassName} hover:bg-gray-900`}>
        {content}
      </a>
    )
  }

  if (action.kind === 'checkbox') {
    return <label className={`${rowClassName} cursor-pointer hover:bg-gray-900`}>{content}</label>
  }

  return <div className={rowClassName}>{content}</div>
}
