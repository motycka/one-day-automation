const Component = require("./component");

class NavBar extends Component {

    constructor() {
        super('.navbar');
        this.dropdownMenuSelector = '.dropdown-menu';
        this.navbarRightSelector = '.navbar-right';
        this.isSignedInPrefixLocalized = 'Přihlášen';
    }

    getItem(name) {
        return super.$(`*=${name}`);
    }

    async hasItem(name) {
        return await this.getItem(name).isExisting();
    }

    async clickOnItem(name) {
        await super.$(`*=${name}`).click();
    }

    getDropdownItem(name) {
        return super.$(this.dropdownMenuSelector).$(`*=${name}`);
    }

    async hasDropdownItem(name) {
        return await this.getDropdownItem().isExisting();
    }

    async clickOnDropdownItem(name) {
        await super.$(this.dropdownMenuSelector).$(`*=${name}`).click();
    }

    get signInStatus() {
        return super.$(this.navbarRightSelector).getText();
    }

    async isSignedIn() {
        return (await this.signInStatus).startsWith(this.isSignedInPrefixLocalized);
    }

    async getCurrentUser() {
        return (await this.signInStatus).replace(this.isSignedInPrefixLocalized, '').trim();
    }

}

module.exports = NavBar;