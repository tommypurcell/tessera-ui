import type { HTMLAttributes } from 'react'

export type FeatureFlagEnvState = {
  enabled: boolean
  rolloutPercent?: number
}

export type FeatureFlagRow = {
  id: string
  key: string
  environments: Record<string, FeatureFlagEnvState>
}

export type FeatureFlagTableVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  environments: string[]
  rows: FeatureFlagRow[]
  onToggle?: (row: FeatureFlagRow, environment: string, enabled: boolean) => void
}

/**
 * Copy-and-own Tailwind component. Feature flag matrix taking a real
 * flags/environments contract — pass your own flag data instead of hand-editing markup.
 */
export function FeatureFlagTable({ className, environments, rows, onToggle, ...props }: FeatureFlagTableVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-500">
              Flag
            </th>
            {environments.map((env) => (
              <th key={env} scope="col" className="px-3 py-2.5 text-center text-xs font-medium uppercase tracking-wide text-gray-500">
                {env}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="whitespace-nowrap px-4 py-3">
                <code className="text-sm font-medium text-gray-900">{row.key}</code>
              </td>
              {environments.map((env) => {
                const state = row.environments[env]
                return (
                  <td key={env} className="px-3 py-3 text-center">
                    <div className="flex flex-col items-center gap-1">
                      <button
                        type="button"
                        role="switch"
                        aria-checked={state.enabled}
                        aria-label={`${row.key} in ${env}, ${state.enabled ? 'enabled' : 'disabled'}${
                          state.enabled && state.rolloutPercent !== undefined ? ` at ${state.rolloutPercent} percent rollout` : ''
                        }`}
                        onClick={() => onToggle?.(row, env, !state.enabled)}
                        className={`relative inline-flex h-5 w-9 items-center rounded-full ${state.enabled ? 'bg-gray-900' : 'bg-gray-200'}`}
                      >
                        <span className={`inline-block size-3.5 rounded-full bg-white transition ${state.enabled ? 'translate-x-4.5' : 'translate-x-0.5'}`} />
                      </button>
                      {state.enabled && state.rolloutPercent !== undefined ? <span className="text-[10px] text-gray-400">{state.rolloutPercent}% rollout</span> : null}
                    </div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
