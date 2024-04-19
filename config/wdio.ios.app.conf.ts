// @ts-nocheck
import { config as baseConfig } from './wdio.shared.local.appium.conf.js';

const isGhActions = process.env.GITHUB_ACTION;

export const config: WebdriverIO.Config = {
    ...baseConfig,
    specs: ['../tests/specs/**/app.drag.and.drop.spec.ts'],
    capabilities: [
        {
            // The defaults you need to have in your config
            platformName: 'iOS',
            maxInstances: 1,
            'appium:automationName': 'XCUITest',
            // The path to the app
            'appium:app': '/Users/saikrishna/Downloads/git/native-demo-app/ios/wdiodemoappIPA/wdiodemoapp.ipa',
            'appium:newCommandTimeout': 240,
            // This is needed to wait for the webview context to become available
            'appium:webviewConnectTimeout': 5000,
            'df:options': {
                recordVideo: true,
                screenshotOnFailure: true,
                build: new Date().toISOString(),
                saveDeviceLogs: true,
            }
        }
    ]
};
