export function DocumentSignatureBlockVariant2Dark() {
  return (
    <div className="rounded-lg border border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-white">Signature progress</p>
        <p className="text-xs font-medium text-gray-400">2 of 3 signed</p>
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-800">
        <div className="h-full rounded-full bg-green-500" style={{ width: '66%' }} />
      </div>

      <div className="mt-3 flex items-center -space-x-2">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces"
          alt="Ava Wilson, signed"
          className="size-8 rounded-full border-2 border-gray-950 object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=faces"
          alt="Marcus Chen, signed"
          className="size-8 rounded-full border-2 border-gray-950 object-cover"
        />
        <span
          className="flex size-8 items-center justify-center rounded-full border-2 border-gray-950 bg-gray-800 text-[11px] font-semibold text-gray-400"
          title="Sofia Ramirez, pending"
        >
          SR
        </span>
      </div>
    </div>
  )
}
