import { useState } from 'react'

export type ResponseHeader = { name: string; value: string }

export type ResponseViewerVariant1DarkProps = {
  status: number
  statusText: string
  durationMs: number
  sizeLabel: string
  bodyJson: string
  headers: ResponseHeader[]
  className?: string
}

type Tab = 'body' | 'headers'

const statusStyles = (status: number) => {
  if (status >= 200 && status < 300) return 'bg-emerald-500/10 text-emerald-400'
  if (status >= 400 && status < 500) return 'bg-amber-500/10 text-amber-400'
  if (status >= 500) return 'bg-rose-500/10 text-rose-400'
  return 'bg-gray-800 text-gray-300'
}

/**
 * Copy-and-own Tailwind component (dark surface). API response panel:
 * status badge, timing and size, a copy action, and Body/Headers tabs where
 * the body renders as a single formatted JSON block.
 */
export function ResponseViewer({ status, statusText, durationMs, sizeLabel, bodyJson, headers, className }: ResponseViewerVariant1DarkProps) {
  const [tab, setTab] = useState<Tab>('body')
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(tab === 'body' ? bodyJson : headers.map((h) => `${h.name}: ${h.value}`).join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 bg-gray-900 ${className ?? ''}`}>
      <div className="flex items-center justify-between border-b border-gray-800 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyles(status)}`}>
            {status} {statusText}
          </span>
          <span className="text-xs text-gray-500">{durationMs} ms</span>
          <span className="text-xs text-gray-500">{sizeLabel}</span>
        </div>
        <button type="button" onClick={handleCopy} className="flex items-center gap-1 text-xs font-medium text-gray-400 hover:text-gray-200">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="size-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
          </svg>
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>

      <div className="flex gap-4 border-b border-gray-800 px-4">
        <button
          type="button"
          aria-current={tab === 'body'}
          onClick={() => setTab('body')}
          className={tab === 'body' ? 'border-b-2 border-gray-100 py-2 text-xs font-semibold text-gray-100' : 'border-b-2 border-transparent py-2 text-xs font-medium text-gray-500 hover:text-gray-300'}
        >
          Body
        </button>
        <button
          type="button"
          aria-current={tab === 'headers'}
          onClick={() => setTab('headers')}
          className={tab === 'headers' ? 'border-b-2 border-gray-100 py-2 text-xs font-semibold text-gray-100' : 'border-b-2 border-transparent py-2 text-xs font-medium text-gray-500 hover:text-gray-300'}
        >
          Headers
        </button>
      </div>

      {tab === 'body' ? (
        <pre className="overflow-x-auto p-4 font-mono text-[12.5px] leading-relaxed text-gray-300">
          <code>{bodyJson}</code>
        </pre>
      ) : (
        <dl className="divide-y divide-gray-800 px-4 py-2 font-mono text-[12.5px] leading-relaxed">
          {headers.map((header) => (
            <div key={header.name} className="flex gap-2 py-1.5">
              <dt className="shrink-0 text-gray-500">{header.name}:</dt>
              <dd className="min-w-0 truncate text-gray-300">{header.value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}
