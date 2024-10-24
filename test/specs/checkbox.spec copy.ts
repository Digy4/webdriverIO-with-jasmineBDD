import CheckboxPage from '../pageobjects/checkbox.page.ts'

describe('checkboxes ragavan', () =>  {
    it('checkbox 2 should be enabled2', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

})
