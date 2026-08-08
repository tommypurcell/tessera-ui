import { useMemo, useState } from 'react'

export type EmojiCategory = {
  id: string
  icon: string
  label: string
  emojis: Array<{ char: string; label: string }>
}

export type EmojiPickerVariant1Props = {
  categories?: EmojiCategory[]
  recent?: Array<{ char: string; label: string }>
  /** Called with the emoji character when one is picked. */
  onPick?: (emoji: string) => void
  className?: string
}

const DEFAULT_RECENT = [
  { char: '👍', label: 'Thumbs up' },
  { char: '❤️', label: 'Heart' },
  { char: '😄', label: 'Grinning face' },
  { char: '👏', label: 'Clapping hands' },
  { char: '🔥', label: 'Fire' },
  { char: '🎉', label: 'Party popper' },
  { char: '👀', label: 'Eyes' },
]

const DEFAULT_CATEGORIES: EmojiCategory[] = [
  {
    id: 'smileys',
    icon: '😀',
    label: 'Smileys',
    emojis: [
      { char: '😀', label: 'Grinning face' },
      { char: '😂', label: 'Laughing face' },
      { char: '😍', label: 'Heart eyes' },
      { char: '🤔', label: 'Thinking face' },
      { char: '😎', label: 'Sunglasses face' },
    ],
  },
  {
    id: 'gestures',
    icon: '👋',
    label: 'Gestures',
    emojis: [
      { char: '👋', label: 'Waving hand' },
      { char: '👍', label: 'Thumbs up' },
      { char: '👏', label: 'Clapping hands' },
      { char: '🙌', label: 'Raised hands' },
      { char: '✌️', label: 'Victory hand' },
    ],
  },
  {
    id: 'nature',
    icon: '🐾',
    label: 'Nature',
    emojis: [
      { char: '🐶', label: 'Dog face' },
      { char: '🌿', label: 'Herb' },
      { char: '🔥', label: 'Fire' },
      { char: '⭐', label: 'Star' },
      { char: '🌈', label: 'Rainbow' },
    ],
  },
]

/**
 * Copy-and-own Tailwind component. Emoji/reaction picker with a search field, category
 * tabs, and a recently-used grid, driven by real search-filter and pick state.
 */
export function EmojiPickerVariant1({
  categories = DEFAULT_CATEGORIES,
  recent = DEFAULT_RECENT,
  onPick,
  className,
}: EmojiPickerVariant1Props) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('recent')

  const activeEmojis = useMemo(() => {
    const source =
      activeCategory === 'recent' ? recent : categories.find((c) => c.id === activeCategory)?.emojis ?? []
    if (!query.trim()) return source
    return source.filter((e) => e.label.toLowerCase().includes(query.toLowerCase()))
  }, [activeCategory, categories, query, recent])

  return (
    <div className={`w-72 rounded-xl border border-gray-200 bg-white shadow-lg ${className ?? ''}`}>
      <div className="p-2">
        <label htmlFor="emoji-search" className="sr-only">
          Search emoji
        </label>
        <input
          id="emoji-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search emoji…"
          className="w-full rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-900 shadow-sm focus:border-gray-500 focus:outline-none"
        />
      </div>

      <div role="tablist" aria-label="Emoji categories" className="flex items-center gap-0.5 border-b border-gray-100 px-2 pb-2">
        <button
          type="button"
          role="tab"
          aria-selected={activeCategory === 'recent'}
          onClick={() => setActiveCategory('recent')}
          className={`flex size-8 items-center justify-center rounded-md text-base ${activeCategory === 'recent' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
        >
          🕒
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={activeCategory === category.id}
            aria-label={category.label}
            onClick={() => setActiveCategory(category.id)}
            className={`flex size-8 items-center justify-center rounded-md text-base ${activeCategory === category.id ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
          >
            {category.icon}
          </button>
        ))}
      </div>

      <div className="p-2">
        <p className="px-1 pb-1.5 text-xs font-medium text-gray-400">
          {activeCategory === 'recent' ? 'Recently used' : categories.find((c) => c.id === activeCategory)?.label}
        </p>

        {activeEmojis.length > 0 ? (
          <div role="listbox" aria-label="Emoji" className="grid grid-cols-7 gap-0.5">
            {activeEmojis.map((emoji) => (
              <button
                key={emoji.char}
                type="button"
                role="option"
                aria-label={emoji.label}
                aria-selected={false}
                onClick={() => onPick?.(emoji.char)}
                className="flex size-8 items-center justify-center rounded-md text-lg hover:bg-gray-100"
              >
                {emoji.char}
              </button>
            ))}
          </div>
        ) : (
          <p className="px-1 py-4 text-center text-xs text-gray-400">No matching emoji</p>
        )}
      </div>
    </div>
  )
}
