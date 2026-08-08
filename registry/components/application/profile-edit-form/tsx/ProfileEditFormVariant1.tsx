export type ProfileEditFormVariant1Props = {
  avatarUrl: string
  avatarAlt: string
  firstName: string
  lastName: string
  email: string
  bio: string
  onFirstNameChange?: (value: string) => void
  onLastNameChange?: (value: string) => void
  onEmailChange?: (value: string) => void
  onBioChange?: (value: string) => void
  onChangePhoto?: () => void
  onCancel?: () => void
  onSave?: () => void
}

/**
 * Copy-and-own Tailwind component. Settings-page profile form: avatar with a
 * change-photo action, name/email/bio fields, and an always-visible footer
 * save bar. Distinct from application-form-row, which is a single field, not
 * a full page-section composition.
 */
export function ProfileEditForm({
  avatarUrl,
  avatarAlt,
  firstName,
  lastName,
  email,
  bio,
  onFirstNameChange,
  onLastNameChange,
  onEmailChange,
  onBioChange,
  onChangePhoto,
  onCancel,
  onSave,
}: ProfileEditFormVariant1Props) {
  return (
    <form
      className="w-full max-w-lg rounded-xl border border-gray-200 bg-white"
      onSubmit={(event) => {
        event.preventDefault()
        onSave?.()
      }}
    >
      <div className="p-6">
        <h2 className="text-base font-semibold text-gray-900">Profile</h2>
        <p className="mt-1 text-sm text-gray-500">Update your photo and personal details.</p>

        <div className="mt-5 flex items-center gap-4">
          <img src={avatarUrl} alt={avatarAlt} className="size-16 rounded-full object-cover" />
          <div className="flex flex-col gap-1">
            <button
              type="button"
              onClick={onChangePhoto}
              className="w-fit rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              Change photo
            </button>
            <p className="text-xs text-gray-500">JPG or PNG, up to 2MB.</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="pf-first" className="text-sm font-medium text-gray-700">
              First name
            </label>
            <input
              id="pf-first"
              type="text"
              value={firstName}
              onChange={(event) => onFirstNameChange?.(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="pf-last" className="text-sm font-medium text-gray-700">
              Last name
            </label>
            <input
              id="pf-last"
              type="text"
              value={lastName}
              onChange={(event) => onLastNameChange?.(event.target.value)}
              className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-1.5">
          <label htmlFor="pf-email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="pf-email"
            type="email"
            value={email}
            onChange={(event) => onEmailChange?.(event.target.value)}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="mt-4 flex flex-col gap-1.5">
          <label htmlFor="pf-bio" className="text-sm font-medium text-gray-700">
            Bio
          </label>
          <textarea
            id="pf-bio"
            rows={3}
            value={bio}
            onChange={(event) => onBioChange?.(event.target.value)}
            className="resize-none rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-end gap-3 rounded-b-xl border-t border-gray-200 bg-gray-50 px-6 py-4">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-md px-3.5 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
        >
          Save changes
        </button>
      </div>
    </form>
  )
}
