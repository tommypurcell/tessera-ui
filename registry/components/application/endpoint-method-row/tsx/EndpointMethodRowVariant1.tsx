export type ApiEndpoint = {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  path: string
  description: string
}

export type EndpointMethodRowVariant1Props = {
  endpoints: ApiEndpoint[]
}

const methodStyles: Record<ApiEndpoint['method'], string> = {
  GET: 'bg-blue-50 text-blue-700',
  POST: 'bg-emerald-50 text-emerald-700',
  PUT: 'bg-amber-50 text-amber-700',
  PATCH: 'bg-violet-50 text-violet-700',
  DELETE: 'bg-red-50 text-red-700',
}

/**
 * Copy-and-own Tailwind component. Static API-reference listing of
 * method + path + description rows — distinct from webhook-event-row,
 * which shows delivered webhook event history (timestamps, status,
 * payload) rather than a reference of available endpoints.
 */
export function EndpointMethodRow({ endpoints }: EndpointMethodRowVariant1Props) {
  return (
    <ul className="flex w-full max-w-2xl flex-col divide-y divide-gray-100 rounded-lg border border-gray-200 bg-white">
      {endpoints.map((endpoint) => (
        <li key={`${endpoint.method}-${endpoint.path}`} className="flex items-center gap-3 px-4 py-3">
          <span className={`w-16 shrink-0 rounded px-2 py-0.5 text-center text-xs font-semibold ${methodStyles[endpoint.method]}`}>
            {endpoint.method}
          </span>
          <code className="shrink-0 font-mono text-sm text-gray-900">{endpoint.path}</code>
          <span className="min-w-0 flex-1 truncate text-sm text-gray-500">{endpoint.description}</span>
        </li>
      ))}
    </ul>
  )
}
