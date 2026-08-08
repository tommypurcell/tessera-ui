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

export type SplitPaneDiffVariant1DarkProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  left: SplitPaneDiffSide
  right: SplitPaneDiffSide
  footerNote?: string
}

function ParagraphViewDark({ paragraph }: { paragraph: SplitPaneDiffParagraph }): ReactNode {
  if (paragraph.change === 'removed') {
    return <p className="mb-3 rounded bg-red-950/60 px-2 py-1 text-red-400 line-through decoration-red-500">{paragraph.text}</p>
  }
  if (paragraph.change === 'added') {
    return <p className="mb-3 rounded bg-green-950/60 px-2 py-1 text-green-400">{paragraph.text}</p>
  }
  return <p className="mb-3">{paragraph.text}</p>
}

/**
 * Copy-and-own Tailwind component. Side-by-side document comparison frame
 * taking a real left/right paragraph contract — sync scroll in your own handler.
 */
export function SplitPaneDiffDark({ className, left, right, footerNote = 'Scroll position synced', ...props }: SplitPaneDiffVariant1DarkProps) {
  return (
    <div className={`overflow-hidden rounded-xl border border-gray-800 ${className ?? ''}`} {...props}>
      <div className="grid grid-cols-2 divide-x divide-gray-800 border-b border-gray-800 bg-gray-900">
        {[left, right].map((side) => (
          <div key={side.versionLabel} className="flex items-center gap-2 px-4 py-2.5">
            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${side.active ? 'bg-white text-gray-900' : 'bg-gray-800 text-gray-300'}`}>
              {side.versionLabel}
            </span>
            <span className="truncate text-xs font-medium text-gray-400">{side.fileName}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 divide-x divide-gray-800">
        {[left, right].map((side) => (
          <div key={side.versionLabel} className="h-64 overflow-y-auto bg-gray-900 p-4 text-sm leading-relaxed text-gray-400">
            {side.paragraphs.map((paragraph, index) => (
              <ParagraphViewDark key={index} paragraph={paragraph} />
            ))}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-gray-800 bg-gray-900 px-4 py-2 text-xs text-gray-500">
        <span>{footerNote}</span>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-red-900" />
            Removed
          </span>
          <span className="flex items-center gap-1">
            <span className="size-2 rounded-sm bg-green-900" />
            Added
          </span>
        </div>
      </div>
    </div>
  )
}
