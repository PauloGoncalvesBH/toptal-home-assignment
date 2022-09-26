const { test, expect } = require('@playwright/test')
const { faker } = require('@faker-js/faker')

const {
  createItem,
  createList,
  clickChangeItemStatus,
  deleteList
} = require('./lib/helpers')

test.describe('Manage list', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should create a new list with no items', async ({ page }) => {
    const nameNewList = faker.lorem.slug()
    await createList(nameNewList, page)

    const toDoListCreatedLocator = page.locator('.ToDoList', { hasText: nameNewList })

    await expect(toDoListCreatedLocator.locator('.ToDoListItem')).toHaveCount(0)
  })

  test('should remove a list regardless of the status of the List Items that it contains', async ({ page }) => {
    const nameList = faker.lorem.slug()
    const nameFirstItem = faker.commerce.productName()
    await createList(nameList, page)
    await createItem({ nameItem: nameFirstItem, nameList, page })
    await createItem({ nameList, page })
    await clickChangeItemStatus({ nameItem: nameFirstItem, nameList, page })

    await deleteList(nameList, page)

    const toDoListLocator = page.locator('.ToDoList', { hasText: nameList })

    await expect(toDoListLocator).toHaveCount(0)
  })
})
