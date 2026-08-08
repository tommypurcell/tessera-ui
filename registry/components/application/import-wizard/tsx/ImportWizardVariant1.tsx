export type ImportWizardMapping = {
  /** Column name as it appears in the uploaded file. */
  sourceColumn: string
  /** Field options the column can be mapped to. */
  fieldOptions: string[]
  /** Currently selected field for this column. */
  selectedField: string
  /** Marks the mapping as unresolved (e.g. "Don't import"), styled as a warning. */
  unmapped?: boolean
}

export type ImportWizardVariant1Props = {
  fileName: string
  mappings: ImportWizardMapping[]
  /** Warning shown below the mapping list, e.g. "1 column will not be imported." */
  warning?: string
  onBack?: () => void
  onContinue?: () => void
}

/**
 * Copy-and-own Tailwind component. Column-mapping step of a CSV/spreadsheet
 * import wizard — match each source column to a destination field before
 * moving to the review step.
 */
export function ImportWizard({
  fileName,
  mappings,
  warning,
  onBack,
  onContinue,
}: ImportWizardVariant1Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="border-b border-gray-200 px-6 py-5">
        <ol className="flex items-center">
          <li className="flex items-center">
            <div className="flex items-center gap-2">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-medium text-white">
                <svg
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="currentColor"
                  className="size-3.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </span>
              <span className="text-sm font-medium text-gray-900">Upload</span>
            </div>
            <div className="mx-3 h-px w-8 bg-gray-900 sm:w-12" />
          </li>

          <li className="flex items-center">
            <div className="flex items-center gap-2">
              <span
                aria-current="step"
                className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-gray-900 text-xs font-semibold text-gray-900"
              >
                2
              </span>
              <span className="text-sm font-medium text-gray-900">Map columns</span>
            </div>
            <div className="mx-3 h-px w-8 bg-gray-200 sm:w-12" />
          </li>

          <li className="flex items-center">
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border-2 border-gray-200 text-xs font-medium text-gray-400">
              3
            </span>
            <span className="ml-2 text-sm font-medium text-gray-400">Review</span>
          </li>
        </ol>
      </div>

      <div className="px-6 py-6">
        <h2 className="text-base font-semibold text-gray-900">Map your columns</h2>
        <p className="mt-1 text-sm text-gray-500">
          Match each column from {fileName} to a field in your account.
        </p>

        <div className="mt-5 flex flex-col gap-3">
          {mappings.map((mapping) => (
            <div key={mapping.sourceColumn} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
              <span className="rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700">
                {mapping.sourceColumn}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <select
                defaultValue={mapping.selectedField}
                className={`rounded-md border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                  mapping.unmapped
                    ? 'border-red-300 text-red-900 focus:border-red-500'
                    : 'border-gray-300 text-gray-900 focus:border-gray-500'
                }`}
              >
                {mapping.fieldOptions.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          ))}
        </div>

        {warning ? <p className="mt-3 text-xs text-amber-600">{warning}</p> : null}
      </div>

      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
        <button
          type="button"
          onClick={onBack}
          className="rounded-md border border-gray-300 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onContinue}
          className="rounded-md bg-gray-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700"
        >
          Continue
        </button>
      </div>
    </div>
  )
}
