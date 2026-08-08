export type ApiEndpoint = {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  path: string
  description: string
}

export type EndpointMethodRowVariant1Props = {
  endpoints: ApiEndpoint[]
}

const methodStyles: Record<ApiEndpoint['method'], string> = {
  GET: 'bg-blue-500/10 text-blue-400',
  POST: 'bg-emerald-500/10 text-emerald-400',
  PUT: 'bg-amber-500/10 text-amber-400',
  PATCH: 'bg-violet-500/10 text-violet-400',
  DELETE: 'bg-red-500/10 text-red-400',
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the API
 * endpoint reference row list.
 */
export function EndpointMethodRow({ endpoints }: EndpointMethodRowVariant1Props) {
  return (
    <ul className="flex w-full max-w-2xl flex-col divide-y divide-gray-800 rounded-lg border border-gray-800 bg-gray-900">
      {endpoints.map((endpoint) => (
        <li key={`${endpoint.method}-${endpoint.path}`} className="flex items-center gap-3 px-4 py-3">
          <span className={`w-16 shrink-0 rounded px-2 py-0.5 text-center text-xs font-semibold ${methodStyles[endpoint.method]}`}>
            {endpoint.method}
          </span>
          <code className="shrink-0 font-mono text-sm text-gray-100">{endpoint.path}</code>
          <span className="min-w-0 flex-1 truncate text-sm text-gray-500">{endpoint.description}</span>
        </li>
      ))}
    </ul>
  )
}
