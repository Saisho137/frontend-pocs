import { test, expect } from '@playwright/test';

test.describe('Account forms Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/users-table');
  });

  test('should add a new user', async ({ page }) => {
    await page.fill('input[name="name"]', 'Saisho');
    await page.fill('input[name="balance"]', '5000');
    await page.fill('input[name="address"]', 'cl 25 c sur');

    await page.click('button[type="submit"]');

    const newUser = page.locator('tbody tr:last-child td');
    await expect(newUser.nth(1)).toHaveText('Saisho');
    await expect(newUser.nth(2)).toHaveText('$5,000.00');
    await expect(newUser.nth(3)).toHaveText('cl 25 c sur');
  });

  test('should edit an existing user', async ({ page }) => {
    await page.click('tbody tr:nth-child(1) button:has-text("Edit")');

    await page.fill('input[name="name"]', 'Updated User');
    await page.fill('input[name="balance"]', '7500');
    await page.fill('input[name="address"]', '456 Updated St');

    await page.click('button[type="submit"]');

    const updatedUser = page.locator('tbody tr:nth-child(1) td');
    await expect(updatedUser.nth(1)).toHaveText('Updated User');
    await expect(updatedUser.nth(2)).toHaveText('$7,500.00');
    await expect(updatedUser.nth(3)).toHaveText('456 Updated St');
  });

  test('should delete an existing user', async ({ page }) => {
    const rowLocator = page.locator(`tbody tr:has-text("1")`);

    await expect(rowLocator).toBeVisible();

    await rowLocator.locator('button:has-text("Delete")').click();

    await expect(rowLocator).not.toBeVisible();
  });
});
