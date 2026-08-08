export function AlertDialogVariant2() {
  return (
    <>
      <button data-modal-open className="rounded border border-gray-300 bg-gray-100 px-3 py-1.5 text-sm text-gray-900">
        Leave page
      </button>

      <dialog
        aria-labelledby="alertDialogTitle2"
        aria-describedby="alertDialogDescription2"
        className="m-auto max-w-md rounded-lg bg-white p-6 shadow-lg backdrop:bg-black/50"
      >
        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100">
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 text-amber-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01M5.07 19h13.86a2 2 0 001.74-3L13.74 4a2 2 0 00-3.48 0L3.33 16a2 2 0 001.74 3z"
                />
              </svg>
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              <h2 id="alertDialogTitle2" className="text-lg font-semibold text-gray-900">
                Discard unsaved changes?
              </h2>
              <p id="alertDialogDescription2" className="text-sm text-gray-600">
                You have unsaved changes on this page. If you leave now, those changes will be lost.
              </p>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              data-modal-close
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none"
            >
              Keep editing
            </button>

            <button
              type="button"
              data-modal-close
              className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none"
            >
              Leave page
            </button>
          </div>
        </div>
      </dialog>
    </>
  )
}
