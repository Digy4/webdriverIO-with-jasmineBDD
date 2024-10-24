/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 4', () => {
    afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    describe('async/iterators 2', () => {
        /**
         * this test requires the website to be rendered in mobile view
         */
        before(async () => {
            await browser.setViewport({ width: 900, height: 600 })
        })

        it('should be able to use async-iterators 2', async () => {
            await browser.url('https://webdriver.io')
            await browser.$('aria/Toggle navigation bar').click()
            const contributeLink = await browser.$$('.navbar-sidebar a.menu__link').find<WebdriverIO.Element>(
                async (link) => await link.getText() === 'Contribute')
            expect(contributeLink).toBeDefined()
            await contributeLink.click()
            await expect(browser).toHaveTitle('Contribute | WebdriverIO')
        })

        after(async () => {
            await browser.setViewport({ width: 900, height: 600 })
        })
    })
})