import CheckboxPage from '../pageobjects/checkbox.page.ts'

describe('checkboxes66', () =>  {
    it('checkbox 2 should be enabled', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })

})
