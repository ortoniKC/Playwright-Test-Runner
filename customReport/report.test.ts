import { test } from "@playwright/test";


test.describe("Custom Reporter", () => {

    test("Navigation test", async ({ page }) => {
        await test.step("visit letcode", async () => {
            await page.goto("https://letcode.in")
        })
        await test.step("visit playwright", async () => {
            await page.goto("https://playwright.dev");
            console.log("step completed");
        })
    })

})