import { useId, useState } from 'react'

export type TeamRole = 'Owner' | 'Admin' | 'Member'

export type TeamMember = {
  id: string
  name: string
  email: string
  avatarSrc?: string
  role: TeamRole
  /** When true, the member has an outstanding invite rather than a role to assign. */
  pending?: boolean
}

export type TeamMembersListVariant1DarkProps = {
  members: TeamMember[]
  roleOptions?: TeamRole[]
  onRoleChange?: (memberId: string, role: TeamRole) => void
  onRemove?: (memberId: string) => void
  onInvite?: () => void
  className?: string
}

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function MemberRow({
  member,
  roleOptions,
  onRoleChange,
  onRemove,
}: {
  member: TeamMember
  roleOptions: TeamRole[]
  onRoleChange?: (memberId: string, role: TeamRole) => void
  onRemove?: (memberId: string) => void
}) {
  const selectId = useId()

  return (
    <li className="flex items-center gap-3 px-4 py-3">
      {member.avatarSrc ? (
        <img src={member.avatarSrc} alt="" className="size-9 shrink-0 rounded-full" />
      ) : (
        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gray-800 text-xs font-semibold text-gray-400">
          {initials(member.name)}
        </div>
      )}

      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium text-white">{member.name}</p>
        <p className="truncate text-xs text-gray-500">{member.email}</p>
      </div>

      {member.pending ? (
        <span className="rounded-full bg-amber-950 px-2 py-0.5 text-xs font-medium text-amber-400">
          Invite pending
        </span>
      ) : (
        <>
          <label className="sr-only" htmlFor={selectId}>
            Role for {member.name}
          </label>
          <select
            id={selectId}
            value={member.role}
            onChange={(e) => onRoleChange?.(member.id, e.target.value as TeamRole)}
            className="rounded-md border border-gray-700 bg-gray-900 py-1 pl-2 pr-7 text-xs font-medium text-gray-200 shadow-sm focus:border-gray-500 focus:outline-none"
          >
            {roleOptions.map((role) => (
              <option key={role}>{role}</option>
            ))}
          </select>
        </>
      )}

      <button
        type="button"
        aria-label={member.pending ? `Cancel invite for ${member.name}` : `Remove ${member.name}`}
        onClick={() => onRemove?.(member.id)}
        className="inline-flex size-7 items-center justify-center rounded-md text-gray-500 hover:bg-gray-800 hover:text-gray-200"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </li>
  )
}

/**
 * Copy-and-own Tailwind component. Row-based team management list adapted for dark
 * surfaces — avatar, name/email, a per-row role select (or pending-invite badge), and a
 * remove action.
 */
export function TeamMembersListVariant1Dark({
  members,
  roleOptions = ['Owner', 'Admin', 'Member'],
  onRoleChange,
  onRemove,
  onInvite,
  className,
}: TeamMembersListVariant1DarkProps) {
  const [items, setItems] = useState(members)

  const handleRoleChange = (memberId: string, role: TeamRole) => {
    setItems((prev) => prev.map((m) => (m.id === memberId ? { ...m, role } : m)))
    onRoleChange?.(memberId, role)
  }

  const handleRemove = (memberId: string) => {
    setItems((prev) => prev.filter((m) => m.id !== memberId))
    onRemove?.(memberId)
  }

  return (
    <div className={`rounded-xl border border-gray-800 bg-gray-950 shadow-sm ${className ?? ''}`}>
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
        <h3 className="text-sm font-semibold text-white">Team members</h3>
        <button
          type="button"
          onClick={onInvite}
          className="rounded-md bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-500"
        >
          Invite member
        </button>
      </div>

      <ul className="divide-y divide-gray-800">
        {items.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            roleOptions={roleOptions}
            onRoleChange={handleRoleChange}
            onRemove={handleRemove}
          />
        ))}
      </ul>
    </div>
  )
}
