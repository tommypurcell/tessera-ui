export type FlagEnvironment = 'Dev' | 'Staging' | 'Prod'

export type FeatureFlag = {
  key: string
  environments: FlagEnvironment[]
  rolloutPercent?: number
  enabled: boolean
  onChange?: (enabled: boolean) => void
}

export type FeatureFlagToggleRowVariant1DarkProps = {
  flags: FeatureFlag[]
  className?: string
}

const envStyle: Record<FlagEnvironment, string> = {
  Prod: 'bg-emerald-500/10 text-emerald-400',
  Staging: 'bg-amber-500/10 text-amber-400',
  Dev: 'bg-gray-800 text-gray-400',
}

/**
 * Copy-and-own Tailwind component (dark surface). Feature-flag management row:
 * the flag's key (monospace), pills for which environments it's live in, a
 * rollout-percentage or "not enabled" status line, and a trailing enable switch.
 */
export function FeatureFlagToggleRow({ flags, className }: FeatureFlagToggleRowVariant1DarkProps) {
  return (
    <div className={`rounded-lg border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <ul className="divide-y divide-gray-800">
        {flags.map((flag) => (
          <li key={flag.key} className="flex items-center gap-4 px-4 py-3.5">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <code className="font-mono text-sm font-medium text-gray-100">{flag.key}</code>
                {flag.environments.map((env) => (
                  <span key={env} className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${envStyle[env]}`}>
                    {env}
                  </span>
                ))}
              </div>
              <p className="mt-1 text-xs text-gray-400">
                {flag.enabled && flag.rolloutPercent !== undefined ? (
                  <>
                    Rolling out to <span className="font-medium text-gray-200">{flag.rolloutPercent}%</span> of users
                  </>
                ) : (
                  'Not enabled in production'
                )}
              </p>
            </div>
            <label
              className={`relative block h-7 w-12 shrink-0 rounded-full transition-colors [-webkit-tap-highlight-color:transparent] ${
                flag.enabled ? 'bg-green-500' : 'bg-gray-700'
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
