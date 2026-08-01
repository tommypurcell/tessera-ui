import { expect, test } from '@playwright/test'

test.describe('Next.js site', () => {
  test('renders catalog pages with component previews', async ({ page }) => {
    await page.goto('/components/application/accordions')
    await expect(page).toHaveTitle('Free Tailwind CSS Accordions | Tessera UI')
    const previewFrame = page.locator('iframe[title="Base"]')
    await expect(previewFrame).toBeVisible()
    await expect(previewFrame.contentFrame().locator('body')).toContainText(
      'What are the basic features?',
    )
    await expect
      .poll(async () =>
        Number.parseFloat(await previewFrame.evaluate((frame) => getComputedStyle(frame).height)),
      )
      .toBeGreaterThanOrEqual(250)
  })

  test('renders full blog content in the document', async ({ page }) => {
    await page.goto('/blog/how-agents-should-retrieve-ui-component-source-safely')
    await expect(
      page.getByRole('heading', { name: 'How Agents Should Retrieve UI Component Source Safely' }),
    ).toBeVisible()
    await expect(
      page.getByText(
        'Giving a coding agent access to component source should not mean allowing it to',
      ),
    ).toBeVisible()
  })

  test('offers HTML, JSX, and TSX code formats without changing the source preview', async ({
    page,
  }) => {
    await page.goto('/components/application/accordions')
    await page.getByRole('button', { name: 'Toggle preview and code' }).first().click()

    const codeFormatTabs = page.getByRole('tablist', { name: 'Code format' }).first()
    await expect(codeFormatTabs.getByRole('tab', { name: 'HTML' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    await expect(page.getByRole('tabpanel').first()).toContainText('class=')

    await codeFormatTabs.getByRole('tab', { name: 'JSX' }).click()
    await expect(page.getByRole('tabpanel').first()).toContainText('className=')

    await codeFormatTabs.getByRole('tab', { name: 'TSX' }).click()
    await expect(page.getByRole('tabpanel').first()).toContainText('export type AccordionBaseProps')
  })

  test('uses a registry TSX source for components beyond accordions', async ({ page }) => {
    await page.goto('/components/application/modals')
    await page.getByRole('button', { name: 'Toggle preview and code' }).first().click()
    await page.getByRole('tab', { name: 'TSX' }).first().click()

    await expect(page.getByRole('tabpanel').first()).toContainText(
      'export type ModalsVariant1Props',
    )
  })

  test('opens search with Command+K and searches on Enter', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('button', { name: 'Open search' })).toBeVisible()
    await page.keyboard.press('Meta+k')
    const dialog = page.locator('[data-search-dialog]')
    await expect(dialog).toBeVisible()
    const dialogBox = await dialog.boundingBox()
    const viewport = page.viewportSize()
    expect(dialogBox).not.toBeNull()
    expect(viewport).not.toBeNull()
    expect(Math.abs(dialogBox.x + dialogBox.width / 2 - viewport.width / 2)).toBeLessThan(2)
    const input = dialog.getByPlaceholder('Search components and articles')
    await expect(input).toBeFocused()
    await input.fill('pie')
    await expect(dialog.getByText('Charts', { exact: true })).toBeVisible()
    await input.press('Enter')
    await expect(page).toHaveURL(/\/components\/application\/charts\/?$/)
  })

  test('generates a dark-mode result in the browser', async ({ page }) => {
    await page.goto('/tools/dark-mode-generator')
    const input = page.getByLabel('Source HTML')
    await input.fill('<div class="bg-white text-gray-900">Text</div>')
    await page.getByRole('button', { name: 'Generate dark-mode variant' }).click()
    await expect(page.getByLabel('Generated HTML')).toHaveValue(/dark:bg-black/)
  })
})

test('switches the site to persistent dark mode', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Switch to dark mode' }).click()

  await expect(page.locator('html')).toHaveClass(/dark/)
  await expect(page.getByRole('button', { name: 'Switch to light mode' })).toBeVisible()
  await expect
    .poll(() => page.evaluate(() => localStorage.getItem('tessera-ui-theme')))
    .toBe('dark')
})

