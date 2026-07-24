import { expect, test } from '@playwright/test'

test.describe('Next.js site', () => {
  test('renders catalog pages with component previews', async ({ page }) => {
    await page.goto('/components/application/accordions')
    await expect(page).toHaveTitle('Free Tailwind CSS Accordions | Tessera UI')
    const previewFrame = page.locator('iframe[src="/examples/application/accordions/1.html"]')
    await expect(previewFrame).toBeVisible()
    await expect(previewFrame).toHaveCSS('height', /^(2[5-9]\d|[3-9]\d{2,})px$/)
  })

  test('renders full blog content in the document', async ({ page }) => {
    await page.goto('/blog/what-makes-a-ui-component-agent-readable')
    await expect(page.getByRole('heading', { name: 'What Makes a UI Component Agent-Readable?' })).toBeVisible()
    await expect(page.getByText('Code is necessary, but code alone is a poor interface for a coding agent.')).toBeVisible()
  })

  test('offers HTML, JSX, and TSX code formats without changing the source preview', async ({ page }) => {
    await page.goto('/components/application/accordions')
    await page.getByRole('button', { name: 'Toggle preview and code' }).first().click()

    const codeFormatTabs = page.getByRole('tablist', { name: 'Code format' }).first()
    await expect(codeFormatTabs.getByRole('tab', { name: 'HTML' })).toHaveAttribute('aria-selected', 'true')
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

    await expect(page.getByRole('tabpanel').first()).toContainText('export type ModalsVariant1Props')
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
    expect(Math.abs((dialogBox.x + dialogBox.width / 2) - viewport.width / 2)).toBeLessThan(2)
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
  await expect.poll(() => page.evaluate(() => localStorage.getItem('tessera-ui-theme'))).toBe('dark')
})

test('uses authored dark component variants when dark mode is active', async ({ page }) => {
  await page.goto('/components/application/accordions')
  await expect(page.getByRole('heading', { name: 'Base', exact: true }).first()).toBeVisible()

  await page.getByRole('button', { name: 'Switch to dark mode' }).click()

  await expect(page.getByRole('heading', { name: 'Base (Dark)', exact: true }).first()).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Base', exact: true }).first()).toBeHidden()
})

test('links to the custom collection and renders the signal marquee', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Custom Made Components' }).click()
  await expect(page.getByRole('heading', { name: 'Custom Made Components' }).first()).toBeVisible()

  await page.getByRole('link', { name: 'Signal Marquee' }).click()
  await expect(page.getByRole('heading', { name: 'Signal ribbon' })).toBeVisible()
  await expect(page.locator('iframe[src="/examples/custom/marquee/1.html"]')).toBeVisible()
})

test('renders original custom button variants', async ({ page }) => {
  await page.goto('/components/custom/buttons')

  await expect(page.getByRole('heading', { name: 'Buttons' }).first()).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Primary actions' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Secondary actions' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Icon actions' })).toBeVisible()
  await expect(page.locator('iframe[src="/examples/custom/buttons/1.html"]')).toBeVisible()
})

test('renders the original transcript ribbon', async ({ page }) => {
  await page.goto('/components/custom/transcript-ribbon')

  await expect(page.getByRole('heading', { name: 'Transcript Ribbon' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Conversation flow' })).toBeVisible()
  await expect(page.locator('iframe[src="/examples/custom/transcript-ribbon/1.html"]')).toBeVisible()
})

test('renders the original phone mockup', async ({ page }) => {
  await page.goto('/components/custom/phone-mockup')

  await expect(page.getByRole('heading', { name: 'Phone Mockup' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Studio phone' })).toBeVisible()
  await expect(page.locator('iframe[src="/examples/custom/phone-mockup/1.html"]')).toBeVisible()
})

test('renders the original laptop mockup', async ({ page }) => {
  await page.goto('/components/custom/laptop-mockup')

  await expect(page.getByRole('heading', { name: 'Laptop Mockup' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Studio laptop' })).toBeVisible()
  await expect(page.locator('iframe[src="/examples/custom/laptop-mockup/1.html"]')).toBeVisible()
})

test('links to Building Blocks and renders its Tailwind-first primitives', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'Building Blocks' }).click()
  await expect(page.getByRole('heading', { name: 'Building Blocks' }).first()).toBeVisible()

  await page.getByRole('link', { name: 'Dots' }).click()
  await expect(page.getByRole('heading', { name: 'Color dot' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Status dot' })).toBeVisible()
  await expect(page.locator('iframe[src="/examples/building-blocks/dots/1.html"]')).toBeVisible()
})

test('renders the action building blocks', async ({ page }) => {
  await page.goto('/components/building-blocks/actions')
  await expect(page.getByRole('heading', { name: 'Button', exact: true })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Drag Handle' })).toBeVisible()
  await expect(page.locator('iframe[src="/examples/building-blocks/actions/1.html"]')).toBeVisible()
})

test('renders the atom library building blocks', async ({ page }) => {
  await page.goto('/components/building-blocks/atoms')
  await expect(page.getByRole('heading', { name: 'Signals' })).toBeVisible()
  await expect(page.getByRole('heading', { name: 'Inputs' })).toBeVisible()
  await expect(page.locator('iframe[src="/examples/building-blocks/atoms/1.html"]')).toBeVisible()
})
