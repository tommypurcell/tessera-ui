export type LinkedIssueDark = {
  id: string
  href: string
  statusColorClass: string
}

export type DependencyLinkRowVariant1DarkProps = {
  blocks: LinkedIssueDark[]
  blockedBy: LinkedIssueDark[]
}

/**
 * Copy-and-own Tailwind component. Two-group relationship panel showing which
 * issues this one blocks and which block it, each as a row of linked chips
 * carrying a status-colored dot. Pass empty arrays to omit either group.
 */
export function DependencyLinkRowDark({ blocks, blockedBy }: DependencyLinkRowVariant1DarkProps) {
  return (
    <div className="flex flex-col gap-4 rounded-lg border border-gray-700 bg-gray-900 p-4">
      {blocks.length > 0 ? (
        <div>
          <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <svg aria-hidden="true" className="size-3.5 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
            Blocks {blocks.length} {blocks.length === 1 ? 'issue' : 'issues'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {blocks.map((issue) => (
              <a key={issue.id} href={issue.href} className="inline-flex items-center gap-1.5 rounded-md border border-gray-700 bg-gray-800 px-2 py-1 text-xs font-medium text-gray-200 hover:bg-gray-700">
                <span aria-hidden="true" className={`size-1.5 rounded-full ${issue.statusColorClass}`} />
                {issue.id}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      {blockedBy.length > 0 ? (
        <div>
          <p className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gray-400">
            <svg aria-hidden="true" className="size-3.5 text-amber-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
              />
            </svg>
            Blocked by {blockedBy.length} {blockedBy.length === 1 ? 'issue' : 'issues'}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {blockedBy.map((issue) => (
              <a key={issue.id} href={issue.href} className="inline-flex items-center gap-1.5 rounded-md border border-gray-700 bg-gray-800 px-2 py-1 text-xs font-medium text-gray-200 hover:bg-gray-700">
                <span aria-hidden="true" className={`size-1.5 rounded-full ${issue.statusColorClass}`} />
                {issue.id}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