test('uses authored dark component variants when dark mode is active', async ({ page }) => {
  await page.goto('/components/application/accordions')
  await expect(page.getByRole('heading', { name: 'Base', exact: true }).first()).toBeVisible()

  await page.getByRole('button', { name: 'Switch to dark mode' }).click()

  await expect(
    page.getByRole('heading', { name: 'Base (Dark)', exact: true }).first(),
  ).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Base', exact: true }).first()).toBeHidden()
})

test('links to the marketing collection and renders the signal marquee', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Components' }).click()
  await expect(page.getByRole('link', { name: /^Marketing / })).toHaveAttribute(
    'href',
    '/components/marketing/',
  )
  await page.goto('/components/marketing')
  await expect(page.getByRole('heading', { name: 'Marketing', exact: true }).first()).toBeVisible()

  await expect(page.getByRole('link', { name: 'Signal Marquee', exact: true })).toHaveAttribute(
    'href',
    '/components/marketing/marquee/',
  )
  await page.goto('/components/marketing/marquee')
  await expect(page.getByRole('heading', { name: 'Signal ribbon' })).toBeVisible()
  await expect(page.locator('iframe[title="Signal ribbon"]')).toBeVisible()
})

test('renders original custom button variants', async ({ page }) => {
  await page.goto('/components/application/buttons')

  await expect(page.getByRole('heading', { name: 'Buttons' }).first()).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Primary actions' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Secondary actions' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Icon actions' })).toBeVisible()
  await expect(page.locator('iframe[title="Primary actions"]')).toBeVisible()
})

test('renders the original transcript ribbon', async ({ page }) => {
  await page.goto('/components/marketing/transcript-ribbon')

  await expect(page.getByRole('heading', { name: 'Transcript Ribbon' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Conversation flow' })).toBeVisible()
  await expect(
    page.locator('iframe[title="Conversation flow"]'),
  ).toBeVisible()
})

test('renders the original phone mockup', async ({ page }) => {
  await page.goto('/components/marketing/phone-mockup')

  await expect(page.getByRole('heading', { name: 'Phone Mockup' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Studio phone' })).toBeVisible()
  await expect(page.locator('iframe[title="Studio phone"]')).toBeVisible()
})

test('renders the original laptop mockup', async ({ page }) => {
  await page.goto('/components/marketing/laptop-mockup')

  await expect(page.getByRole('heading', { name: 'Laptop Mockup' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Studio laptop' })).toBeVisible()
  await expect(page.locator('iframe[title="Studio laptop"]')).toBeVisible()
})

test('links to Building Blocks and renders its Tailwind-first primitives', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Components' }).click()
  await page.getByRole('link', { name: /^Building Blocks / }).click()
  await expect(page.getByRole('heading', { name: 'Building Blocks' }).first()).toBeVisible()

  await page.getByRole('link', { name: 'Dots', exact: true }).click()
  await expect(page.getByRole('heading', { name: 'Color dot' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Status dot' })).toBeVisible()
  await expect(page.locator('iframe[title="Color dot"]')).toBeVisible()
})

test('renders the action building blocks', async ({ page }) => {
  await page.goto('/components/building-blocks/actions')
  await expect(page.getByRole('heading', { name: 'Button', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Drag Handle' })).toBeVisible()
  await expect(page.locator('iframe[title="Button"]')).toBeVisible()
})

test('renders the atom library building blocks', async ({ page }) => {
  await page.goto('/components/building-blocks/atoms')
  await expect(page.getByRole('heading', { name: 'Signals', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Inputs', exact: true })).toBeVisible()
  await expect(page.locator('iframe[title="Signals"]')).toBeVisible()
})

test('renders neobrutalism select previews without a nested 404 page', async ({ page }) => {
  await page.goto('/components/neobrutalism/selects')

  const previewFrame = page.locator('iframe[title="Base"]')
  await expect(previewFrame).toBeVisible()
  await expect(previewFrame.contentFrame().getByLabel('Headliner')).toBeVisible()
  await expect(previewFrame.contentFrame().getByRole('heading', { name: 'Page not found' })).toHaveCount(
    0,
  )
})
