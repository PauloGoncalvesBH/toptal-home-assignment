const { test, expect } = require('@playwright/test')

const { overwriteDatabase } = require('../lib/helpers')

test.describe('Header', () => {
  test.beforeAll(async ({ request }) => {
    const emptyDatabase = []
    await overwriteDatabase(emptyDatabase, request)
  })

  test.beforeEach(async ({ page }) => page.goto('/'))

  test('should change add button style when hover', async ({ page }) => {
    await page.locator('.Header >> text=Add').hover()

    await expect(page).toHaveScreenshot()
  })

  test('should show a blue border around the input "New list"', async ({ page }) => {
    await page.locator('.Header >> .form-control').click()

    await expect(page).toHaveScreenshot()
  })
})
