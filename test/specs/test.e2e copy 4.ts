/// <reference types="@wdio/lighthouse-service" />
import { browser, $, expect } from '@wdio/globals'
import os from 'node:os'

describe('main suite 5', () => {
    //afterEach(() => browser.setViewport({ width: 1200, height: 900 }))

    describe('Lighthouse Service Performance Testing capabilities 5', () => {
        before(() => browser.enablePerformanceAudits())

        it('should allow to do performance tests 5', async () => {
            await browser.url('http://json.org')
            const metrics = await browser.getMetrics()
            expect(typeof metrics.serverResponseTime).toBe('number')
            expect(typeof metrics.domContentLoaded).toBe('number')
            expect(typeof metrics.firstVisualChange).toBe('number')
            expect(typeof metrics.firstPaint).toBe('number')
            expect(typeof metrics.firstContentfulPaint).toBe('number')
            expect(typeof metrics.firstMeaningfulPaint).toBe('number')
            expect(typeof metrics.largestContentfulPaint).toBe('number')
            expect(typeof metrics.lastVisualChange).toBe('number')
            expect(typeof metrics.interactive).toBe('number')
            expect(typeof metrics.load).toBe('number')
            expect(typeof metrics.speedIndex).toBe('number')
            expect(typeof metrics.totalBlockingTime).toBe('number')
            expect(typeof metrics.maxPotentialFID).toBe('number')
            expect(typeof metrics.cumulativeLayoutShift).toBe('number')
            const score = await browser.getPerformanceScore()
            expect(typeof score).toBe('number')
        })

        after(() => browser.disablePerformanceAudits())
    })

})