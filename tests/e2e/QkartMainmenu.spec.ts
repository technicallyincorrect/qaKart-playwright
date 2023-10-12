import { test, expect } from "@playwright/test";
import LoginPage from "../../pages/loginPage";
import MainPage from "../../pages/mainPage";  // <-- Don't forget to import this
import { readCredentialsFromTOM } from "../../utils/config";

test('Order', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const mainPage = new MainPage(page);  // <-- Instantiate the MainPage object

    const { username, password } = readCredentialsFromTOM();

    await loginPage.navigate();
    await loginPage.fillUsername(username);
    await loginPage.fillPassword(password);
    await loginPage.loginButton();

    await mainPage.selectShoeSize();
    await mainPage.addConnector();
    await mainPage.goToNextPage();
    await mainPage.addRouter();
    await mainPage.checkout();
    await mainPage.addNewAddress();
    await mainPage.placeOrder();
    await mainPage.continueShopping();
});
