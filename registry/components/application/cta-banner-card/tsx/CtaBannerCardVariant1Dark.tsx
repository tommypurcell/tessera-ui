export function CtaBannerCardVariant1Dark() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-indigo-700 to-purple-800 p-8 text-center">
      <h2 className="text-2xl font-bold text-white">Upgrade to Pro</h2>
      <p className="mx-auto mt-2 max-w-sm text-sm text-indigo-200">
        Unlock unlimited projects, advanced analytics, and priority support for your whole team.
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <button type="button" className="rounded-md bg-white px-4 py-2.5 text-sm font-medium text-indigo-700 hover:bg-indigo-50">
          Upgrade now
        </button>
        <button type="button" className="rounded-md px-4 py-2.5 text-sm font-medium text-white hover:bg-white/10">
          Learn more
        </button>
      </div>
    </div>
  )
}
