import type { ReactNode } from 'react'

export type MailFolder = {
  id: string
  label: string
  href: string
  icon: ReactNode
  count?: number
  emphasizeCount?: boolean
}

export type MailLabel = {
  id: string
  label: string
  href: string
  colorClass: string
}

export type FolderLabelSidebarVariant1Props = {
  folders: MailFolder[]
  labels: MailLabel[]
  activeFolderId: string
}

/**
 * Copy-and-own Tailwind component. Mail sidebar listing system folders
 * (Inbox with an unread-count badge, Sent, Drafts, Archive) followed by a
 * "Labels" group of colored, dot-marked labels.
 */
export function FolderLabelSidebar({ folders, labels, activeFolderId }: FolderLabelSidebarVariant1Props) {
  return (
    <nav aria-label="Mail folders" className="w-56">
      <ul role="list" className="flex flex-col gap-0.5">
        {folders.map((folder) => {
          const isActive = folder.id === activeFolderId
          return (
            <li key={folder.id}>
              <a
                href={folder.href}
                aria-current={isActive ? 'page' : undefined}
                className={`flex items-center justify-between gap-2 rounded-md px-2.5 py-1.5 text-sm ${
                  isActive ? 'bg-gray-100 font-medium text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span aria-hidden="true" className="size-4 text-gray-500">
                    {folder.icon}
                  </span>
                  {folder.label}
                </span>
                {folder.count ? (
                  <span
                    className={
                      folder.emphasizeCount
                        ? 'rounded-full bg-gray-900 px-1.5 py-0.5 text-xs font-semibold text-white'
                        : 'text-xs text-gray-400'
                    }
                  >
                    {folder.count}
                  </span>
                ) : null}
              </a>
            </li>
          )
        })}
      </ul>

      <p className="mb-1.5 mt-5 px-2.5 text-xs font-semibold uppercase tracking-wide text-gray-400">Labels</p>
      <ul role="list" className="flex flex-col gap-0.5">
        {labels.map((label) => (
          <li key={label.id}>
            <a href={label.href} className="flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900">
              <span aria-hidden="true" className={`size-2.5 shrink-0 rounded-full ${label.colorClass}`} />
              {label.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
