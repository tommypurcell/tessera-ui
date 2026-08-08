const signers = [
  { name: 'Ava Wilson', meta: 'Client · Signed Jun 12, 2026', status: 'signed' as const },
  { name: 'Marcus Chen', meta: 'Vendor · Signed Jun 13, 2026', status: 'signed' as const },
  { name: 'Sofia Ramirez', meta: 'Witness · Awaiting signature', status: 'pending' as const },
]

export function DocumentSignatureBlockVariant1() {
  return (
    <div className="rounded-lg border border-gray-200">
      <div className="border-b border-gray-200 px-4 py-3">
        <h3 className="text-sm font-semibold text-gray-900">Signatures</h3>
      </div>

      <ul className="flex flex-col divide-y divide-gray-200">
        {signers.map((signer) => (
          <li key={signer.name} className="flex items-center justify-between gap-3 px-4 py-3">
            <div>
              <p className="text-sm font-medium text-gray-900">{signer.name}</p>
              <p className="text-xs text-gray-500">{signer.meta}</p>
            </div>
            {signer.status === 'signed' ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                Signed
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" className="size-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
                Pending
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
