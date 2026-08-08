export type ActionSheetActionDark = {
  label: string
  destructive?: boolean
  onSelect?: () => void
}

export type ActionSheetVariant1DarkProps = {
  label: string
  actions: ActionSheetActionDark[]
  cancelLabel?: string
  onCancel?: () => void
}

/**
 * Copy-and-own Tailwind component. Mobile-style bottom action sheet: a grouped
 * list of actions in one rounded card, plus a separated Cancel button. Mark an
 * action `destructive` to render it in red, matching native iOS/Android sheets.
 */
export function ActionSheetDark({ label, actions, cancelLabel = 'Cancel', onCancel }: ActionSheetVariant1DarkProps) {
  return (
    <div role="dialog" aria-label={label} className="flex w-full max-w-sm flex-col gap-2">
      <div className="overflow-hidden rounded-2xl bg-gray-800/95 backdrop-blur">
        {actions.map((action, index) => (
          <div key={action.label}>
            {index > 0 ? <div className="h-px bg-gray-700" /> : null}
            <button
              type="button"
              onClick={action.onSelect}
              className={`block w-full px-4 py-3.5 text-center text-base font-medium hover:bg-gray-700 ${
                action.destructive ? 'text-red-400' : 'text-white'
              }`}
            >
              {action.label}
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onCancel}
        className="w-full rounded-2xl bg-gray-800/95 px-4 py-3.5 text-center text-base font-semibold text-white backdrop-blur hover:bg-gray-700"
      >
        {cancelLabel}
      </button>
    </div>
  )
}
