import TabBar from '../screenobjects/components/TabBar.js';
import WebViewScreen from '../screenobjects/WebviewScreen.js';
import LoginScreen from '../screenobjects/LoginScreen.js';
import FormsScreen from '../screenobjects/FormsScreen.js';
import SwipeScreen from '../screenobjects/SwipeScreen.js';
import HomeScreen from '../screenobjects/HomeScreen.js';
import DragScreen from '../screenobjects/DragScreen.js';

describe('WebdriverIO and Appium, when using navigation through the tab bar', () => {
    beforeEach(async () => {
        await TabBar.waitForTabBarShown();
    });

    afterEach(async function () {
        if (driver) {
            await driver.executeScript('devicefarm: setSessionStatus', [
                {
                    status: this?.currentTest?.state, //passed or failed
                },
            ]);
        }
    });

    it('should be able to open the webview', async () => {
        await driver.executeScript('devicefarm: setSessionName', [{ name: 'Webview Test' }])
        await TabBar.openWebView();
        await WebViewScreen.waitForWebsiteLoaded();
    });

    it('should be able to open the login form screen', async () => {
        await driver.executeScript('devicefarm: setSessionName', [{ name: 'Login Test' }])
        await TabBar.openLogin();
        await LoginScreen.waitForIsShown(true);
    });

    it('should be able to open the forms screen', async () => {
        await driver.executeScript('devicefarm: setSessionName', [{ name: 'Forms Test' }])
        await TabBar.openForms();
        await FormsScreen.waitForIsShown(true);
    });

    it('should be able to open the swipe screen', async () => {
        await driver.executeAsync('devicefarm: setSessionName', [{ name: 'Swipe Test' }])
        await TabBar.openSwipe();
        await SwipeScreen.waitForIsShown(true);
    });

    it('should be able to open the drag and drop screen', async () => {
        await driver.executeAsync('devicefarm: setSessionName', [{ name: 'Drag and Drop Test' }])
        await TabBar.openDrag();
        await DragScreen.waitForIsShown(true);
    });

    it('should be able to open the home screen', async () => {
        await driver.executeScript('devicefarm: setSessionName', [{ name: 'Home Test' }]);
        await TabBar.openHome();
        await HomeScreen.waitForIsShown(true);
    });
});
