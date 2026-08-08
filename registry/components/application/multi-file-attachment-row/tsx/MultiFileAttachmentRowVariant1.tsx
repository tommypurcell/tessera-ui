export type AttachedFile = {
  id: string
  name: string
  sizeBytes: number
}

export type MultiFileAttachmentRowVariant1Props = {
  files: AttachedFile[]
  onRemove?: (id: string) => void
}

function formatSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function extensionOf(name: string) {
  const parts = name.split('.')
  return parts.length > 1 ? parts[parts.length - 1].toUpperCase() : 'FILE'
}

/**
 * Copy-and-own Tailwind component. Row of attached-file chips with a
 * type-badge, filename, and a real human-readable file size computed
 * from bytes — the size label is never hand-typed.
 */
export function MultiFileAttachmentRow({ files, onRemove }: MultiFileAttachmentRowVariant1Props) {
  if (files.length === 0) return null

  return (
    <ul className="flex flex-col gap-1.5">
      {files.map((file) => (
        <li key={file.id} className="flex items-center gap-2.5 rounded-md border border-gray-200 bg-white px-3 py-2">
          <span className="flex size-8 shrink-0 items-center justify-center rounded bg-gray-100 text-[10px] font-semibold text-gray-500">
            {extensionOf(file.name)}
          </span>

          <div className="min-w-0 flex-1">
            <p className="truncate text-sm text-gray-900">{file.name}</p>
            <p className="text-xs text-gray-500">{formatSize(file.sizeBytes)}</p>
          </div>

          {onRemove ? (
            <button
              type="button"
              onClick={() => onRemove(file.id)}
              aria-label={`Remove ${file.name}`}
              className="shrink-0 rounded-md p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1"
            >
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
