export function FormSuccessPanelVariant2Dark() {
  return (
    <div className="rounded-lg border border-green-900/60 bg-green-950/20 p-5">
      <div className="flex items-center gap-3">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-6 shrink-0 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-sm font-semibold text-white">You&apos;re all set up</h3>
      </div>

      <p className="mt-2 text-sm text-gray-400">Your workspace is ready. Here&apos;s what to do next:</p>

      <ol className="mt-3 flex flex-col gap-2">
        <li className="flex items-start gap-2 text-sm text-gray-300">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-gray-950">1</span>
          Invite your team members
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-300">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-gray-950">2</span>
          Connect your first data source
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-300">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-gray-950">3</span>
          Create your first dashboard
        </li>
      </ol>

      <button type="button" className="mt-4 w-full rounded-md bg-green-500 py-2 text-sm font-medium text-gray-950 hover:bg-green-400">
        Go to dashboard
      </button>
    </div>
  )
}
