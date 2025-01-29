import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Logout Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('should logout successfully', async () => {
        await inventoryPage.logout();
        expect(await browser.getUrl()).toContain('login.html');
    });
});
