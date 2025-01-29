import LoginPage from '../pageobjects/login.page.js';
import InventoryPage from '../pageobjects/inventory.page.js';

describe('Social Media Links Tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.saucedemo.com');
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('should open Twitter link', async () => {
        await InventoryPage.clickSocialMediaIcon(InventoryPage.twitterIcon);
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await browser.getUrl()).toContain('twitter.com');
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });

    it('should open Facebook link', async () => {
        await InventoryPage.clickSocialMediaIcon(InventoryPage.facebookIcon);
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await browser.getUrl()).toContain('facebook.com');
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });

    it('should open LinkedIn link', async () => {
        await InventoryPage.clickSocialMediaIcon(InventoryPage.linkedinIcon);
        const handles = await browser.getWindowHandles();
        await browser.switchToWindow(handles[1]);
        expect(await browser.getUrl()).toContain('linkedin.com');
        await browser.closeWindow();
        await browser.switchToWindow(handles[0]);
    });
});
