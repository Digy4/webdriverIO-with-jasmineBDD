/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 3', () => {
   //afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    it('should also detect non PWAs 3', async () => {
        await browser.url('https://json.org')
        expect((await browser.checkPWA()).passed).toBe(false)
    })

    it('can query shadow elements 3', async () => {
        await browser.url('https://the-internet.herokuapp.com/shadowdom')
        await $('h1').waitForDisplayed()
        await expect($('ul[slot="my-text"] li:last-child')).toHaveText('In a list!')
    })

})