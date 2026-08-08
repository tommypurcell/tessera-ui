import { useRef, useState, type ClipboardEvent, type KeyboardEvent } from 'react'

export type TwoFactorSetupVariant1DarkProps = {
  secret: string
  recoveryCodes: string[]
  onVerify?: (code: string) => void
  onCopySecret?: () => void
  onDownloadCodes?: () => void
  onCopyCodes?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component (dark surface). Three-step 2FA enrollment flow:
 * scan a QR code or copy the manual secret, enter the 6-digit code from the
 * authenticator app, then reveal one-time recovery codes.
 */
export function TwoFactorSetup({ secret, recoveryCodes, onVerify, onCopySecret, onDownloadCodes, onCopyCodes, className }: TwoFactorSetupVariant1DarkProps) {
  const [values, setValues] = useState<string[]>(() => Array.from({ length: 6 }, () => ''))
  const inputs = useRef<Array<HTMLInputElement | null>>([])

  const focusAt = (index: number) => inputs.current[index]?.focus()

  const commit = (next: string[]) => {
    setValues(next)
    if (next.every((v) => v !== '')) onVerify?.(next.join(''))
  }

  const handleChange = (index: number, raw: string) => {
    const digit = raw.replace(/\D/g, '').slice(-1)
    const next = [...values]
    next[index] = digit
    commit(next)
    if (digit && index < 5) focusAt(index + 1)
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !values[index] && index > 0) focusAt(index - 1)
  }

  const handlePaste = (index: number, e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').split('')
    if (!digits.length) return
    const next = [...values]
    for (let i = 0; i < digits.length && index + i < 6; i++) next[index + i] = digits[i]
    commit(next)
    focusAt(Math.min(index + digits.length, 5))
  }

  return (
    <div className={`flex flex-col gap-8 ${className ?? ''}`}>
      <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-[11px] font-semibold text-white">1</span>
          <h3 className="text-sm font-semibold text-gray-100">Scan the QR code</h3>
        </div>
        <p className="mb-4 text-xs text-gray-400">Use an authenticator app like 1Password, Authy, or Google Authenticator.</p>

        <div className="flex flex-col items-center gap-4">
          <div className="flex h-36 w-36 items-center justify-center rounded-lg border border-gray-800 bg-gray-950" role="img" aria-label="QR code for authenticator app setup">
            <svg className="h-24 w-24 text-gray-700" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 3h8v8H3V3zm2 2v4h4V5H5zm8-2h8v8h-8V3zm2 2v4h4V5h-4zM3 13h8v8H3v-8zm2 2v4h4v-4H5zm10-2h2v2h-2v-2zm4 0h2v2h-2v-2zm-4 4h2v2h-2v-2zm4 0h2v2h-2v-2zm-2 4h2v2h-2v-2z" />
            </svg>
          </div>

          <div className="flex w-full items-center justify-between gap-2 rounded-md border border-gray-800 bg-gray-950 px-3 py-2">
            <code className="truncate font-mono text-xs text-gray-400">{secret}</code>
            <button type="button" onClick={onCopySecret} className="shrink-0 text-xs font-medium text-indigo-400 hover:text-indigo-300">
              Copy
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
        <div className="mb-4 flex items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-500 text-[11px] font-semibold text-white">2</span>
          <h3 className="text-sm font-semibold text-gray-100">Enter the 6-digit code</h3>
        </div>

        <div className="flex items-center justify-center gap-2" role="group" aria-label="Verification code">
          {values.map((value, index) => (
            <input
              key={index}
              ref={(el) => {
                inputs.current[index] = el
              }}
              inputMode="numeric"
              maxLength={1}
              value={value}
              aria-label={`Digit ${index + 1}`}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={(e) => handlePaste(index, e)}
              className="h-11 w-10 rounded-lg border border-gray-700 bg-gray-950 text-center text-lg font-semibold text-white shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-400/40 focus:outline-none"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => onVerify?.(values.join(''))}
          className="mt-5 w-full rounded-md bg-indigo-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-400"
        >
          Verify and enable
        </button>
      </div>

      <div className="rounded-xl border border-gray-800 bg-gray-900 p-5">
        <div className="mb-1 flex items-center gap-2">
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-semibold text-white">
            <svg className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <h3 className="text-sm font-semibold text-gray-100">Save your recovery codes</h3>
        </div>
        <p className="mb-4 text-xs text-gray-400">Store these somewhere safe. Each code can be used once if you lose access to your authenticator.</p>

        <div className="grid grid-cols-2 gap-2 rounded-md border border-gray-800 bg-gray-950 p-3">
          {recoveryCodes.map((code) => (
            <code key={code} className="font-mono text-xs text-gray-300">
              {code}
            </code>
          ))}
        </div>

        <div className="mt-3 flex gap-2">
          <button type="button" onClick={onDownloadCodes} className="flex-1 rounded-md border border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800">
            Download
          </button>
          <button type="button" onClick={onCopyCodes} className="flex-1 rounded-md border border-gray-700 px-3 py-1.5 text-xs font-medium text-gray-200 shadow-sm hover:bg-gray-800">
            Copy all
          </button>
        </div>
      </div>
    </div>
  )
}
