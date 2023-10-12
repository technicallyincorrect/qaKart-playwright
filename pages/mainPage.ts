import { Page } from "@playwright/test";

export default class MainPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectShoeSize() {
        await this.page.locator('div').filter({ hasText: /^Roadster Mens Running Shoes\$30Size chartSize678910Add to cart$/ }).getByRole('button').nth(1).click();
    }

    async addConnector() {
        await this.page.locator('div').filter({ hasText: /^Connector\$80Add to cart$/ }).getByRole('button').click();
    }

    async goToNextPage() {
        await this.page.getByLabel('Go to page 2').click();
    }

    async addRouter() {
        await this.page.locator('div').filter({ hasText: /^Router\$60Add to cart$/ }).getByRole('button').click();
    }

    async checkout() {
        await this.page.getByRole('button', { name: 'Checkout' }).click();
    }

    async addNewAddress() {
        await this.page.getByRole('button', { name: 'Add new address' }).click();
        await this.page.getByPlaceholder('Enter your complete address').click();
        await this.page.getByPlaceholder('Enter your complete address').fill('admin 1234, bangalore.');
    }

    async placeOrder() {
        await this.page.getByRole('button', { name: 'Add' }).click();
        await this.page.getByRole('radio').check();
        await this.page.getByRole('button', { name: 'PLACE ORDER' }).click();
    }

    async continueShopping() {
        await this.page.getByRole('button', { name: 'Continue Shopping' }).click();
    }
}
