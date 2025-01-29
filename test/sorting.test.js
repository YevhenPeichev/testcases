import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Sorting Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should sort products by price (low to high)', async () => {
        await InventoryPage.selectSorting('Price (low to high)');
        // Add assertions to verify sorting
    });

    it('should sort products by price (high to low)', async () => {
        await InventoryPage.selectSorting('Price (high to low)');
        // Add assertions to verify sorting
    });

    it('should sort products by name (A to Z)', async () => {
        await InventoryPage.selectSorting('Name (A to Z)');
        // Add assertions to verify sorting
    });

    it('should sort products by name (Z to A)', async () => {
        await InventoryPage.selectSorting('Name (Z to A)');
        // Add assertions to verify sorting
    });
});
