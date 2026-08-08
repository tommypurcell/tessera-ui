import { useState } from 'react'

export type DoseStatus = 'pending' | 'taken' | 'skipped'

export type Dose = {
  id: string
  time: string
  medication: string
  dosage: string
  quantity: string
  status: DoseStatus
}

export type MedicationScheduleListVariant1Props = {
  doses: Dose[]
  onStatusChange?: (doseId: string, status: DoseStatus) => void
  className?: string
}

/**
 * Copy-and-own Tailwind component. Medication dose schedule — time, medication/dosage,
 * and either a resolved Taken/Skipped badge or Take/Skip actions, driven by real per-dose
 * status state.
 */
export function MedicationScheduleListVariant1({
  doses,
  onStatusChange,
  className,
}: MedicationScheduleListVariant1Props) {
  const [statuses, setStatuses] = useState<Record<string, DoseStatus>>(
    Object.fromEntries(doses.map((d) => [d.id, d.status])),
  )

  const setStatus = (id: string, status: DoseStatus) => {
    setStatuses((prev) => ({ ...prev, [id]: status }))
    onStatusChange?.(id, status)
  }

  return (
    <ul className={`divide-y divide-gray-100 rounded-xl border border-gray-200 bg-white shadow-sm ${className ?? ''}`}>
      {doses.map((dose) => {
        const status = statuses[dose.id]
        const isSkipped = status === 'skipped'

        return (
          <li key={dose.id} className="flex items-center gap-3 p-4">
            <div className={`w-16 shrink-0 whitespace-nowrap text-sm font-semibold ${isSkipped ? 'text-gray-400' : 'text-gray-900'}`}>
              {dose.time}
            </div>

            <div className="min-w-0 flex-1">
              <p className={`truncate text-sm font-medium ${isSkipped ? 'text-gray-400' : 'text-gray-900'}`}>
                {dose.medication}
              </p>
              <p className={`text-xs ${isSkipped ? 'text-gray-400' : 'text-gray-500'}`}>
                {dose.dosage} · {dose.quantity}
              </p>
            </div>

            {status === 'taken' ? (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Taken
              </span>
            ) : status === 'skipped' ? (
              <span className="shrink-0 rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-500">
                Skipped
              </span>
            ) : (
              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  onClick={() => setStatus(dose.id, 'skipped')}
                  className="rounded-md border border-gray-300 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                >
                  Skip
                </button>
                <button
                  type="button"
                  onClick={() => setStatus(dose.id, 'taken')}
                  className="rounded-md bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Take
                </button>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
