import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Cart Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should add product to cart and verify', async () => {
        await InventoryPage.addToCart(0); // Add first product to cart
        await InventoryPage.cartButton.click();
        expect(await browser.getUrl()).toContain('cart.html');
    });

    it('should save the cart after logout', async () => {
        await InventoryPage.addToCart(0); // Add first product to cart
        await InventoryPage.logout();
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.cartButton.click();
        expect(await browser.getUrl()).toContain('cart.html');
        // Add assertions to verify the product is in the cart
    });
});
