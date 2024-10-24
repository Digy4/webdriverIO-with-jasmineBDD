import { config as sharedConfig } from './wdio.shared.conf.ts'

// @ts-expect-error
export const config: WebdriverIO.Config = {
    ...sharedConfig,
    ...{
        capabilities: [{
            browserName: 'chrome',
            maxInstances: 20,
            'goog:chromeOptions': {
                args: [
                  '--disable-gpu',
                  '--no-sandbox',
                  '--disable-dev-shm-usage',
                ],
              },
            "goog:loggingPrefs": {
                'driver': 'INFO',
                'browser': 'DEBUG',
                'performance': 'INFO'
            },
        }]
    }
}
