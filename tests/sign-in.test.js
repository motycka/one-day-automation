const Application = require('./support/pageobjects/application.page');
const {isFalse, hasText, isTrue, log, testNotImplemented} = require("./support");

describe('Sign In Test', () => {

    before(async () => {
        await Application.open();
    });

    /*
    Scenario:
        1. User verifies s/he is not signed-in
        2. User navigates to sign-in page
        3. User signs in with credentials Testerka/Testuj2021!
        4. User verifies s/he has been signed-in
     */
    it('user should login with valid credentials', async () => {

        await isFalse(Application.navBar.isSignedIn());

        await Application.navBar.clickOnItem("Přihlásit");
        await Application.signInPage.signInWithCredentials("testerka@czechitas.cz", "Testuj2021!");

        await log(Application.getCurrentPageTitle());
        await hasText(Application.getCurrentPageTitle(), 'Přihlášky');

        await isTrue(Application.navBar.isSignedIn());
        await hasText(Application.navBar.getCurrentUser(), 'Testerka');

    });

    /*
    Scenario:
        1. User verifies s/he is not signed-in
        2. User navigates to sign-in page
        3. User signs in with invalid credentials Testerka/Testuj2021!
        4. User verifies error message appeared
        5. User verifies s/he has not been signed-in
     */
    it('user get error when trying to login with invalid credentials', async () => {

        testNotImplemented()

    });


    /*
    Alternative version with native expect and console.log
     */
    xit('user should login with valid credentials', async () => {

        expect(await Application.navBar.isSignedIn()).toBeFalsy();

        await Application.navBar.clickOnItem("Přihlásit");
        await Application.signInPage.signInWithCredentials("testerka@czechitas.cz", "Testuj2021!");

        expect(await Application.getCurrentPageTitle()).toHaveTextContaining('Přihlášky');

        expect(await Application.navBar.isSignedIn()).toBeTruthy();
        expect(await Application.navBar.getCurrentUser()).toEqual('Testerka');

    });

});