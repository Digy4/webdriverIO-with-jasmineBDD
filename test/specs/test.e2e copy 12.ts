/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 14', () => {
    afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    describe('emulate clock14', () => {
        const now = new Date(2021, 3, 14)
        const getDateString = () => (new Date()).toString()

        it('should allow to restore the clock14', async () => {
            await browser.restore('clock')
            expect(await browser.execute(getDateString))
                .not.toBe(now.toString())
            await browser.url('http://guinea-pig.webdriver.io/pointer.html')
            expect(await browser.execute(getDateString))
                .not.toBe(now.toString())
        })
    })

    
})