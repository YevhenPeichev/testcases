import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Logout Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should logout successfully', async () => {
        await InventoryPage.logout();
        expect(await browser.getUrl()).toContain('login.html');
    });
});
