/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 12', () => {
    afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    it('supports snapshot testing 8', async () => {
        await browser.url('http://guinea-pig.webdriver.io/')
        await expect($('.findme')).toMatchSnapshot()
        await expect($('.findme')).toMatchInlineSnapshot('"<h1 class="findme">Test CSS Attributes</h1>"')
    })

    it('should allow to check for PWA 2', async () => {
        await browser.url('https://webdriver.io')
        // eslint-disable-next-line wdio/no-pause
        await browser.pause(100)
        expect((await browser.checkPWA([
            'isInstallable',
            'splashScreen',
            'themedOmnibox',
            'contentWith',
            'viewport',
            'appleTouchIcon',
            'maskableIcon'
        ])).passed).toBe(true)
    })

})