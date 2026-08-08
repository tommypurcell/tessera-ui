export function ConnectionStatusPillVariant2Dark() {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-gray-800 bg-gray-900 px-4 py-3 shadow-sm">
      <p className="text-sm font-medium text-white">Realtime sync</p>

      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-300" role="status">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-amber-400" />
        </span>
        Reconnecting
      </span>
    </div>
  )
}
