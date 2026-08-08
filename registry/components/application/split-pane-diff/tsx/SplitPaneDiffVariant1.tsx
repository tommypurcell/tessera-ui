import type { HTMLAttributes, ReactNode } from 'react'

export type SplitPaneDiffParagraph = {
  text: string
  change?: 'added' | 'removed'
}

export type SplitPaneDiffSide = {
  versionLabel: string
  fileName: string
  paragraphs: SplitPaneDiffParagraph[]
  active?: boolean
}

export type SplitPaneDiffVariant1Props = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  left: SplitPaneDiffSide
  right: SplitPaneDiffSide
  footerNote?: string
}

function ParagraphView({ paragraph }: { paragraph: SplitPaneDiffParagraph }): ReactNode {
  if (paragraph.change === 'removed') {
    return <p className="mb-3 rounded bg-red-50 px-2 py-1 text-red-700 line-through decoration-red-400">{paragraph.text}</p>
  }
  if (paragraph.change === 'added') {
    return <p className="mb-3 rounded bg-green-50 px-2 py-1 text-green-700">{paragraph.text}</p>
  }
  return <p className="mb-3">{paragraph.text}</p>
}

/**
 * Copy-and-own Tailwind component. Side-by-side document comparison frame
 * taking a real left/right paragraph contract — sync scroll in your own handler.
 */
export function SplitPaneDiff({ className, left, right, footerNote = 'Scroll position synced', ...props }: SplitPaneDiffVariant1Props) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-200 ${className ?? ''}`} {...props}>
      <div className="grid grid-cols-2 divide-x divide-gray-200 border-b border-gray-200 bg-gray-50">
        {[left, right].map((side) => (
          <div key={side.versionLabel} className="flex items-center gap-2 px-4 py-2.5">
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${side.active ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>
              {side.versionLabel}
            </span>
            <span className="truncate text-xs font-medium text-gray-500">{side.fileName}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-200">
        {[left, right].map((side) => (
          <div key={side.versionLabel} className="h-64 overflow-y-auto p-4 text-sm leading-relaxed text-gray-600">
            {side.paragraphs.map((paragraph, index) => (
              <ParagraphView key={index} paragraph={paragraph} />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-2 text-xs text-gray-500">
        <span>{footerNote}</span>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-red-200" />
            Removed
          </span>
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-green-200" />
            Added
          </span>
        </div>
      </div>
    </div>
  )
}
