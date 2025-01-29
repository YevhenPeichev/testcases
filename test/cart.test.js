import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Cart Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('should add product to cart and verify', async () => {
        await inventoryPage.addToCart(0); // Add first product to cart
        await inventoryPage.cartButton.click();
        expect(await browser.getUrl()).toContain('cart.html');
    });

    it('should save the cart after logout', async () => {
        await inventoryPage.addToCart(0); // Add first product to cart
        await inventoryPage.logout();
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.cartButton.click();
        expect(await browser.getUrl()).toContain('cart.html');
        // Add assertions to verify the product is in the cart
    });
});
