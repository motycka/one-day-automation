const NavBar = require("./components/navbar");
const SignInPage = require("./pages/sign-in.page");
const Footer = require("./components/footer");
const Content = require("./components/content");

class Application {

    constructor() {
        this.path = '/';
        this.navBarComponent = new NavBar();
        this.signInPageComponent = new SignInPage();
        this.footerComponent = new Footer();
        this.pageTitleSelector = 'h1';
    }

    open() {
        return browser.url(this.path);
    }

    getCurrentPageTitle() {
        return $(this.pageTitleSelector).getText();
    }

    get navBar() {
        return this.navBarComponent;
    }

    get signInPage() {
        return this.signInPageComponent;
    }

    get otherPage() {
        // arbitrary application page
        return new Content();
    }

    get anotherPage() {
        // arbitrary application page
        return new Content();
    }

    get footer() {
        return this.footerComponent;
    }

}

module.exports = new Application();
