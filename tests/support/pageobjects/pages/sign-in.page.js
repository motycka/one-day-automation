const Content = require("../components/content");

class SignInPage extends Content {

    constructor() {
        super();
        this.usernameFieldSelector = '#email';
        this.passwordFieldSelector = '#password';
        this.loginButtonSelector = '.btn-primary';
    }

    async fillUsername(username) {
        await $(this.usernameFieldSelector).setValue(username);
    }

    async fillPassword(password) {
        await $(this.passwordFieldSelector).setValue(password);
    }

    async clickSignIn() {
        await $(this.loginButtonSelector).click();
    }

    async signInWithCredentials(username, password) {
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickSignIn();
    }

}

module.exports = SignInPage;