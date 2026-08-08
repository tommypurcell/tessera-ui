export type SpeakerSocialLinkDark = {
  label: string
  href: string
  icon: React.ReactNode
}

export type SpeakerCardVariant1DarkProps = {
  initials: string
  name: string
  titleAndCompany: string
  talkTitle: string
  socialLinks: SpeakerSocialLinkDark[]
}

/**
 * Copy-and-own Tailwind component. Conference speaker card with an initials
 * avatar, name, title/company, a quoted talk title, and a row of social link
 * icons. Pass your own icon elements per link for X/LinkedIn/website, etc.
 */
export function SpeakerCardDark({ initials, name, titleAndCompany, talkTitle, socialLinks }: SpeakerCardVariant1DarkProps) {
  return (
    <div className="w-full max-w-xs rounded-xl border border-gray-700 bg-gray-900 p-5 text-center">
      <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-gray-100 text-lg font-semibold text-gray-900">{initials}</span>

      <p className="mt-3 text-sm font-semibold text-white">{name}</p>
      <p className="text-xs text-gray-400">{titleAndCompany}</p>

      <p className="mt-3 rounded-md bg-gray-800 px-3 py-2 text-xs font-medium text-gray-200">&ldquo;{talkTitle}&rdquo;</p>

      <div className="mt-4 flex items-center justify-center gap-3">
        {socialLinks.map((link) => (
          <a key={link.label} href={link.href} aria-label={link.label} className="text-gray-500 hover:text-white">
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}
