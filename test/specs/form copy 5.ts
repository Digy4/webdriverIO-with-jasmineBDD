import FormPage from '../pageobjects/form.page.js'

describe('auth form6', () => {
    it('should deny access with wrong creds6', async () => {
        await FormPage.open()
        await FormPage.username.setValue('foo')
        await FormPage.password.setValue('bar')
        await FormPage.submit()

        await FormPage.flash.waitForDisplayed()
        await expect(FormPage.flash).toHaveText(
            expect.stringContaining('Your username is invalid!')
        )
    })
})