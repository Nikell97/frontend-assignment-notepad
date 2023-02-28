import { test, expect } from '@playwright/test';

//https://nikell97.github.io/frontend-assignment-notepad/

test('has title', async ({ page }) => {
    await page.goto('https://nikell97.github.io/frontend-assignment-notepad/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Notepad/);
  });