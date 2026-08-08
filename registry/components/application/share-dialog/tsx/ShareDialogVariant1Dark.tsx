import type { HTMLAttributes } from 'react'

export type ShareDialogRole = 'Owner' | 'Can edit' | 'Can view'

export type ShareDialogMember = {
  id: string
  name: string
  email: string
  initials: string
  role: ShareDialogRole
  roleEditable?: boolean
}

export type ShareDialogVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'title'> & {
  title: string
  roleOptions?: ShareDialogRole[]
  members: ShareDialogMember[]
  linkAccessLabel: string
  onInvite?: (email: string, role: ShareDialogRole) => void
  onRoleChange?: (member: ShareDialogMember, role: ShareDialogRole) => void
  onCopyLink?: () => void
}

/**
 * Copy-and-own Tailwind component. Invite dialog taking a real
 * members/role contract — pass your own project data instead of hand-editing markup.
 */
export function ShareDialogDark({
  className,
  title,
  roleOptions = ['Can edit', 'Can view'],
  members,
  linkAccessLabel,
  onInvite,
  onRoleChange,
  onCopyLink,
  ...props
}: ShareDialogVariant1DarkProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="share-dialog-title"
      className={`w-full max-w-sm rounded-xl border border-gray-800 bg-gray-900 p-6 shadow-2xl ${className ?? ''}`}
      {...props}
    >
      <h2 id="share-dialog-title" className="text-base font-semibold text-white">
        {title}
      </h2>

      <div className="mt-4 flex gap-2">
        <input
          type="email"
          placeholder="Email address"
          className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-white shadow-sm placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
        />
        <select className="rounded-md border border-gray-700 bg-gray-900 px-2.5 py-2 text-sm text-white shadow-sm focus:border-gray-500 focus:outline-none">
          {roleOptions.map((role) => (
            <option key={role}>{role}</option>
          ))}
        </select>
        <button type="button" onClick={() => onInvite?.('', roleOptions[0])} className="shrink-0 rounded-md bg-white px-3.5 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200">
          Invite
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-3">
        {members.map((member) => (
          <div key={member.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs font-medium text-gray-300">{member.initials}</span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">{member.name}</p>
                <p className="truncate text-xs text-gray-500">{member.email}</p>
              </div>
            </div>
            {member.roleEditable ? (
              <select
                value={member.role}
                onChange={(event) => onRoleChange?.(member, event.target.value as ShareDialogRole)}
                className="shrink-0 rounded-md border border-gray-700 bg-gray-900 px-2 py-1 text-xs text-gray-300 focus:border-gray-500 focus:outline-none"
              >
                {roleOptions.map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            ) : (
              <span className="shrink-0 text-xs font-medium text-gray-400">{member.role}</span>
            )}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between gap-3 rounded-lg bg-gray-800 px-3 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4 shrink-0 text-gray-400">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
            />
          </svg>
          <span className="truncate text-xs text-gray-400">{linkAccessLabel}</span>
        </div>
        <button type="button" onClick={onCopyLink} className="shrink-0 text-xs font-medium text-white hover:underline">
          Copy link
        </button>
      </div>
    </div>
  )
}
