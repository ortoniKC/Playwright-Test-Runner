import { expect, test } from "@playwright/test";

test("Wait for title change", async ({ page }) => {

    await test.step("Goto to Flipkart", async () => {
        await page.goto("https://www.flipkart.com/")
    })
    await test.step("Close the login pop up", async () => {
        await page.click("button:has-text('✕')")
    })
    await test.step("naviagate to gaming and verify the title", async () => {
        await page.hover("//div[text()='Electronics']");
        await page.waitForSelector("'Gaming'");
        await page.click("'Gaming'");
        expect(page).toHaveTitle(/.*Gaming.*/)
    })
})