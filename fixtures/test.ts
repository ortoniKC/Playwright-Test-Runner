import test, { expect } from "./basePages"
import * as data from "../data/login.cred.json";

test.beforeEach(async ({ page }) => {
    await page.goto("https://letcode.in")
})

test.describe("Allure Report for login", () => {


    test("Login Positive", async ({ headerPage, loginPage, commonPage, page }) => {

        await headerPage.clickLoginLink();
        await headerPage.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await loginPage.enterUserName(data.email);
        await loginPage.enterUserPassword(data.pass);
        await loginPage.clickLoginBtn();
        const toaster = await commonPage.toaster();
        expect(await toaster?.textContent()).toContain("Welcome");
        await headerPage.clickSignOutLink();
    })
    test("Login negative", async ({ headerPage, loginPage, commonPage, page }) => {

        await headerPage.clickLoginLink();
        await headerPage.clickLoginLink();
        expect(page.url()).toBe("https://letcode.in/signin")
        await loginPage.enterUserName(data.email);
        await loginPage.enterUserPassword("wrong");
        await loginPage.clickLoginBtn();
        const toaster = await commonPage.toaster();
        expect(await toaster?.textContent()).toContain("Welcome");
        await headerPage.clickSignOutLink();
    })
})