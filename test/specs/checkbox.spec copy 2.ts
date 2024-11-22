import CheckboxPage from '../pageobjects/checkbox.page.ts'

describe('checkboxes ragavan 5', () =>  {
    it('checkbox 5 should be enabled2', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await expect(CheckboxPage.lastCheckbox).toBeSelected()
    })


})
