const { test, expect } = require('@playwright/test')

const { overwriteDatabase } = require('../lib/helpers')

test.describe('ToDo List', () => {
  test.beforeEach(async ({ request }) => {
    const database = [
      {
        name: 'Groceries',
        items: [
          { label: 'Bread', completed: false },
          { label: 'Cheese', completed: true },
          { label: 'Tomatoes', completed: false }
        ]
      },
      {
        name: 'Work',
        items: []
      }
    ]
    
    await overwriteDatabase(database, request)
  })

  test.beforeEach(async ({ page }) => page.goto('/'))

  test('should show an empty new list and a list with complete item', async ({ page }) => {
    await expect(page).toHaveScreenshot()
  })

  test('should change add button style when hover', async ({ page }) => {
    await page.locator('.ToDoList >> text=Add').first().hover()

    await expect(page).toHaveScreenshot()
  })

  test('should show a blue border around the input "New list"', async ({ page }) => {
    await page.locator('.ToDoList >> .form-control').first().click()

    await expect(page).toHaveScreenshot()
  })
})
