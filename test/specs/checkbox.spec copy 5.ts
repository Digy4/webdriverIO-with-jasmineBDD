import CheckboxPage from '../pageobjects/checkbox.page.ts'

describe('checkboxes ragavan 7', () =>  {
    it('checkbox 7 should be enabled after clicking on it', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })

})
