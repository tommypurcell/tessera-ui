import { useId, useState } from 'react'

export type CopyShareLinkRowVariant1Props = {
  link: string
  permissionOptions?: string[]
  defaultPermission?: string
  expiresLabel?: string
  onPermissionChange?: (permission: string) => void
  className?: string
}

const DEFAULT_PERMISSIONS = [
  'Anyone with the link can view',
  'Anyone with the link can edit',
  'Only invited people',
]

/**
 * Copy-and-own Tailwind component. Read-only share link with a Copy button (real
 * clipboard write + "Copied!" confirmation) and a permission-level select.
 */
export function CopyShareLinkRowVariant1({
  link,
  permissionOptions = DEFAULT_PERMISSIONS,
  defaultPermission,
  expiresLabel,
  onPermissionChange,
  className,
}: CopyShareLinkRowVariant1Props) {
  const [copied, setCopied] = useState(false)
  const linkId = useId()
  const permissionId = useId()

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard access denied or unavailable; the read-only field remains selectable manually.
    }
  }

  return (
    <div className={`flex flex-col gap-2 ${className ?? ''}`}>
      <label htmlFor={linkId} className="text-sm font-medium text-gray-700">
        Share link
      </label>

      <div className="flex gap-2">
        <input
          id={linkId}
          type="text"
          readOnly
          value={link}
          className="min-w-0 flex-1 rounded-md border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-600 shadow-sm focus:border-gray-500 focus:outline-none"
        />

        <button
          type="button"
          onClick={handleCopy}
          className="shrink-0 rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-semibold text-gray-700 shadow-sm hover:bg-gray-50"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <label htmlFor={permissionId} className="sr-only">
          Link permission
        </label>
        <select
          id={permissionId}
          defaultValue={defaultPermission ?? permissionOptions[0]}
          onChange={(e) => onPermissionChange?.(e.target.value)}
          className="rounded-md border-0 bg-transparent py-1 pl-0 pr-7 text-xs font-medium text-gray-500 focus:outline-none"
        >
          {permissionOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        {expiresLabel ? <span className="text-xs text-gray-400">{expiresLabel}</span> : null}
      </div>
    </div>
  )
}
