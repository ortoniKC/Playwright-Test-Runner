import test, { expect } from "./basePages"
import * as data from "../data/login.cred.json";

test.beforeEach(async ({ page }) => {
    await page.goto("/")
})

// test.describe.serial.only("", () => { })
test.describe("Skip on Failure", () => {

    test("E2E test", async ({ headerPage, loginPage, commonPage, page }) => {
        await test.step("Login", async () => {
            await headerPage.clickLoginLink();
            expect(page.url()).toBe("https://letcode.in/signin")
            await loginPage.enterUserName(data.email);
            await loginPage.enterUserPassword(data.pass);
            await loginPage.clickLoginBtn();
            const toaster = await commonPage.toaster();
            expect(await toaster?.textContent()).toContain("Welcome");
            await headerPage.clickSignOutLink();
        })
        await test.step("search product", async () => {
            // todo
        })

        await test.step("Checkout", async () => {
            // await headerPage.clickLoginLink();
            // expect(page.url()).toBe("https://letcode.in/signin")
            // await loginPage.enterUserName(data.email);
            // await loginPage.enterUserPassword(data.pass);
            // await loginPage.clickLoginBtn();
            // const toaster = await commonPage.toaster();
            // expect(await toaster?.textContent()).toContain("Welcome");
            // await headerPage.clickSignOutLink();
        })
    })
    // test("Login negative", async ({ headerPage, loginPage, commonPage, page }) => {
    //     await headerPage.clickLoginLink();
    //     await headerPage.clickLoginLink();
    //     expect(page.url()).toBe("https://letcode.in/signin")
    //     await loginPage.enterUserName(data.email);
    //     await loginPage.enterUserPassword("wrong");
    //     await loginPage.clickLoginBtn();
    //     const toaster = await commonPage.toaster();
    //     expect(await toaster?.textContent()).toContain("Welcome");
    //     await headerPage.clickSignOutLink();
    // })
})