const { test, expect } = require('@playwright/test');

//https://nikell97.github.io/frontend-assignment-notepad/

test('has title', async ({ page }) => {
    await page.goto('https://nikell97.github.io/frontend-assignment-notepad/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Notepad/);
  });

test.beforeEach(async ({ page }) => {
    await page.goto('https://nikell97.github.io/frontend-assignment-notepad/');
  });

  let newNoteList = ['a', 'b', 'c'];

  test('write one new note', async ({ page }) => {
    // create a new todo locator
    const newTodo = page.getByPlaceholder('What needs to be done?');

    // Create one todo item.
    await newTodo.fill(newNoteList[0]);
    await newTodo.press('Enter');

    let noteList = await page.$('.note-list');

    let noteListItem = await noteList.$('li');

    let noteListItemText = await noteListItem.$('>:nth-child(2)');

    // Check that input is empty.
    await expect(noteListItemText.textContent()).resolves.toMatch('a');
  }); 