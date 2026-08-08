export function ConnectionStatusPillVariant1() {
  return (
    <div className="flex flex-col gap-3">
      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-green-200 bg-green-50 py-1 pr-3 pl-2 text-sm font-medium text-green-700" role="status">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-green-500" />
        </span>
        Connected
      </span>

      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 py-1 pr-3 pl-2 text-sm font-medium text-amber-700" role="status">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-amber-500" />
        </span>
        Reconnecting&hellip;
      </span>

      <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-gray-50 py-1 pr-3 pl-2 text-sm font-medium text-gray-600" role="status">
        <span className="size-2 rounded-full bg-gray-400" />
        Offline
      </span>
    </div>
  )
}
