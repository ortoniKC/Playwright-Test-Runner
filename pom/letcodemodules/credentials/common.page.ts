import { Page } from "@playwright/test";

export default class CommonFunctions {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    goto = async () => {
        await this.page.goto("https://letcode.in")
    }
    toaster = async () => await this.page.waitForSelector("div[role='alertdialog']");

    // public async verifToastMessage() {

    // }
}