import { useState } from 'react'

export type Reaction = {
  emoji: string
  label: string
  count: number
  reactedByYou?: boolean
}

export type ReactionBarVariant1DarkProps = {
  reactions: Reaction[]
  onAddReaction?: () => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Aggregated emoji reaction pills adapted for dark
 * surfaces, with per-reaction counts, a toggleable "reacted by you" state, and an
 * add-reaction trigger.
 */
export function ReactionBarVariant1Dark({ reactions, onAddReaction, className }: ReactionBarVariant1DarkProps) {
  const [items, setItems] = useState(reactions)

  const toggleReaction = (emoji: string) => {
    setItems((prev) =>
      prev.map((r) =>
        r.emoji === emoji
          ? { ...r, reactedByYou: !r.reactedByYou, count: r.count + (r.reactedByYou ? -1 : 1) }
          : r,
      ),
    )
  }

  return (
    <div role="group" aria-label="Reactions" className={`flex flex-wrap items-center gap-1.5 ${className ?? ''}`}>
      {items.map((reaction) => (
        <button
          key={reaction.emoji}
          type="button"
          aria-pressed={reaction.reactedByYou}
          aria-label={`${reaction.label}, ${reaction.count} reactions${reaction.reactedByYou ? ', you reacted' : ''}`}
          onClick={() => toggleReaction(reaction.emoji)}
          className={
            reaction.reactedByYou
              ? 'inline-flex items-center gap-1 rounded-full border border-blue-800 bg-blue-950 px-2 py-1 text-xs font-medium text-blue-300 hover:bg-blue-900'
              : 'inline-flex items-center gap-1 rounded-full border border-gray-700 bg-gray-900 px-2 py-1 text-xs font-medium text-gray-200 hover:bg-gray-800'
          }
        >
          <span aria-hidden="true">{reaction.emoji}</span>
          <span>{reaction.count}</span>
        </button>
      ))}

      <button
        type="button"
        aria-label="Add reaction"
        onClick={onAddReaction}
        className="inline-flex size-6 items-center justify-center rounded-full border border-dashed border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
      </button>
    </div>
  )
}
