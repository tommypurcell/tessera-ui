import { useMemo, useState } from 'react'

export type Workspace = {
  id: string
  name: string
  initial: string
  color: string
  pinned?: boolean
}

export type RecentPinnedSwitcherVariant1Props = {
  workspaces: Workspace[]
  activeWorkspaceId?: string
  onSelect?: (id: string) => void
  onCreateWorkspace?: () => void
  className?: string
}

function WorkspaceButton({
  workspace,
  isActive,
  onSelect,
}: {
  workspace: Workspace
  isActive: boolean
  onSelect: (id: string) => void
}) {
  return (
    <li>
      <button
        type="button"
        aria-current={isActive || undefined}
        onClick={() => onSelect(workspace.id)}
        className={
          isActive
            ? 'flex w-full items-center gap-2.5 rounded-md bg-gray-100 px-2 py-1.5 text-left'
            : 'flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left hover:bg-gray-50'
        }
      >
        <span
          className="flex size-6 shrink-0 items-center justify-center rounded-md text-xs font-semibold text-white"
          style={{ backgroundColor: workspace.color }}
        >
          {workspace.initial}
        </span>
        <span className={`min-w-0 flex-1 truncate text-sm ${isActive ? 'font-medium text-gray-900' : 'text-gray-700'}`}>
          {workspace.name}
        </span>
        {isActive ? (
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 shrink-0 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        ) : null}
      </button>
    </li>
  )
}

/**
 * Copy-and-own Tailwind component. Workspace/project switcher panel — a search field,
 * a Pinned section, and a Recent section, filtered by real search state.
 */
export function RecentPinnedSwitcherVariant1({
  workspaces,
  activeWorkspaceId,
  onSelect,
  onCreateWorkspace,
  className,
}: RecentPinnedSwitcherVariant1Props) {
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => workspaces.filter((w) => w.name.toLowerCase().includes(query.toLowerCase())),
    [workspaces, query],
  )
  const pinned = filtered.filter((w) => w.pinned)
  const recent = filtered.filter((w) => !w.pinned)

  const handleSelect = (id: string) => {
    onSelect?.(id)
  }

  return (
    <div className={`w-72 rounded-xl border border-gray-200 bg-white shadow-lg ${className ?? ''}`}>
      <div className="p-2">
        <label htmlFor="workspace-search" className="sr-only">
          Search workspaces
        </label>
        <input
          id="workspace-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find a workspace…"
          className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
        />
      </div>

      {pinned.length > 0 ? (
        <div className="border-t border-gray-100 p-2">
          <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">Pinned</p>
          <ul>
            {pinned.map((workspace) => (
              <WorkspaceButton
                key={workspace.id}
                workspace={workspace}
                isActive={workspace.id === activeWorkspaceId}
                onSelect={handleSelect}
              />
            ))}
          </ul>
        </div>
      ) : null}

      {recent.length > 0 ? (
        <div className="border-t border-gray-100 p-2">
          <p className="px-1 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">Recent</p>
          <ul>
            {recent.map((workspace) => (
              <WorkspaceButton
                key={workspace.id}
                workspace={workspace}
                isActive={workspace.id === activeWorkspaceId}
                onSelect={handleSelect}
              />
            ))}
          </ul>
        </div>
      ) : null}

      <div className="border-t border-gray-100 p-2">
        <button
          type="button"
          onClick={onCreateWorkspace}
          className="flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-gray-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          Create workspace
        </button>
      </div>
    </div>
  )
}
