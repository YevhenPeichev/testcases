class LoginPage {
    get username() { return $('#user-name'); }
    get password() { return $('#password'); }
    get loginButton() { return $('#login-button'); }
    get errorMessage() { return $('.error-message-container'); }

    async login(user, pass) {
        await this.username.setValue(user);
        await this.password.setValue(pass);
        await this.loginButton.click();
    }
}

export default new LoginPage();
