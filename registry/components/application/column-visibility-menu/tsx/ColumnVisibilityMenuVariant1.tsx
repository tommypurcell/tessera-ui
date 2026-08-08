import { useEffect, useRef, useState } from 'react'

export type ColumnConfig = {
  id: string
  label: string
  visible: boolean
  /** required columns cannot be hidden and render a disabled, locked checkbox */
  required?: boolean
}

export type ColumnVisibilityMenuVariant1Props = {
  columns: ColumnConfig[]
  onChange?: (columns: ColumnConfig[]) => void
  onReorder?: (fromIndex: number, toIndex: number) => void
  onReset?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. "Columns" trigger button that opens a checklist
 * of toggleable table columns with drag handles for reordering and a locked,
 * disabled row for required columns. Closes on outside click or Escape.
 */
export function ColumnVisibilityMenu({ columns, onChange, onReorder, onReset, className }: ColumnVisibilityMenuVariant1Props) {
  const [open, setOpen] = useState(false)
  const [dragIndex, setDragIndex] = useState<number | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onClickOutside = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const toggle = (id: string) => {
    onChange?.(columns.map((c) => (c.id === id && !c.required ? { ...c, visible: !c.visible } : c)))
  }

  return (
    <div ref={rootRef} className={`relative inline-flex ${className ?? ''}`}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
      >
        <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M3 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM8 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1H9a1 1 0 01-1-1V4zM13 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
        </svg>
        Columns
        <svg className="h-3.5 w-3.5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open ? (
        <div className="absolute left-0 top-full z-10 mt-2 w-64 rounded-lg border border-gray-200 bg-white py-1.5 shadow-lg">
          <p className="px-3 pb-1.5 pt-1 text-xs font-semibold tracking-wide text-gray-400 uppercase">Toggle columns</p>

          <ul role="group" aria-label="Table columns" className="flex flex-col">
            {columns.map((col, index) => (
              <li
                key={col.id}
                draggable={!col.required}
                onDragStart={() => setDragIndex(index)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={() => {
                  if (dragIndex !== null && dragIndex !== index) onReorder?.(dragIndex, index)
                  setDragIndex(null)
                }}
                className={`flex items-center gap-2 px-3 py-1.5 ${col.required ? 'opacity-50' : 'hover:bg-gray-50'}`}
              >
                <svg className={`h-3.5 w-3.5 shrink-0 text-gray-300 ${col.required ? '' : 'cursor-grab'}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M7 4a1 1 0 11-2 0 1 1 0 012 0zM7 10a1 1 0 11-2 0 1 1 0 012 0zM7 16a1 1 0 11-2 0 1 1 0 012 0zM15 4a1 1 0 11-2 0 1 1 0 012 0zM15 10a1 1 0 11-2 0 1 1 0 012 0zM15 16a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <label className={`flex flex-1 items-center gap-2 text-sm ${col.visible || col.required ? 'text-gray-700' : 'text-gray-400'}`}>
                  <input
                    type="checkbox"
                    checked={col.visible}
                    disabled={col.required}
                    onChange={() => toggle(col.id)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 disabled:cursor-not-allowed"
                  />
                  {col.label}
                  {col.required ? <span className="ml-auto text-[10px] font-medium tracking-wide text-gray-400 uppercase">Required</span> : null}
                </label>
              </li>
            ))}
          </ul>

          <div className="mt-1 border-t border-gray-200 px-3 pt-1.5">
            <button type="button" onClick={onReset} className="text-xs font-medium text-indigo-600 hover:text-indigo-700">
              Reset to default
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
