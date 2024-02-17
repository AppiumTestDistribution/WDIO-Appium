// @ts-nocheck
import { join } from 'node:path';
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';



export const config: WebdriverIO.Config = {
    ...baseConfig,

    // ============
    // Specs
    // ============
    specs: [
        '../tests/specs/**/app*.spec.ts',
    ],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // https://github.com/appium/appium-uiautomator2-driver
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'Android',
            maxInstances: 3,
            'df:options': {
                record_video: false,
                screenshot_on_failure: false,
                build: new Date().toISOString(),
            },
            'appium:automationName': 'UiAutomator2',
            // The path to the app
            'appium:app': join(
                process.cwd(),
                'apps',
                //
                // NOTE: Change this name according to the app version you downloaded
                'android.wdio.native.app.v1.0.8.apk',
            ),
            'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
            'appium:newCommandTimeout': 240,
        },
    ],
};
