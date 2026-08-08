export function DangerZonePanelVariant1() {
  return (
    <>
      <section className="rounded-lg border border-red-200 bg-red-50/50" aria-labelledby="dangerZoneTitle">
        <div className="border-b border-red-200 px-5 py-4">
          <h2 id="dangerZoneTitle" className="text-sm font-semibold text-red-900">
            Danger zone
          </h2>
          <p className="mt-0.5 text-sm text-red-700">These actions are permanent and cannot be undone.</p>
        </div>

        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-gray-900">Delete this account</p>
            <p className="text-sm text-gray-600">Permanently remove your account and all associated data.</p>
          </div>

          <button
            type="button"
            data-modal-open
            className="shrink-0 rounded-md border border-red-300 bg-white px-3.5 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50"
          >
            Delete account
          </button>
        </div>
      </section>

      <dialog
        aria-labelledby="deleteAccountTitle"
        aria-describedby="deleteAccountDescription"
        className="m-auto max-w-md rounded-lg bg-white p-6 shadow-lg backdrop:bg-black/50"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h2 id="deleteAccountTitle" className="text-lg font-semibold text-gray-900">
              Are you absolutely sure?
            </h2>
            <p id="deleteAccountDescription" className="text-sm text-gray-600">
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </p>
          </div>

          <div className="flex justify-end gap-2">
            <button type="button" data-modal-close className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button type="button" data-modal-close className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
              Delete account
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
