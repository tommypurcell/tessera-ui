export function CtaBannerCardVariant2() {
  return (
    <div className="flex items-center gap-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 p-6">
      <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-white/20">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      </div>

      <div className="flex-1">
        <h2 className="text-lg font-bold text-white">Ready to go live?</h2>
        <p className="mt-0.5 text-sm text-emerald-50">Publish your changes and share them with your team in one click.</p>
      </div>

      <button type="button" className="shrink-0 rounded-md bg-white px-4 py-2 text-sm font-medium text-emerald-700 hover:bg-emerald-50">
        Publish
      </button>
    </div>
  )
}
