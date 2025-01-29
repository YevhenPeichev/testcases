import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

describe('Social Media Links Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await loginPage.login('standard_user', 'secret_sauce');
    });

    it('should open Twitter link', async () => {
        await inventoryPage.clickSocialMediaIcon(inventoryPage.twitterIcon);
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await browser.getUrl()).toContain('twitter.com');
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });

    it('should open Facebook link', async () => {
        await inventoryPage.clickSocialMediaIcon(inventoryPage.facebookIcon);
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await browser.getUrl()).toContain('facebook.com');
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });

    it('should open LinkedIn link', async () => {
        await inventoryPage.clickSocialMediaIcon(inventoryPage.linkedinIcon);
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await browser.getUrl()).toContain('linkedin.com');
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });
});
