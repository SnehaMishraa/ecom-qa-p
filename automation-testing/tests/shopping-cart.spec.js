const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('Shopping cart module', () => {
  test.beforeEach(async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/inventory\.html/);
  });

  test('TC006 - add a product to the cart', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.addBackpackToCart();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('1');

    await inventory.openCart();
    await expect(page).toHaveURL(/cart\.html/);
    await expect(page.locator('.inventory_item_name').filter({ hasText: 'Sauce Labs Backpack' })).toHaveCount(1);
  });

  test('TC007 - sort products by price low to high', async ({ page }) => {
    const inventory = new InventoryPage(page);
    await inventory.sortDropdown.selectOption('lohi');

    const prices = await page.locator('.inventory_item_price').allTextContents();
    const numericPrices = prices.map(price => Number(price.replace('$', '')));
    expect(numericPrices).toEqual([...numericPrices].sort((a, b) => a - b));
  });
});
