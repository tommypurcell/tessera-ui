export type FlagEnvironment = 'Dev' | 'Staging' | 'Prod'

export type FeatureFlag = {
  key: string
  environments: FlagEnvironment[]
  rolloutPercent?: number
  enabled: boolean
  onChange?: (enabled: boolean) => void
}

export type FeatureFlagToggleRowVariant1Props = {
  flags: FeatureFlag[]
  className?: string
}

const envStyle: Record<FlagEnvironment, string> = {
  Prod: 'bg-emerald-50 text-emerald-700',
  Staging: 'bg-amber-50 text-amber-700',
  Dev: 'bg-gray-100 text-gray-600',
}

/**
 * Copy-and-own Tailwind component. Feature-flag management row: the flag's key
 * (monospace), pills for which environments it's live in, a rollout-percentage
 * or "not enabled" status line, and a trailing enable switch.
 */
export function FeatureFlagToggleRow({ flags, className }: FeatureFlagToggleRowVariant1Props) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white ${className ?? ''}`}>
      <ul className="divide-y divide-gray-200">
        {flags.map((flag) => (
          <li key={flag.key} className="flex items-center gap-4 px-4 py-3.5">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <code className="font-mono text-sm font-medium text-gray-900">{flag.key}</code>
                {flag.environments.map((env) => (
                  <span key={env} className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${envStyle[env]}`}>
                    {env}
                  </span>
                ))}
              </div>
              <p className="mt-1 text-xs text-gray-500">
                {flag.enabled && flag.rolloutPercent !== undefined ? (
                  <>
                    Rolling out to <span className="font-medium text-gray-700">{flag.rolloutPercent}%</span> of users
                  </>
                ) : (
                  'Not enabled in production'
                )}
              </p>
            </div>
            <label
              className={`relative block h-7 w-12 shrink-0 rounded-full transition-colors [-webkit-tap-highlight-color:transparent] ${
                flag.enabled ? 'bg-green-500' : 'bg-gray-300'
              }`}
            >
              <input
                type="checkbox"
                checked={flag.enabled}
                onChange={(e) => flag.onChange?.(e.target.checked)}
                className="peer sr-only"
              />
              <span className="absolute inset-y-0 start-0 m-1 size-5 rounded-full bg-white transition-[inset-inline-start] peer-checked:start-5" />
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
