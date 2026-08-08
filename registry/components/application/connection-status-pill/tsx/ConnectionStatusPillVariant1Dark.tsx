export function ConnectionStatusPillVariant1Dark() {
  return (
    <div className="flex flex-col gap-3">
      <span
        className="inline-flex w-fit items-center gap-2 rounded-full border border-green-900/60 bg-green-950/50 py-1 pr-3 pl-2 text-sm font-medium text-green-300"
        role="status"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-green-400" />
        </span>
        Connected
      </span>

      <span
        className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-900/60 bg-amber-950/50 py-1 pr-3 pl-2 text-sm font-medium text-amber-300"
        role="status"
      >
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-amber-400" />
        </span>
        Reconnecting&hellip;
      </span>

      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-700 bg-gray-800 py-1 pr-3 pl-2 text-sm font-medium text-gray-300" role="status">
        <span className="size-2 rounded-full bg-gray-500" />
        Offline
      </span>
    </div>
  )
}
