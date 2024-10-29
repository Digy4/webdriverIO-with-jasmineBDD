//example.spec.ts
import ExampleClass from '../pageobjects/example.page.ts'
describe('Google Search4', () => {
  it('should search for sepcified text',async() => {
    await browser.url('https://www.google.com');
    await (await ExampleClass.searchInput).setValue("Webdriver IO Search Example");
    await browser.keys('Enter')
    await expect(await((await ExampleClass.firstResult).getText())).toContain("WebdriverIO")
  });
});