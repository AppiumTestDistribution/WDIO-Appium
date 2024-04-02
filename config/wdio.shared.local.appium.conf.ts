import { config as baseConfig } from './wdio.shared.conf.js';

// @ts-ignore
export const config: WebdriverIO.Config = {
    ...baseConfig,

    //
    // ======
    // Appium
    // ======
    //
    services: [
       ['/Users/saikrishna/Downloads/git/wdio-devicefarm-service/build/index.js'],
        // [
        //     'appium',
        //     {
        //         // This will use the globally installed version of Appium
        //         // command: 'appium',
        //         args: {
        //             // This is needed to tell Appium that we can execute local ADB commands
        //             // and to automatically download the latest version of ChromeDriver
        //             relaxedSecurity: true,
        //             // Write the Appium logs to a file in the root of the directory
        //             log: './logs/appium.log',
        //         },
        //     },
        // ],
    ],
    before: async ()=> {
        // Only update the setting for Android, this is needed to reduce the timeout for the UiSelector locator strategy,
        // which is also used in certain tests, so it will not wait for 10 seconds if it can't find an element
        // if (driver.isAndroid){
        //     await driver.updateSettings({
        //         // This reduces the timeout for the UiUiSelector from 10 seconds to 3 seconds
        //         waitForSelectorTimeout: 3 * 1000
        //     });
        // }
    }
    // before: async ()=> {
    //     console.log('Before ALL from config')
    //     // Only update the setting for Android, this is needed to reduce the timeout for the UiSelector locator strategy,
    //     // which is also used in certain tests, so it will not wait for 10 seconds if it can't find an element
    //     if (driver.isAndroid){
    //         await driver.updateSettings({
    //             // This reduces the timeout for the UiUiSelector from 10 seconds to 3 seconds
    //             waitForSelectorTimeout: 3 * 1000
    //         });
    //     }
    // },
};

async function customBeforeTest() {
    // Custom logic for beforeTest in the custom service
    console.log('Custom beforeTest hook from wdio.config.js', driver.isAndroid);
    console.log('********', await driver.getCurrentActivity());
    console.log('Finished BeforeTest from config')
}
