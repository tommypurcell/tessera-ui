import { useRef, useState, type ReactNode } from 'react'

export type PersonHovercardVariant1Props = {
  trigger: ReactNode
  avatarSrc: string
  name: string
  handle: string
  role: string
  bio: string
  following: number
  followers: number
  socialLinks?: { label: string; href: string; icon: ReactNode }[]
  onFollow?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Rich profile popover shown on hover/focus of a
 * trigger (e.g. an avatar or @mention): avatar, name/handle/role, bio, follower
 * counts, a Follow action, and social links. Distinct from the generic Hover
 * Card, which previews arbitrary link/page content rather than a person profile.
 */
export function PersonHovercard({
  trigger,
  avatarSrc,
  name,
  handle,
  role,
  bio,
  following,
  followers,
  socialLinks = [],
  onFollow,
  className,
}: PersonHovercardVariant1Props) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const show = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const hide = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 100)
  }

  return (
    <span className={`relative inline-block ${className ?? ''}`} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide}>
      {trigger}

      {open ? (
        <div role="tooltip" className="absolute left-0 top-full z-20 mt-2 w-80 rounded-xl border border-gray-200 bg-white p-5 shadow-lg">
          <div className="flex items-start gap-3">
            <img src={avatarSrc} alt="" className="h-14 w-14 shrink-0 rounded-full object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-gray-900">{name}</p>
              <p className="truncate text-xs text-gray-500">
                @{handle} &middot; {role}
              </p>
            </div>
            <button
              type="button"
              onClick={onFollow}
              className="shrink-0 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-500"
            >
              Follow
            </button>
          </div>

          <p className="mt-3 text-sm text-gray-600">{bio}</p>

          <div className="mt-4 flex items-center gap-4 text-xs">
            <span className="text-gray-700">
              <span className="font-semibold text-gray-900">{following.toLocaleString()}</span> Following
            </span>
            <span className="text-gray-700">
              <span className="font-semibold text-gray-900">{followers.toLocaleString()}</span> Followers
            </span>
          </div>

          {socialLinks.length ? (
            <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-3">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} aria-label={link.label} className="text-gray-400 hover:text-gray-600">
                  {link.icon}
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </span>
  )
}
