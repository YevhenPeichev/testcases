import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Login Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
    });

    it('should login with valid credentials', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
        expect(await browser.getUrl()).toContain('inventory.html');
    });

    it('should not login with invalid password', async () => {
        await loginPage.login('standard_user', 'wrong_password');
        expect(await loginPage.getErrorMessage()).toContain('Epic sadface: Username and password do not match any user in this service');
    });

    it('should not login with invalid login', async () => {
        await loginPage.login('invalid_user', 'secret_sauce');
        expect(await loginPage.getErrorMessage()).toContain('Epic sadface: Username and password do not match any user in this service');
    });
});
