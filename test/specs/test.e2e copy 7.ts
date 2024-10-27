/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 6', () => {
    //afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    describe('context management', () => {
        it('should allow user to switch between contexts', async () => {
            await browser.url('http://guinea-pig.webdriver.io/')

            await browser.newWindow('https://webdriver.io')
            await expect($('.hero__subtitle')).toBePresent()
            await expect($('.red')).not.toBePresent()

            await browser.switchWindow('guinea-pig.webdriver.io')
            await expect($('.red')).toBePresent()
            await expect($('.hero__subtitle')).not.toBePresent()

            await browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js')
            await expect($('.hero__subtitle')).toBePresent()
            await expect($('.red')).not.toBePresent()
        })
    })
})