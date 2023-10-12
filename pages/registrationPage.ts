import { Page } from '@playwright/test';

export default class RegistrationPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://crio-qkart-frontend-qa.vercel.app/register');
    }

    async enterUsername(username: string) {
        await this.page.fill('input[placeholder="Enter Username"]', username);
    }
    async enterPassword(password: string) {
        await this.page.fill('input[placeholder="Enter a password with minimum 6 characters"]', password);
    }
    async confirmPassword(password: string) {
        await this.page.fill('input[placeholder="Re-enter your password to confirm"]', password);
    }

    async register() {
        await this.page.click('role=button >> text=REGISTER NOW');
    }

    // You can also add methods to validate elements' visibility or any other operations you might need
}

