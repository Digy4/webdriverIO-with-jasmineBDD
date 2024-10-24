import { browser } from '@wdio/globals'
import scripts from './__fixtures__/script.js'

describe('__name polyfill 6', () => {
    it('suppports __name polyfill for classic sessions 3', async () => {
        await browser.url('http://guinea-pig.webdriver.io')
        expect(await browser.execute(scripts.someScript, 'foo')).toBe('Hello World! foo')
        expect(await browser.executeAsync(scripts.someAsyncScript, 'foo')).toBe('Hello World! foo')
    })
})