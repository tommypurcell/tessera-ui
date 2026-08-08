export type KanbanCard = {
  id: string
  title: string
  description?: string
  tag: { label: string; color: 'purple' | 'red' | 'blue' | 'emerald' }
  assigneeInitials: string
}

export type KanbanColumnVariant1Props = {
  title: string
  dotColor?: string
  cards: KanbanCard[]
  onAddCard?: () => void
  onCardDragStart?: (cardId: string) => void
}

const tagClasses: Record<KanbanCard['tag']['color'], string> = {
  purple: 'bg-purple-100 text-purple-700',
  red: 'bg-red-100 text-red-700',
  blue: 'bg-blue-100 text-blue-700',
  emerald: 'bg-emerald-100 text-emerald-700',
}

const avatarClasses: Record<KanbanCard['tag']['color'], string> = {
  purple: 'bg-gray-900',
  red: 'bg-blue-600',
  blue: 'bg-emerald-600',
  emerald: 'bg-gray-900',
}

/**
 * Copy-and-own Tailwind component. Draggable card column for kanban boards, with a
 * count badge, tag/assignee-labeled cards, and an add-card affordance. Wire
 * onCardDragStart and your own drop targets to implement reordering.
 */
export function KanbanColumn({ title, dotColor = 'bg-amber-500', cards, onAddCard, onCardDragStart }: KanbanColumnVariant1Props) {
  return (
    <div className="flex w-72 flex-col rounded-xl bg-gray-100 p-2.5">
      <div className="flex items-center justify-between gap-2 px-1.5 py-1">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className={`size-2 rounded-full ${dotColor}`} />
          <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        </div>
        <span className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-600">{cards.length}</span>
      </div>

      <ul role="list" className="mt-1 flex flex-col gap-2">
        {cards.map((card) => (
          <li
            key={card.id}
            draggable
            onDragStart={() => onCardDragStart?.(card.id)}
            className="cursor-grab rounded-lg border border-gray-200 bg-white p-3 shadow-sm active:cursor-grabbing"
          >
            <p className="text-sm font-medium text-gray-900">{card.title}</p>
            {card.description ? <p className="mt-1 text-xs text-gray-500">{card.description}</p> : null}
            <div className="mt-3 flex items-center justify-between">
              <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${tagClasses[card.tag.color]}`}>
                {card.tag.label}
              </span>
              <span className={`flex size-6 items-center justify-center rounded-full text-[10px] font-medium text-white ${avatarClasses[card.tag.color]}`}>
                {card.assigneeInitials}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={onAddCard}
        className="mt-2 flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200 hover:text-gray-700"
      >
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        Add card
      </button>
    </div>
  )
}
