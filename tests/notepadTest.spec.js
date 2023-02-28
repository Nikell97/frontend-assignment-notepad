const { test, expect } = require('@playwright/test');

//https://nikell97.github.io/frontend-assignment-notepad/

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

test('Number of active notes', async ({ page }) => {
  // create a new todo locator
  const newTodo = page.getByPlaceholder('What needs to be done?');

  // Create one todo item.
  await newTodo.fill(newNoteList[0]);
  await newTodo.press('Enter');

  let noteList = await page.$('.note-list');
  let noteListItem = await noteList.$('li');
  let noteListItemButton = await noteListItem.$('>:nth-child(1)');

  let numberOfActiveNotes = await page.$('#numberOfActiveNotes');

  await expect(numberOfActiveNotes.textContent()).resolves.toMatch('Number of active notes: 1')


  await noteListItemButton.check();

  numberOfActiveNotes = await page.$('#numberOfActiveNotes');

  await expect(numberOfActiveNotes.textContent()).resolves.toMatch('Number of active notes: 0')
});

test('Add 3 notes and check 1', async ({ page }) => {
  // create a new todo locator
  const newTodo = page.getByPlaceholder('What needs to be done?');

  // Create one todo item.
  await newTodo.fill(newNoteList[0]);
  await newTodo.press('Enter');
  let noteList = await page.$('.note-list');
  let noteListItem = await noteList.$('>:nth-child(1)');
  let noteListItemButton = await noteListItem.$('>:nth-child(1)');

  await noteListItemButton.check();

  await newTodo.fill(newNoteList[1]);
  await newTodo.press('Enter');

  await newTodo.fill(newNoteList[2]);
  await newTodo.press('Enter');

  let numberOfActiveNotes = await page.$('#numberOfActiveNotes');

  await expect(numberOfActiveNotes.textContent()).resolves.toMatch('Number of active notes: 2')
});  