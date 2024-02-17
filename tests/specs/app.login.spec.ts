import TabBar from '../screenobjects/components/TabBar.js';
import LoginScreen from '../screenobjects/LoginScreen.js';
import NativeAlert from '../screenobjects/components/NativeAlert.js';

describe('WebdriverIO and Appium, when interacting with a login form,', async () => {

    beforeEach(async () => {
        await driver.executeScript('devicefarm: setSessionName', [{ name: 'Login Test' }])
        await TabBar.waitForTabBarShown();
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    afterEach(async function () {
        if (driver) {
            await driver.executeScript('devicefarm: setSessionStatus', [
                {
                    status: this.currentTest?.state, //passed or failed
                },
            ]);
        }
    });

    it('should be able login successfully', async () => {
        // Always make sure you are on the right tab
        await LoginScreen.tapOnLoginContainerButton();
        // Submit the data
        await LoginScreen.submitLoginForm({ username: 'test@webdriver.io', password: 'Test1234!' });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toContain('Success');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });

    it('should be able sign up successfully', async () => {
        //await driver.executeScript('devicefarm: setSessionName', [{ name: 'Sign Up Test' }])
        // Always make sure you are on the right tab
        await LoginScreen.tapOnSignUpContainerButton();
        // Submit the data
        await LoginScreen.submitSignUpForm({ username: 'test@webdriver.io', password: 'Test1234!' });
        // Wait for the alert and validate it
        await NativeAlert.waitForIsShown();
        await expect(await NativeAlert.text()).toContain('Signed Up');

        // Close the alert
        await NativeAlert.topOnButtonWithText('OK');
        await NativeAlert.waitForIsShown(false);
    });
});
