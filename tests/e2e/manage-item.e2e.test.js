const { test, expect } = require('@playwright/test')
const { faker } = require('@faker-js/faker')

const {
  createItem,
  createList,
  clickChangeItemStatus,
  deleteItem
} = require('../lib/helpers')

test.describe('Manage item', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should add multiple items in a list', async ({ page }) => {
    const nameList = faker.lorem.slug()
    await createList(nameList, page)
    await createItem({ nameList, page })
    await createItem({ nameList, page })

    const toDoListLocator = page.locator('.ToDoList', { hasText: nameList })

    await expect(toDoListLocator.locator('.ToDoListItem')).toHaveCount(2)
  })

  test('should complete item status with success', async ({ page }) => {
    const nameList = faker.lorem.slug()
    const nameItem = faker.commerce.productName()
    await createList(nameList, page)
    await createItem({ nameItem, nameList, page })
    await clickChangeItemStatus({ nameItem, nameList, page })

    const toDoListLocator = page.locator('.ToDoList', { hasText: nameList })
    const statusLocator = toDoListLocator.locator('role=checkbox')

    await expect(statusLocator).toBeChecked()

    await clickChangeItemStatus({ nameItem, nameList, page })

    await expect(statusLocator).not.toBeChecked()
  })

  test('should remove only completed list item', async ({ page }) => {
    const nameList = faker.lorem.slug()
    const nameFirstItem = faker.commerce.productName()
    await createList(nameList, page)
    await createItem({ nameItem: nameFirstItem, nameList, page })

    const toDoListLocator = page.locator('.ToDoList', { hasText: nameList })
    const itemAbleToDeleteLocator = toDoListLocator.locator('.DeleteItem')

    await expect(itemAbleToDeleteLocator).toHaveCount(0)

    await clickChangeItemStatus({ nameItem: nameFirstItem, nameList, page })

    await expect(itemAbleToDeleteLocator).toHaveCount(1)

    await deleteItem({ nameItem: nameFirstItem, nameList, page })

    const itemLocator = toDoListLocator.locator('.ToDoListItem', { hasText: nameFirstItem })

    await expect(itemLocator).toHaveCount(0)
  })
})
