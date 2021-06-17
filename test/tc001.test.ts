import CommonFunctions from "../page/common.page";
import HeaderPage from "../page/Header.page";
import LoginPage from "../page/Login.page";
import * as data from "../data/login.cred.json";
import { expect, Page, test } from "@playwright/test";

test.describe("TC001", () => {
    let header: HeaderPage;
    let login: LoginPage;
    let common: CommonFunctions;
    let page: Page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        header = new HeaderPage(page);
        login = new LoginPage(page);
        common = new CommonFunctions(page);
    })
    test.beforeEach(async () => {
        await page.goto("https://letcode.in")
    })

    test("Login positive", async () => {
        await page.goto("https://letcode.in")
        expect(page.url()).toBe("https://letcode.in/")
        await header.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await login.enterUserName(data.email);
        await login.enterUserPassword(data.pass);
        await login.clickLoginBtn();
        const toaster = await common.toaster();
        expect(await toaster?.textContent()).toContain("Welcome");
        await header.clickSignOutLink();
    });
    test("Login again", async () => {
        await page.goto("https://letcode.in")
        await header.clickLoginLink();
        await login.login("koushik350@gmail.com", data.pass);
        await page.waitForNavigation();
        expect(page.url()).toBe("https://letcode.in/")
    })
})