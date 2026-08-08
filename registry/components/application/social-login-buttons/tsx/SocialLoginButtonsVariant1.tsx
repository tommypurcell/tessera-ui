export type SocialProvider = 'google' | 'github' | 'apple'

export type SocialLoginButtonsVariant1Props = {
  providers?: SocialProvider[]
  onSelect?: (provider: SocialProvider) => void
  showDivider?: boolean
  dividerLabel?: string
  className?: string
}

const labels: Record<SocialProvider, string> = {
  google: 'Continue with Google',
  github: 'Continue with GitHub',
  apple: 'Continue with Apple',
}

function ProviderIcon({ provider }: { provider: SocialProvider }) {
  if (provider === 'google') {
    return (
      <svg className="h-4 w-4" viewBox="0 0 18 18" aria-hidden="true">
        <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 01-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" />
        <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z" />
        <path fill="#FBBC05" d="M3.964 10.706A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.706V4.962H.957A8.997 8.997 0 000 9c0 1.452.348 2.827.957 4.038l3.007-2.332z" />
        <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.962L3.964 7.294C4.672 5.167 6.656 3.58 9 3.58z" />
      </svg>
    )
  }
  if (provider === 'github') {
    return (
      <svg className="h-4 w-4 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.338-2.221-.253-4.556-1.113-4.556-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.31.678.921.678 1.856 0 1.34-.012 2.421-.012 2.751 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
          clipRule="evenodd"
        />
      </svg>
    )
  }
  return (
    <svg className="h-4 w-4 text-gray-900" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M15.769 10.397c-.026-2.616 2.135-3.872 2.232-3.933-1.219-1.782-3.113-2.026-3.788-2.053-1.613-.163-3.15.951-3.968.951-.818 0-2.086-.928-3.427-.903-1.762.026-3.39 1.026-4.297 2.605-1.834 3.18-.469 7.885 1.318 10.463.874 1.262 1.915 2.68 3.281 2.628 1.318-.052 1.815-.851 3.408-.851 1.593 0 2.038.851 3.427.824 1.416-.026 2.31-1.288 3.174-2.556.997-1.462 1.409-2.882 1.435-2.954-.031-.014-2.753-1.058-2.795-4.221z" />
      <path d="M13.279 2.885c.722-.876 1.209-2.093 1.076-3.309-1.04.043-2.302.694-3.05 1.57-.669.776-1.256 2.014-1.098 3.203 1.161.09 2.35-.588 3.072-1.464z" />
    </svg>
  )
}

/**
 * Copy-and-own Tailwind component. Stacked set of full-width OAuth provider
 * buttons with brand-accurate icons and consistent sizing, plus an optional
 * "or continue with email" divider for pairing with Auth Card Shell's form slot.
 */
export function SocialLoginButtons({
  providers = ['google', 'github', 'apple'],
  onSelect,
  showDivider = true,
  dividerLabel = 'or continue with email',
  className,
}: SocialLoginButtonsVariant1Props) {
  return (
    <div className={`flex flex-col gap-6 ${className ?? ''}`}>
      <div className="flex flex-col gap-2.5">
        {providers.map((provider) => (
          <button
            key={provider}
            type="button"
            onClick={() => onSelect?.(provider)}
            className="flex w-full items-center justify-center gap-2.5 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
          >
            <ProviderIcon provider={provider} />
            {labels[provider]}
          </button>
        ))}
      </div>

      {showDivider ? (
        <div className="flex items-center gap-3">
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
          <span className="text-xs font-medium text-gray-400">{dividerLabel}</span>
          <span className="h-px flex-1 bg-gray-200" aria-hidden="true" />
        </div>
      ) : null}
    </div>
  )
}
