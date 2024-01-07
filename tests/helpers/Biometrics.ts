import { DEFAULT_PIN, INCORRECT_PIN } from './Constants.js';

class Biometrics {
    private get iosAllowBiometry() {return $('~Don’t Allow');}
    private get allowBiometry() {return $('~Allow');}
    private get androidBiometryAlert() {
        const regex = '(Please log in|Login with.*)';

        return $(`android=new UiSelector().textMatches("${regex}")`);
    }

    /**
     * Submit biometric login
     */
    async submitBiometricLogin(successful: boolean) {
        // Touch / Face ID needs to be triggered differently on iOS
        if (driver.isIOS) {
            return this.submitIosBiometricLogin(successful);
        }

        return this.submitAndroidBiometricLogin(successful ? DEFAULT_PIN : INCORRECT_PIN);
    }

    /**
     * Submit iOS biometric login
     */
    async submitIosBiometricLogin(successful: boolean) {
        await this.allowIosBiometricUsage();

        return driver.touchId(successful);
    }

    /**
     * Allow biometric usage on iOS if it isn't already accepted
     */
    async allowIosBiometricUsage() {
        // When Touch/FaceID is used for the first time it could be that an alert is shown which needs to be accepted
        try {
            await this.iosAllowBiometry.waitForDisplayed({ timeout: 3 * 1000 });
            await this.allowBiometry.click();
        } catch (e) {
            // This means that allow using touch/facID has already been accepted and thus the alert is not shown
        }
    }

    /**
     * Submit Android biometric login
     */
    async submitAndroidBiometricLogin(fingerprintId:number) {
        await this.androidBiometryAlert.waitForDisplayed({ timeout: 10 *1000 });

        await driver.fingerPrint(fingerprintId);
    }
}

export default new Biometrics();
