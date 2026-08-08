import { useState } from 'react'

export type QuoteEstimatePanelVariant1Props = {
  initialCoverage?: number
  initialDeductible?: number
  initialTermMonths?: number
  onGetQuote?: (input: { coverage: number; deductible: number; termMonths: number; premium: number }) => void
  className?: string
}

function formatCurrency(value: number) {
  return `$${Math.round(value).toLocaleString('en-US')}`
}

function formatSigned(value: number) {
  const sign = value <= 0 ? '−' : '+'
  return `${sign}${formatCurrency(Math.abs(value))}`
}

/**
 * Copy-and-own Tailwind component. Quote estimate panel — coverage/deductible/term
 * sliders with a live premium and rate breakdown, all computed in real time from
 * slider state rather than a static number.
 */
export function QuoteEstimatePanelVariant1({
  initialCoverage = 150000,
  initialDeductible = 1000,
  initialTermMonths = 12,
  onGetQuote,
  className,
}: QuoteEstimatePanelVariant1Props) {
  const [coverage, setCoverage] = useState(initialCoverage)
  const [deductible, setDeductible] = useState(initialDeductible)
  const [termMonths, setTermMonths] = useState(initialTermMonths)

  const base = (coverage / 1000) * 0.18
  const deductibleAdj = -((deductible - 1000) / 1000) * 3
  const termAdj = ((termMonths - 12) / 6) * 4.5
  const premium = Math.max(base + deductibleAdj + termAdj, 10)

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-5 shadow-sm ${className ?? ''}`}>
      <h3 className="text-sm font-semibold text-gray-900">Get your estimate</h3>

      <div className="mt-5 flex flex-col gap-5">
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="qep1-coverage" className="text-xs font-medium text-gray-600">
              Coverage amount
            </label>
            <span className="text-sm font-semibold text-gray-900">{formatCurrency(coverage)}</span>
          </div>
          <input
            type="range"
            id="qep1-coverage"
            min={50000}
            max={500000}
            step={10000}
            value={coverage}
            onChange={(event) => setCoverage(Number(event.target.value))}
            className="mt-2 h-1.5 w-full appearance-none rounded-full bg-gray-200 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="qep1-deductible" className="text-xs font-medium text-gray-600">
              Deductible
            </label>
            <span className="text-sm font-semibold text-gray-900">{formatCurrency(deductible)}</span>
          </div>
          <input
            type="range"
            id="qep1-deductible"
            min={250}
            max={5000}
            step={250}
            value={deductible}
            onChange={(event) => setDeductible(Number(event.target.value))}
            className="mt-2 h-1.5 w-full appearance-none rounded-full bg-gray-200 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
          />
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="qep1-term" className="text-xs font-medium text-gray-600">
              Policy term
            </label>
            <span className="text-sm font-semibold text-gray-900">{termMonths} months</span>
          </div>
          <input
            type="range"
            id="qep1-term"
            min={6}
            max={24}
            step={6}
            value={termMonths}
            onChange={(event) => setTermMonths(Number(event.target.value))}
            className="mt-2 h-1.5 w-full appearance-none rounded-full bg-gray-200 [&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
          />
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-blue-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <p className="text-xs font-medium text-blue-700">Estimated monthly premium</p>
          <p className="text-xl font-bold text-blue-900">{formatCurrency(premium)}</p>
        </div>
        <dl className="mt-2 flex flex-col gap-1 border-t border-blue-100 pt-2 text-xs text-blue-700/80">
          <div className="flex items-center justify-between">
            <dt>Base rate</dt>
            <dd>{formatCurrency(base)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>Deductible adjustment</dt>
            <dd>{formatSigned(deductibleAdj)}</dd>
          </div>
          <div className="flex items-center justify-between">
            <dt>Term adjustment</dt>
            <dd>{formatSigned(termAdj)}</dd>
          </div>
        </dl>
      </div>

      <button
        type="button"
        onClick={() => onGetQuote?.({ coverage, deductible, termMonths, premium })}
        className="mt-4 w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
      >
        Get full quote
      </button>
    </div>
  )
}
