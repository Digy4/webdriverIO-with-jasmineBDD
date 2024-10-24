import DynamicPage from '../pageobjects/dynamic.page.ts'

describe('dynamic loading3', () =>  {
    it('should be an button on the page3', async () =>  {
        await DynamicPage.open()
        await expect(DynamicPage.loadedPage).not.toBePresent()

        await DynamicPage.btnStart.click()
        await DynamicPage.loadedPage.waitForExist({ timeout: 900000 })
        await expect(DynamicPage.loadedPage).toBePresent()
    })
})
