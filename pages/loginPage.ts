import { Page } from "playwright";

class LoginPage{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }
    async navigate(){
        await this.page.goto('https://crio-qkart-frontend-qa.vercel.app/login')
    }
    async fillUsername(username: string){
        await this.page.fill('input[name="username"]', username)
    }
    async fillPassword(password: string){
        await this.page.fill('input[name="password"]',password)
    }
    async loginButton(){
        //await this.page.click('button[type="button"]')
        await this.page.click("//*[@id='root']/div/div/div[2]/div/button")
    }
    async isLoggedIn(){
        return await this.page.getByText('log Out')
    }
}
export default LoginPage;