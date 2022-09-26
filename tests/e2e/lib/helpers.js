const { faker } = require('@faker-js/faker')

const createItem = async ({ nameItem = faker.commerce.productName(), nameList, page }) => {
  const toDoListLocator = page.locator('.ToDoList', { hasText: nameList })
  await toDoListLocator.locator('.form-control').type(nameItem)
  await toDoListLocator.locator('"Add"').click()
}

const createList = async (nameNewList, page) => {
  await page.type('[placeholder="New list"]', nameNewList)
  await page.click('.Header >> text=Add')
}

const clickChangeItemStatus = async ({ nameItem, nameList, page }) => {
  const toDoListLocator = page.locator('.ToDoList', { hasText: nameList })
  const itemLocator = toDoListLocator.locator('.ToDoListItem', { hasText: nameItem })
  await Promise.all([
    page.waitForResponse(new RegExp('/list/\\w/item/\\w/complete/true|false')),
    itemLocator.locator('role=checkbox').click()
  ]);
}

const deleteItem = async ({ nameItem, nameList, page }) => {
  const toDoListLocator = page.locator('.ToDoList', { hasText: nameList })
  const itemLocator = toDoListLocator.locator('.ToDoListItem', { hasText: nameItem })
  await itemLocator.locator('.DeleteItem').click()
}

const deleteList = async (nameList, page) => {
  const toDoListLocator = page.locator('.ToDoList', { hasText: nameList })
  await toDoListLocator.locator('.btn-danger').click()
}

module.exports = {
  createItem,
  createList,
  clickChangeItemStatus,
  deleteItem,
  deleteList,
}
