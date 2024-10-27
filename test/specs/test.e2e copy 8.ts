/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 12', () => {
    //afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    it('supports snapshot testing 8', async () => {
        await browser.url('http://guinea-pig.webdriver.io/')
        await expect($('.findme')).toMatchSnapshot()
        await expect($('.findme')).toMatchInlineSnapshot('"<h1 class="findme">Test CSS Attributes</h1>"')
    })

})