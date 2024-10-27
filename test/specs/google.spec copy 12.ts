import GooglePage from '../pageobjects/google.page.ts';

describe('demo test google12', () => {
    it('should open google and type `wdio`', () => {
        GooglePage.open();
    });
    it('set value of `wdio` and press enter', () => {
        GooglePage.googleSearchInputBox.setValue('wdio');
        driver.keys('Enter');
    });
    it('verify `wdio` is in the search box', () => {
        expect(GooglePage.googleSearchInputBox).toHaveValue('wdio');
    });
});