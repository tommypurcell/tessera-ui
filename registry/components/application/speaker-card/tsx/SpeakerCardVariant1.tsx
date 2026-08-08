export type SpeakerSocialLink = {
  label: string
  href: string
  icon: React.ReactNode
}

export type SpeakerCardVariant1Props = {
  initials: string
  name: string
  titleAndCompany: string
  talkTitle: string
  socialLinks: SpeakerSocialLink[]
}

/**
 * Copy-and-own Tailwind component. Conference speaker card with an initials
 * avatar, name, title/company, a quoted talk title, and a row of social link
 * icons. Pass your own icon elements per link for X/LinkedIn/website, etc.
 */
export function SpeakerCard({ initials, name, titleAndCompany, talkTitle, socialLinks }: SpeakerCardVariant1Props) {
  return (
    <div className="w-full max-w-xs rounded-xl border border-gray-200 bg-white p-5 text-center">
      <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-gray-900 text-lg font-semibold text-white">{initials}</span>

      <p className="mt-3 text-sm font-semibold text-gray-900">{name}</p>
      <p className="text-xs text-gray-500">{titleAndCompany}</p>

      <p className="mt-3 rounded-md bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700">&ldquo;{talkTitle}&rdquo;</p>

      <div className="mt-4 flex items-center justify-center gap-3">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} aria-label={link.label} className="text-gray-400 hover:text-gray-900">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
