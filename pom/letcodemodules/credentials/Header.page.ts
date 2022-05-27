import { Page } from "@playwright/test";

export default class HeaderPage {

    private page: Page;
    private isMob: boolean | undefined;

    constructor(page: Page, isMob: boolean | undefined) {
        this.page = page;
        this.isMob = isMob
    }


    // locators

    public get eleLoginBtn() {
        const loginBtn = this.page.$("text=Log in");
        if (loginBtn != null) {
            return loginBtn;
        } else throw new Error("No Element")
    }

    public get eleSignOutBtn() {
        const signoutEle = this.page.$("text=Sign out");
        if (signoutEle != null) {
            return signoutEle;
        } else throw new Error("No Element")
    }

    public async clickLoginLink() {
        console.log("Is mobile view? " + this.isMob);

        if (this.isMob) {
            await this.page.click("//a[@aria-label='menu']")
        }
        await Promise.all([
            this.page.waitForNavigation({
                waitUntil: "domcontentloaded"
            }),
            this.page.click("text=Log in")
        ])
        // const ele = await this.eleLoginBtn;
        // await ele?.click();
    }
    public async clickSignOutLink() {
        const ele = await this.eleSignOutBtn;
        await ele?.click();
    }
}