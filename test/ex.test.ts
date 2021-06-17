import { test, expect } from '../fixture/basefixture'
import * as data from "../data/login.cred.json";

test.describe("TC001", () => {

    test("Login positive", async ({ headerPage, loginPage, common, letcodeInPage }) => {
        await letcodeInPage.goto("https://letcode.in/")
        expect(letcodeInPage.url()).toBe("https://letcode.in/")
        await headerPage.clickLoginLink();
        expect(letcodeInPage.url()).toBe("https://letcode.in/signin")
        await loginPage.enterUserName(data.email);
        await loginPage.enterUserPassword(data.pass);
        await loginPage.clickLoginBtn();
        const toaster = await common.toaster();
        expect(await toaster?.textContent()).toContain("Welcome");
        await headerPage.clickSignOutLink();
    });
    test("Login again", async ({ headerPage, letcodeInPage, loginPage }) => {
        await letcodeInPage.goto("https://letcode.in/")
        await headerPage.clickLoginLink();
        await loginPage.login("koushik350@gmail.com", data.pass);
        await letcodeInPage.waitForNavigation();
        expect(letcodeInPage.url()).toBe("https://letcode.in/")
    })
})