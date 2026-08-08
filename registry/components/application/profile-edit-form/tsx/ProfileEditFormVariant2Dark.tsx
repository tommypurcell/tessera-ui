export type ProfileEditFormVariant2DarkProps = {
  avatarUrl: string
  avatarAlt: string
  displayName: string
  username: string
  usernamePrefix: string
  /** Shows the "Unsaved changes" pill in the header when true. */
  isDirty: boolean
  onDisplayNameChange?: (value: string) => void
  onUsernameChange?: (value: string) => void
  onChangePhoto?: () => void
  onDiscard?: () => void
  onSave?: () => void
}

/**
 * Copy-and-own Tailwind component. Public-profile form with an unsaved-
 * changes header indicator, adapted for dark surfaces.
 */
export function ProfileEditForm({
  avatarUrl,
  avatarAlt,
  displayName,
  username,
  usernamePrefix,
  isDirty,
  onDisplayNameChange,
  onUsernameChange,
  onChangePhoto,
  onDiscard,
  onSave,
}: ProfileEditFormVariant2DarkProps) {
  return (
    <form
      className="w-full max-w-lg rounded-xl border border-gray-800 bg-gray-900 p-6"
      onSubmit={(event) => {
        event.preventDefault()
        onSave?.()
      }}
    >
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-white">Public profile</h2>
          <p className="mt-1 text-sm text-gray-400">This is how others will see you.</p>
        </div>
        {isDirty ? (
          <div className="flex items-center gap-2 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-400">
            <span className="size-1.5 rounded-full bg-amber-400" aria-hidden="true" />
            Unsaved changes
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex items-center gap-4">
        <img src={avatarUrl} alt={avatarAlt} className="size-16 rounded-full object-cover" />
        <button
          type="button"
          onClick={onChangePhoto}
          className="rounded-md border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800"
        >
          Change photo
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-1.5">
        <label htmlFor="pf2-display-dark" className="text-sm font-medium text-gray-300">
          Display name
        </label>
        <input
          id="pf2-display-dark"
          type="text"
          value={displayName}
          onChange={(event) => onDisplayNameChange?.(event.target.value)}
          className={`rounded-md border bg-gray-950 px-3 py-2 text-sm text-white shadow-sm focus:outline-none ${
            isDirty ? 'border-blue-500 focus:border-blue-400' : 'border-gray-700 focus:border-blue-500'
          }`}
        />
      </div>

      <div className="mt-4 flex flex-col gap-1.5">
        <label htmlFor="pf2-handle-dark" className="text-sm font-medium text-gray-300">
          Username
        </label>
        <div className="flex rounded-md border border-gray-700 bg-gray-950 shadow-sm focus-within:border-blue-500">
          <span className="flex items-center pl-3 text-sm text-gray-500">{usernamePrefix}</span>
          <input
            id="pf2-handle-dark"
            type="text"
            value={username}
            onChange={(event) => onUsernameChange?.(event.target.value)}
            className="min-w-0 flex-1 rounded-r-md border-0 bg-transparent py-2 pr-3 pl-1 text-sm text-white focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-3 border-t border-gray-800 pt-4">
        <button
          type="button"
          onClick={onDiscard}
          className="rounded-md px-3.5 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800"
        >
          Discard
        </button>
        <button
          type="submit"
          className="rounded-md bg-blue-500 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-400"
        >
          Save changes
        </button>
      </div>
    </form>
  )
}
