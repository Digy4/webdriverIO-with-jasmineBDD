/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 6', () => {
    afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    const inputs: (ScrollIntoViewOptions | boolean | undefined)[] = [
        undefined,
        true,
        false,
        { block: 'start', inline: 'start' },
    ]

    describe('wdio scrollIntoView behaves like native scrollIntoView', () => {
        beforeEach(async () => {
            await browser.url('http://guinea-pig.webdriver.io')
            await browser.setWindowSize(500, 500)
        })

        inputs.forEach(input => {
            const inputDescription = typeof input === 'boolean' ? input : JSON.stringify(input)
            it(`should vertically scroll like the native scrollIntoView when passing ${inputDescription} as argument`, async () => {
                const searchInput = await $('.searchinput')
                await searchInput.scrollIntoView(input as any)
                const wdioY = await browser.execute(() => window.scrollY)

                await browser.execute((elem, _params) => elem.scrollIntoView(_params), searchInput, input as any)
                const nativeY = await browser.execute(() => window.scrollY)

                expect(Math.floor(wdioY)).toEqual(Math.floor(nativeY))
            })

            it(`should horizontally scroll like the native scrollIntoView when passing ${inputDescription} as argument`, async () => {
                const searchInput = await $('.searchinput')
                await searchInput.scrollIntoView(input as any)
                const wdioX = await browser.execute(() => window.scrollX)

                await browser.execute((elem, _params) => elem.scrollIntoView(_params), searchInput, input as any)
                const nativeX = await browser.execute(() => window.scrollX)

                expect(Math.floor(wdioX)).toEqual(Math.floor(nativeX))
            })
        })
    })

    it('should be able to handle successive scrollIntoView', async () => {
        await browser.url('http://guinea-pig.webdriver.io')
        await browser.setWindowSize(500, 500)
        const searchInput = await $('.searchinput')

        const scrollAndCheck = async (params?: ScrollIntoViewOptions | boolean) => {
            await searchInput.scrollIntoView(params)
            const [wdioX, wdioY] = await browser.execute(() => [
                window.scrollX, window.scrollY
            ])

            await browser.execute((elem, _params) => elem.scrollIntoView(_params), searchInput, params)
            const [windowX, windowY] = await browser.execute(() => [
                window.scrollX, window.scrollY
            ])

            expect(Math.abs(wdioX - windowX)).toEqual(0)
            expect(Math.abs(wdioY - windowY)).toEqual(0)
        }

        for (const input of inputs) {
            await scrollAndCheck(input)
        }
    })

    describe('url command', () => {
        it('supports basic auth', async () => {
            await browser.url('https://the-internet.herokuapp.com/basic_auth', {
                auth: {
                    user: 'admin',
                    pass: 'admin'

                }
            })
            await expect($('p=Congratulations! You must have the proper credentials.')).toBeDisplayed()
        })

        it('should return a request object', async () => {
            const request = await browser.url('http://guinea-pig.webdriver.io/')
            if (!request) {
                throw new Error('Request object is not defined')
            }
            expect(request.children!.length > 0).toBe(true)
            expect(Object.keys(request.response?.headers || {})).toContain('x-amz-request-id')
        })

        it('should not contain any children due to "none" wait property', async () => {
            const request = await browser.url('http://guinea-pig.webdriver.io/', {
                wait: 'none'
            })
            if (!request) {
                throw new Error('Request object is not defined')
            }
            expect(request.children!.length).toBe(0)
        })

        it('should allow to load a script before loading the page', async () => {
            await browser.url('https://webdriver.io', {
                onBeforeLoad: () => {
                    Math.random = () => 42
                }
            })
            expect(await browser.execute(() => Math.random())).toBe(42)

            await browser.url('https://webdriver.io')
            expect(await browser.execute(() => Math.random())).not.toBe(42)
        })
    })

    describe('dialog handling', () => {
        it('should automatically accept alerts', async () => {
            await browser.url('http://guinea-pig.webdriver.io')

            await browser.execute(() => alert('123'))

            /**
             * in case the alert is not automatically accepted
             * the following line would time out
             */
            await browser.$('div').click()
        })

        /**
         * fails due to https://github.com/GoogleChromeLabs/chromium-bidi/issues/2556
         */
        it('should be able to handle dialogs', async () => {
            await browser.url('http://guinea-pig.webdriver.io')
            browser.execute(() => alert('123'))
            const dialog = await new Promise<WebdriverIO.Dialog>((resolve) => browser.on('dialog', resolve))

            expect(dialog.type()).toBe('alert')
            expect(dialog.message()).toBe('123')
            await dialog.dismiss()
        })
    })

})