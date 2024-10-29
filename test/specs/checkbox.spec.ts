import CheckboxPage from '../pageobjects/checkbox.page.ts'

describe('checkboxes222', () =>  {


    it('checkbox 1 should be enabled after clicking on it11', async () =>  {
        await CheckboxPage.open()
        await expect(CheckboxPage.firstCheckbox).not.toBeSelected()
        await CheckboxPage.firstCheckbox.click()
        await expect(CheckboxPage.firstCheckbox).toBeSelected()
    })
})
