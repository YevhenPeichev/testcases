class InventoryPage {
    get cartButton() { return $('.shopping_cart_link'); }
    get burgerMenu() { return $('#react-burger-menu-btn'); }
    get logoutButton() { return $('#logout_sidebar_link'); }
    get addToCartButtons() { return $$('.btn_primary.btn_inventory'); }
    get checkoutButton() { return $('#checkout'); }
    get sortingDropdown() { return $('.product_sort_container'); }
    get twitterIcon() { return $('a[href="https://twitter.com/saucelabs"]'); }
    get facebookIcon() { return $('a[href="https://www.facebook.com/saucelabs"]'); }
    get linkedinIcon() { return $('a[href="https://www.linkedin.com/company/sauce-labs/"]'); }

    async logout() {
        await this.burgerMenu.click();
        await this.logoutButton.click();
    }

    async addToCart(index) {
        await this.addToCartButtons[index].click();
    }

    async selectSorting(option) {
        await this.sortingDropdown.selectByVisibleText(option);
    }

    async clickSocialMediaIcon(icon) {
        await icon.click();
    }
}

export default new InventoryPage();
