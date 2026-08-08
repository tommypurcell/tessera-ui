import type { HTMLAttributes } from 'react'

export type AvatarGroupMember = {
  name: string
  imageUrl?: string
}

export type AvatarGroupVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  members: AvatarGroupMember[]
  max?: number
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

/**
 * Copy-and-own Tailwind component. Overlapping avatar cluster adapted for
 * dark surfaces, with the same real member-list contract as the light
 * variant — pass more members than `max` to collapse the rest into "+N".
 */
export function AvatarGroupDark({ className, members, max = 4, ...props }: AvatarGroupVariant1DarkProps) {
  const visible = members.slice(0, max)
  const overflow = members.slice(max)

  return (
    <div className={`flex items-center -space-x-2 ${className ?? ''}`} {...props}>
      {visible.map((member) => (
        <span
          key={member.name}
          title={member.name}
          className="relative inline-flex size-9 items-center justify-center rounded-full ring-2 ring-gray-900"
        >
          {member.imageUrl ? (
            <img
              src={member.imageUrl}
              alt={member.name}
              className="size-9 rounded-full object-cover"
            />
          ) : (
            <span className="flex size-9 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-gray-200">
              {initials(member.name)}
            </span>
          )}
        </span>
      ))}

      {overflow.length > 0 ? (
        <span
          title={overflow.map((member) => member.name).join(', ')}
          className="relative inline-flex size-9 items-center justify-center rounded-full bg-gray-800 text-xs font-medium text-gray-300 ring-2 ring-gray-900"
        >
          +{overflow.length}
        </span>
      ) : null}
    </div>
  )
}
