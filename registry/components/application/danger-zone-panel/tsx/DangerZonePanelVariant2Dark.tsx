export function DangerZonePanelVariant2Dark() {
  return (
    <section className="rounded-lg border border-red-900/60" aria-labelledby="dangerZoneTitle2">
      <div className="border-b border-red-900/60 bg-red-950/20 px-5 py-4">
        <h2 id="dangerZoneTitle2" className="text-sm font-semibold text-red-200">
          Danger zone
        </h2>
        <p className="mt-0.5 text-sm text-red-300">These actions are permanent and cannot be undone.</p>
      </div>

      <div className="flex flex-col divide-y divide-gray-800">
        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-white">Transfer ownership</p>
            <p className="text-sm text-gray-400">Move this project to another organization member.</p>
          </div>
          <button type="button" className="shrink-0 rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800">
            Transfer
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-white">Leave organization</p>
            <p className="text-sm text-gray-400">You&apos;ll lose access to all shared projects immediately.</p>
          </div>
          <button type="button" className="shrink-0 rounded-md border border-gray-700 bg-gray-900 px-3.5 py-2 text-sm font-medium text-gray-200 hover:bg-gray-800">
            Leave
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 px-5 py-4">
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium text-white">Delete this project</p>
            <p className="text-sm text-gray-400">Permanently delete this project and all of its data.</p>
          </div>
          <button
            type="button"
            className="shrink-0 rounded-md border border-red-900/60 bg-gray-900 px-3.5 py-2 text-sm font-medium text-red-300 hover:bg-red-950/40"
          >
            Delete project
          </button>
        </div>
      </div>
    </section>
  )
}
