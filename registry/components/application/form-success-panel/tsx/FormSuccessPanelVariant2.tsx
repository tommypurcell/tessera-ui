export function FormSuccessPanelVariant2() {
  return (
    <div className="rounded-lg border border-green-200 bg-green-50/50 p-5">
      <div className="flex items-center gap-3">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-6 shrink-0 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-sm font-semibold text-gray-900">You&apos;re all set up</h3>
      </div>

      <p className="mt-2 text-sm text-gray-600">Your workspace is ready. Here&apos;s what to do next:</p>

      <ol className="mt-3 flex flex-col gap-2">
        <li className="flex items-start gap-2 text-sm text-gray-700">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">1</span>
          Invite your team members
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-700">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">2</span>
          Connect your first data source
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-700">
          <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-green-600 text-[10px] font-bold text-white">3</span>
          Create your first dashboard
        </li>
      </ol>

      <button type="button" className="mt-4 w-full rounded-md bg-green-600 py-2 text-sm font-medium text-white hover:bg-green-700">
        Go to dashboard
      </button>
    </div>
  )
}
