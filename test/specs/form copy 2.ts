import FormPage from '../pageobjects/form.page.js'

describe('auth form3', () => {

    it('should allow access with correct creds3', async () => {
        await FormPage.open()
        await FormPage.username.setValue('tomsmith')
        await FormPage.password.setValue('SuperSecretPassword!')
        await FormPage.submit()

        await FormPage.flash.waitForDisplayed()
        await expect(FormPage.flash).toHaveText(
            expect.stringContaining('You logged into a secure area!')
        )
    })
})