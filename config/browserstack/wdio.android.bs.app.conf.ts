import { config as baseConfig } from '../wdio.shared.conf.js';

export const config: WebdriverIO.Config = {
    ...baseConfig,
    // ============
    // Specs
    // ============
    specs: [
        '/Users/saikrishna/Downloads/git/WDIO-Appium/tests/specs/app.*.spec.ts',
    ],
    exclude: [
        // Exclude this one because the test can only be executed on emulators/simulators
        //'../tests/specs/**/app.biometric.login.spec.ts',
    ],

    // =============================
    // Browserstack specific config
    // =============================
    // User configuration
    user: process.env.BROWSERSTACK_USER || 'atddevs_shCVBn',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'mjzX7BSrFPDFqR48hqya',
    // Use browserstack service
    services: ['browserstack'],

    // ============
    // Capabilities
    // ============
    // For all capabilities please check
    // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
    capabilities: [
        {
            // Set URL of the application under test
            'appium:app': process.env.BROWSERSTACK_APP_ID || 'bs://c23623f0addff69f49bcd982fbe0fd9aecec44a9',

            'bstack:options': {
                // Set your BrowserStack config
                    deviceName: 'Samsung Galaxy S22 Ultra',
                    platformVersion: '12.0',
                    platformName: 'android',

                // Set other BrowserStack capabilities
                projectName: 'wdio-test-project',
                buildName: 'android',
                sessionName: 'wdio-test'
            }
        },
    ] as any
};
