import fs from 'node:fs'
import path from 'node:path'

const sourceDirectory = path.join(process.cwd(), 'public', 'examples', 'application', 'accordions')
const targetDirectory = path.join(
  process.cwd(),
  'registry',
  'components',
  'application',
  'accordions',
  'tsx',
)

const variants = [
  ['1.html', 'AccordionBase'],
  ['1-dark.html', 'AccordionBaseDark'],
  ['2.html', 'AccordionWithCategoryIcons'],
  ['2-dark.html', 'AccordionWithCategoryIconsDark'],
  ['3.html', 'AccordionWithDividers'],
  ['3-dark.html', 'AccordionWithDividersDark'],
  ['4.html', 'AccordionNested'],
  ['4-dark.html', 'AccordionNestedDark'],
  ['5.html', 'AccordionCompact'],
  ['5-dark.html', 'AccordionCompactDark'],
]

function convertHtmlToJsx(htmlMarkup) {
  return htmlMarkup
    .replace(/^[\s\S]*?<body[^>]*>/i, '')
    .replace(/<\/body>[\s\S]*$/i, '')
    .replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}')
    .replace(/\bclass=/g, 'className=')
    .replace(/\bfor=/g, 'htmlFor=')
    .replace(/\btabindex=/gi, 'tabIndex=')
    .replace(/\bstroke-width=/g, 'strokeWidth=')
    .replace(/\bstroke-linecap=/g, 'strokeLinecap=')
    .replace(/\bstroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/\bfill-rule=/g, 'fillRule=')
    .replace(/\bclip-rule=/g, 'clipRule=')
    .replace(
      /<(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)([^>]*?)(?<!\/)>/gi,
      '<$1$2 />',
    )
    .trim()
}

function indentMarkup(markup) {
  return markup
    .split('\n')
    .map((line) => `      ${line}`)
    .join('\n')
}

fs.mkdirSync(targetDirectory, { recursive: true })

for (const [sourceFilename, componentName] of variants) {
  const sourcePath = path.join(sourceDirectory, sourceFilename)
  const componentMarkup = convertHtmlToJsx(fs.readFileSync(sourcePath, 'utf8'))
  const componentSource = `import type { HTMLAttributes } from 'react'

export type ${componentName}Props = HTMLAttributes<HTMLDivElement>

/**
 * Native disclosure accordion. The browser manages keyboard and open-state behavior.
 */
export function ${componentName}({ className, ...props }: ${componentName}Props) {
  return (
    <div className={className} {...props}>
${indentMarkup(componentMarkup)}
    </div>
  )
}
`

  fs.writeFileSync(path.join(targetDirectory, `${componentName}.tsx`), componentSource)
}
