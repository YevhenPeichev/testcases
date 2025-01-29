import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';

describe('Checkout Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should complete checkout with valid data', async () => {
        await InventoryPage.addToCart(0); // Add first product to cart
        await InventoryPage.cartButton.click();
        await InventoryPage.checkoutButton.click();
        await CheckoutPage.completeCheckout('John', 'Doe', '12345');
        expect(await browser.getUrl()).toContain('checkout-complete.html');
    });

    it('should show error when checking out with empty cart', async () => {
        await InventoryPage.cartButton.click();
        expect(await CheckoutPage.cartEmptyMessage.getText()).toContain('Your cart is empty');
    });
});
