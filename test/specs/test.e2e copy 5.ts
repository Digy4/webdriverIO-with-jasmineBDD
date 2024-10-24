/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 5', () => {
    afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    describe('moveTo tests 5', () => {
        const inputs = [
            undefined,
            { xOffset: 25, yOffset: 25 },
        ]

        before(async () => {
            await browser.url('http://guinea-pig.webdriver.io/pointer.html')
            await browser.$('#parent').waitForExist()
        })

        it('moveTo without iframe', async () => {
            await browser.$('#parent').moveTo()
            const value = await browser.$('#text').getValue()
            expect(value.endsWith('center\n')).toBe(true)
        })

        it('moveTo without iframe with 0 offsets', async () => {
            await browser.$('#parent').moveTo({ xOffset: 0, yOffset: 0 })
            const value = await browser.$('#text').getValue()
            expect(value.endsWith('center\n')).toBe(true)
        })

        inputs.forEach((input) => {
            it(`moves to position x,y outside of iframe when passing the arguments ${JSON.stringify(input)}`, async () => {
                await browser.execute(() => {
                    const mouse = { x:0, y:0 }
                    document.onmousemove = function(e){ mouse.x = e.clientX, mouse.y = e.clientY }
                    //@ts-ignore
                    document.mouseMoveTo = mouse
                })
                await browser.$('#parent').moveTo()
                const rectBefore = await browser.execute(
                    // @ts-ignore
                    () => document.mouseMoveTo
                ) as {x: number, y: number}
                await browser.$('#parent').moveTo(input)
                const rectAfter = await browser.execute(
                    // @ts-ignore
                    () => document.mouseMoveTo
                ) as {x: number, y: number}
                expect(rectBefore.x + (input && input?.xOffset ? input?.xOffset : 0)).toEqual(rectAfter.x)
                expect(rectBefore.y + (input && input?.yOffset ? input?.yOffset : 0)).toEqual(rectAfter.y)
            })
        })

        it('moveTo in iframe', async () => {
            const iframe = await browser.$('iframe.code-tabs__result')
            await browser.switchToFrame(iframe)
            await browser.$('#parent').moveTo()
            const value = await browser.$('#text').getValue()
            expect(value.endsWith('center\n')).toBe(true)
        })

        it('moveTo in iframe with 0 offsets', async () => {
            await browser.$('#parent').moveTo({ xOffset: 0, yOffset: 0 })
            const value = await browser.$('#text').getValue()
            expect(value.endsWith('center\n')).toBe(true)
        })

        inputs.forEach((input) => {
            it(`moves to position x,y inside of iframe when passing the arguments ${JSON.stringify(input)}`, async () => {
                await browser.execute(() => {
                    const mouse = { x: 0, y: 0 }
                    document.onmousemove = function(e){ mouse.x = e.clientX, mouse.y = e.clientY }
                    //@ts-ignore
                    document.mouseMoveTo = mouse
                })
                await browser.$('#parent').moveTo()
                const rectBefore = await browser.execute(
                    //@ts-ignore
                    () => document.mouseMoveTo
                ) as {x: number, y: number}
                await browser.$('#parent').moveTo(input)
                const rectAfter = await browser.execute(
                    //@ts-ignore
                    () => document.mouseMoveTo
                ) as {x: number, y: number}
                expect(rectBefore.x + (input && input?.xOffset ? input?.xOffset : 0)).toEqual(rectAfter.x)
                expect(rectBefore.y + (input && input?.yOffset ? input?.yOffset : 0)).toEqual(rectAfter.y)
            })
        })

        it('moveTo to parent frame with auto scrolling', async () => {
            await browser.setWindowSize(500, 500)
            await browser.switchToParentFrame()
            await browser.$('#parent').moveTo()
            const value = await browser.$('#text').getValue()
            expect(value.endsWith('center\n')).toBe(true)
        })

        it('moveTo to nested iframe with auto scrolling', async () => {
            const iframe = await browser.$('iframe.code-tabs__result')
            await browser.switchToFrame(iframe)
            await browser.$('#parent').moveTo()
            const value = await browser.$('#text').getValue()
            expect(value.endsWith('center\n')).toBe(true)
        })

        after(async () => {
            await browser.switchToParentFrame()
        })
    })

})