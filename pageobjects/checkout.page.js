class CheckoutPage {
    get firstName() { return $('#first-name'); }
    get lastName() { return $('#last-name'); }
    get postalCode() { return $('#postal-code'); }
    get continueButton() { return $('#continue'); }
    get finishButton() { return $('#finish'); }
    get cartEmptyMessage() { return $('.cart_footer'); }

    async completeCheckout(firstName, lastName, postalCode) {
        await this.firstName.setValue(firstName);
        await this.lastName.setValue(lastName);
        await this.postalCode.setValue(postalCode);
        await this.continueButton.click();
        await this.finishButton.click();
    }

    async getCartEmptyMessage() {
        return await this.cartEmptyMessage.getText();
    }
}

export default new CheckoutPage();
