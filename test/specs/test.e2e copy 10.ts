/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 11', () => {
    afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    describe('shadow root piercing', () => {
        it('recognises new shadow root ids when page refreshes', async () => {
            await browser.url('https://todomvc.com/examples/lit/dist/')
            await expect($('.new-todo')).toBePresent()
            await browser.refresh()
            await expect($('.new-todo')).toBePresent()
        })
    })

    
})