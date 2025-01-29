import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('should sort products by price (low to high)', async () => {
        await inventoryPage.selectSorting('Price (low to high)');
        // Add assertions to verify sorting
    });

    it('should sort products by price (high to low)', async () => {
        await inventoryPage.selectSorting('Price (high to low)');
        // Add assertions to verify sorting
    });

    it('should sort products by name (A to Z)', async () => {
        await inventoryPage.selectSorting('Name (A to Z)');
        // Add assertions to verify sorting
    });

    it('should sort products by name (Z to A)', async () => {
        await inventoryPage.selectSorting('Name (Z to A)');
        // Add assertions to verify sorting
    });
});
