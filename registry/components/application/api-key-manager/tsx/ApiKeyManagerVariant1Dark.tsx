import type { HTMLAttributes } from 'react'

export type ApiKey = {
  id: string
  name: string
  maskedValue: string
  scopes: string[]
  lastUsed: string
}

export type ApiKeyManagerVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  title?: string
  createLabel?: string
  keys: ApiKey[]
  onCreate?: () => void
  onReveal?: (key: ApiKey) => void
  onCopy?: (key: ApiKey) => void
  onRevoke?: (key: ApiKey) => void
}

/**
 * Copy-and-own Tailwind component. API key management table taking a real
 * keys contract — pass your own data instead of hand-editing markup.
 */
export function ApiKeyManagerDark({
  className,
  title = 'API keys',
  createLabel = 'Create key',
  keys,
  onCreate,
  onReveal,
  onCopy,
  onRevoke,
  ...props
}: ApiKeyManagerVariant1DarkProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 ${className ?? ''}`} {...props}>
      <div className="flex items-center justify-between border-b border-gray-800 bg-gray-900 px-4 py-3">
        <span className="text-sm font-medium text-white">{title}</span>
        <button type="button" onClick={onCreate} className="rounded-md bg-white px-3 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200">
          {createLabel}
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-800">
          <thead className="bg-gray-900">
            <tr>
              <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Name
              </th>
              <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Key
              </th>
              <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Scopes
              </th>
              <th scope="col" className="px-4 py-2.5 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Last used
              </th>
              <th scope="col" className="px-4 py-2.5">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-800 bg-gray-900">
            {keys.map((key) => (
              <tr key={key.id}>
                <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-white">{key.name}</td>
                <td className="whitespace-nowrap px-4 py-3">
                  <div className="flex items-center gap-2">
                    <code className="rounded bg-gray-800 px-2 py-1 font-mono text-xs text-gray-300">{key.maskedValue}</code>
                    <button type="button" aria-label={`Reveal ${key.name}`} onClick={() => onReveal?.(key)} className="text-gray-500 hover:text-gray-300">
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    </button>
                    <button type="button" aria-label={`Copy ${key.name}`} onClick={() => onCopy?.(key)} className="text-gray-500 hover:text-gray-300">
                      <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {key.scopes.map((scope) => (
                      <span key={scope} className="inline-flex items-center rounded-full bg-gray-800 px-2 py-0.5 text-xs font-medium text-gray-300">
                        {scope}
                      </span>
                    ))}
                  </div>
                </td>
                <td className={`whitespace-nowrap px-4 py-3 text-sm ${key.lastUsed === 'Never' ? 'text-gray-500' : 'text-gray-400'}`}>{key.lastUsed}</td>
                <td className="whitespace-nowrap px-4 py-3 text-right">
                  <button type="button" onClick={() => onRevoke?.(key)} className="text-xs font-medium text-red-400 hover:text-red-300">
                    Revoke
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
