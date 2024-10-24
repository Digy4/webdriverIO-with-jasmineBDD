/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 13', () => {
    afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    describe('emulate clock', () => {
        const now = new Date(2021, 3, 14)
        const getDateString = () => (new Date()).toString()

        it('should allow to mock the clock', async () => {
            await browser.emulate('clock', { now })
            expect(await browser.execute(getDateString))
                .toBe(now.toString())
            await browser.url('http://guinea-pig.webdriver.io')
            expect(await browser.execute(getDateString))
                .toBe(now.toString())
        })

    })

    
})