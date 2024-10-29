import { browser, expect } from '@wdio/globals'

describe('network mocking22', () => {
    it('marks a request as mocked even without overwrites2', async () => {
        const baseUrl = 'http://guinea-pig.webdriver.io/'
        const mock = await browser.mock(`${baseUrl}components/hammerjs/hammer.js`, {
            method: 'get',
            statusCode: 200,
        })
        await browser.url(baseUrl)
        expect(mock.calls.length).toBe(1)
    })
})