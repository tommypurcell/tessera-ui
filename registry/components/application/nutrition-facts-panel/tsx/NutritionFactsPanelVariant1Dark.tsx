export type NutrientRow = {
  label: string
  amount: string
  dailyValueAmount: number
  dailyValueTotal: number
  indent?: boolean
}

export type NutritionFactsPanelVariant1Props = {
  servingSize: string
  calories: number
  nutrients: NutrientRow[]
}

/**
 * Copy-and-own Tailwind component. Dark-surface variant of the FDA-style
 * nutrition facts panel, with the same live-computed %DV column.
 */
export function NutritionFactsPanel({ servingSize, calories, nutrients }: NutritionFactsPanelVariant1Props) {
  return (
    <div className="w-full max-w-xs border-2 border-gray-100 bg-gray-950 p-3 font-sans text-gray-100">
      <h2 className="border-b-8 border-gray-100 pb-1 text-2xl font-black">Nutrition Facts</h2>
      <p className="border-b border-gray-100 py-1 text-sm">Serving size {servingSize}</p>

      <div className="flex items-baseline justify-between border-b-4 border-gray-100 py-1">
        <span className="text-lg font-bold">Calories</span>
        <span className="text-2xl font-black">{calories}</span>
      </div>

      <div className="border-b border-gray-600 py-0.5 text-right text-xs font-bold">% Daily Value*</div>

      <ul>
        {nutrients.map((n) => {
          const pct = Math.round((n.dailyValueAmount / n.dailyValueTotal) * 100)
          return (
            <li key={n.label} className="flex items-baseline justify-between border-b border-gray-700 py-1 text-sm">
              <span className={n.indent ? 'pl-4' : 'font-bold'}>
                {n.label} <span className="font-normal">{n.amount}</span>
              </span>
              <span className="font-bold">{pct}%</span>
            </li>
          )
        })}
      </ul>

      <p className="pt-2 text-[10px] leading-tight text-gray-400">
        * The % Daily Value tells you how much a nutrient in a serving of food contributes to a daily diet.
      </p>
    </div>
  )
}
