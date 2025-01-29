import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import checkoutPage from '../pageobjects/checkout.page.js';

describe('Checkout Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('should complete checkout with valid data', async () => {
        await inventoryPage.addToCart(0); // Add first product to cart
        await inventoryPage.cartButton.click();
        await inventoryPage.checkoutButton.click();
        await checkoutPage.completeCheckout('John', 'Doe', '12345');
        expect(await browser.getUrl()).toContain('checkout-complete.html');
    });

    it('should show error when checking out with empty cart', async () => {
        await inventoryPage.cartButton.click();
        expect(await checkoutPage.getCartEmptyMessage()).toContain('Your cart is empty');
    });
});
