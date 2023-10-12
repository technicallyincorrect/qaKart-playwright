import { test } from '@playwright/test';
import { generateRandomAlphanumeric } from '../../utils/utils.js';
import RegistrationPage from '../../pages/registrationPage';
 
test('Registration', async ({ page }) => {
    const registrationPage = new RegistrationPage(page);
    await registrationPage.navigate();

    const username = `John Doe ${generateRandomAlphanumeric(5)}`;
    const password = `${generateRandomAlphanumeric(6)}`;

    
    await registrationPage.enterUsername(username);
    await registrationPage.enterPassword(password);
    await registrationPage.confirmPassword(password);
    await registrationPage.register();

    console.log("The username used is: "+ username)
    console.log("The password used is: "+ password)
    
    // Add any assertions as needed
});
   