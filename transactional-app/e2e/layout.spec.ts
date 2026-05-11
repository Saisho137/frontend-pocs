import { test, expect } from '@playwright/test';

test.describe('Layout tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Header should be visible and contain correct elements', async ({
    page,
  }) => {
    const header = page.locator('header');
    await expect(header).toBeVisible();
    await expect(header.locator('h1')).toHaveText(
      'Welcome to Clean Architecture Project'
    );
    await expect(header.locator('nav')).toBeVisible();
    await expect(header.locator('ul li a').first()).toHaveAttribute(
      'routerLink',
      '/'
    );
    await expect(header.locator('ul li a').nth(1)).toHaveAttribute(
      'routerLink',
      '/about'
    );
  });

  test('Footer should be visible and contain correct text', async ({
    page,
  }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    await expect(footer.locator('p')).toHaveText(
      '© 2024 Your Company. All rights reserved.'
    );
  });
});
