export function AlertDialogVariant1Dark() {
  return (
    <>
      <button
        data-modal-open
        className="rounded border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      >
        Delete account
      </button>

      <dialog
        aria-labelledby="alertDialogTitle"
        aria-describedby="alertDialogDescription"
        className="m-auto max-w-md rounded-lg bg-white p-6 shadow-lg backdrop:bg-black/50 dark:bg-gray-900"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <h2 id="alertDialogTitle" className="text-lg font-semibold text-gray-900 dark:text-white">
              Are you absolutely sure?
            </h2>
            <p id="alertDialogDescription" className="text-sm text-gray-600 dark:text-gray-400">
              This action cannot be undone. This will permanently delete your account and remove your data from our
              servers.
            </p>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              data-modal-close
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:outline-none dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 dark:focus:ring-offset-gray-900"
            >
              Cancel
            </button>

            <button
              type="button"
              data-modal-close
              className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:ring-2 focus:ring-red-600 focus:ring-offset-2 focus:outline-none dark:bg-red-500 dark:hover:bg-red-400 dark:focus:ring-offset-gray-900"
            >
              Delete account
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
