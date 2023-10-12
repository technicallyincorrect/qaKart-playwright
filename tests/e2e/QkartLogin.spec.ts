import {test, expect} from '@playwright/test'
import LoginPage from '../../pages/loginPage'
import { readCredentialsFromTOM } from '../../utils/config'

test('login Test', async ({page}) => {
    const loginPage = new LoginPage(page);

    const{username,password} = readCredentialsFromTOM();
    
    await loginPage.navigate()
    await loginPage.fillUsername(username)
    await loginPage.fillPassword(password)

    await loginPage.loginButton()

    //const loggedIn = await loginPage.isLoggedIn()
    //expect (loggedIn).toBeTruthy;
})