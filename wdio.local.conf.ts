import { config as sharedConfig } from './wdio.shared.conf.ts'

// @ts-expect-error
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            'wdio:devtoolsOptions': {
                headless: false
            },
            "goog:loggingPrefs": {
                'driver': 'INFO',
                'browser': 'DEBUG',
                'performance': 'INFO'
            },
        }]
    }
}
