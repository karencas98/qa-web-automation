const { test, expect } = require('@playwright/test');

test('User can login successfully', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');
  await page.click('button[type="submit"]');

  await expect(page.locator('#flash')).toContainText('You logged into a secure area');
});

test('Login fails with invalid credentials', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'wrongUser');
  await page.fill('#password', 'wrongPassword');
  await page.click('button[type="submit"]');

  await expect(page.locator('#flash')).toContainText('Your username is invalid');
});

