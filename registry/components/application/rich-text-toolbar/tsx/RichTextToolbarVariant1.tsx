import { useId, useState, type ReactNode } from 'react'

export type RichTextFormat = 'bold' | 'italic' | 'underline' | 'bulletList' | 'numberedList'

export type RichTextToolbarVariant1Props = {
  /** Formats active when the toolbar first renders. */
  defaultActiveFormats?: RichTextFormat[]
  headingOptions?: string[]
  onInsertLink?: () => void
  className?: string
  children?: ReactNode
}

function ToolbarButton({
  label,
  pressed,
  onClick,
  children,
}: {
  label: string
  pressed: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={pressed}
      onClick={onClick}
      className={
        pressed
          ? 'inline-flex size-8 items-center justify-center rounded-md bg-gray-200 text-sm text-gray-900'
          : 'inline-flex size-8 items-center justify-center rounded-md text-sm text-gray-700 hover:bg-gray-100'
      }
    >
      {children}
    </button>
  )
}

/**
 * Copy-and-own Tailwind component. WYSIWYG formatting bar with a heading select, toggled
 * inline-format buttons (bold/italic/underline), list buttons, and a link action, all
 * driven by real aria-pressed state.
 */
export function RichTextToolbarVariant1({
  defaultActiveFormats = ['bold'],
  headingOptions = ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3'],
  onInsertLink,
  className,
  children,
}: RichTextToolbarVariant1Props) {
  const [active, setActive] = useState<Set<RichTextFormat>>(new Set(defaultActiveFormats))
  const headingId = useId()

  const toggle = (format: RichTextFormat) => {
    setActive((prev) => {
      const next = new Set(prev)
      if (next.has(format)) {
        next.delete(format)
      } else {
        next.add(format)
      }
      return next
    })
  }

  return (
    <div className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className ?? ''}`}>
      <div role="toolbar" aria-label="Formatting" className="flex flex-wrap items-center gap-1 border-b border-gray-200 p-1.5">
        <label className="sr-only" htmlFor={headingId}>
          Text style
        </label>
        <select
          id={headingId}
          className="rounded-md border-0 bg-transparent py-1 pl-2 pr-6 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
        >
          {headingOptions.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <div role="separator" aria-orientation="vertical" className="mx-1 h-5 w-px bg-gray-200" />

        <ToolbarButton label="Bold" pressed={active.has('bold')} onClick={() => toggle('bold')}>
          <span className="font-bold">B</span>
        </ToolbarButton>
        <ToolbarButton label="Italic" pressed={active.has('italic')} onClick={() => toggle('italic')}>
          <span className="italic">I</span>
        </ToolbarButton>
        <ToolbarButton label="Underline" pressed={active.has('underline')} onClick={() => toggle('underline')}>
          <span className="underline">U</span>
        </ToolbarButton>

        <div role="separator" aria-orientation="vertical" className="mx-1 h-5 w-px bg-gray-200" />

        <ToolbarButton label="Bulleted list" pressed={active.has('bulletList')} onClick={() => toggle('bulletList')}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>
        </ToolbarButton>
        <ToolbarButton label="Numbered list" pressed={active.has('numberedList')} onClick={() => toggle('numberedList')}>
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.242 5.992h12m-12 6.003H20.24m-12 5.999h12M4.117 7.495v-3.75H2.99m1.125 3.75H2.99m1.125 0H5.24m-1.92 2.577a1.125 1.125 0 1 1 1.591 1.59l-1.83 1.83h2.16M2.99 15.745h1.125a1.125 1.125 0 0 1 0 2.25H3.74m0-.002h.375a1.125 1.125 0 0 1 0 2.25H2.99" />
          </svg>
        </ToolbarButton>

        <div role="separator" aria-orientation="vertical" className="mx-1 h-5 w-px bg-gray-200" />

        <button
          type="button"
          aria-label="Insert link"
          onClick={onInsertLink}
          className="inline-flex size-8 items-center justify-center rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        {children ?? (
          <p className="text-sm leading-relaxed text-gray-700">
            <strong>Ship on Friday</strong> only if the migration has been dry-run against
            staging. Otherwise, hold for Monday.
          </p>
        )}
      </div>
    </div>
  )
}
