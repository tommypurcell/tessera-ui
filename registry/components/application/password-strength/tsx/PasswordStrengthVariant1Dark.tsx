export type PasswordRequirementDark = {
  label: string
  met: boolean
}

export type PasswordStrengthVariant1DarkProps = {
  id?: string
  label?: string
  value: string
  onChange?: (value: string) => void
  score: 0 | 1 | 2 | 3 | 4
  requirements?: PasswordRequirementDark[]
}

const scoreCopy: Record<PasswordStrengthVariant1DarkProps['score'], { label: string; textClass: string; barClass: string }> = {
  0: { label: 'Too weak', textClass: 'text-red-400', barClass: 'bg-red-400' },
  1: { label: 'Weak password', textClass: 'text-red-400', barClass: 'bg-red-400' },
  2: { label: 'Fair password', textClass: 'text-amber-400', barClass: 'bg-amber-400' },
  3: { label: 'Good password', textClass: 'text-amber-400', barClass: 'bg-amber-400' },
  4: { label: 'Strong password', textClass: 'text-emerald-400', barClass: 'bg-emerald-400' },
}

/**
 * Copy-and-own Tailwind component. Password input paired with a 4-segment strength
 * bar and label that reflect a `score` you compute from the current value (e.g. via
 * zxcvbn), plus an optional live checklist of requirements.
 */
export function PasswordStrengthDark({ id = 'new-password', label = 'New password', value, onChange, score, requirements }: PasswordStrengthVariant1DarkProps) {
  const { label: strengthLabel, textClass, barClass } = scoreCopy[score]
  const labelId = `${id}-strength-label`

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-gray-200">
        {label}
      </label>

      <input
        id={id}
        type="password"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        aria-describedby={labelId}
        className="rounded-md border border-gray-600 bg-gray-900 px-3 py-2 text-sm text-white shadow-sm focus:border-gray-400 focus:outline-none"
      />

      <div className="mt-1 flex gap-1" role="img" aria-label={`Password strength: ${strengthLabel.replace(' password', '')}`}>
        {[0, 1, 2, 3].map((segment) => (
          <span
            key={segment}
            aria-hidden="true"
            className={`h-1.5 flex-1 rounded-full ${segment < score ? barClass : 'bg-gray-700'}`}
          />
        ))}
      </div>

      <p id={labelId} className={`mt-0.5 text-xs font-medium ${textClass}`}>
        {strengthLabel}
      </p>

      {requirements?.length ? (
        <ul className="mt-2 flex flex-col gap-1 text-xs text-gray-400">
          {requirements.map((requirement) => (
            <li key={requirement.label} className={`flex items-center gap-1.5 ${requirement.met ? '' : 'text-gray-500'}`}>
              {requirement.met ? (
                <svg aria-hidden="true" className="size-3.5 text-emerald-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              ) : (
                <svg aria-hidden="true" className="size-3.5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <circle cx="12" cy="12" r="9" />
                </svg>
              )}
              {requirement.label}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
