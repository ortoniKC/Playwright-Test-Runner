import { test } from "@playwright/test";

test("Wait for an alert", async ({ page }) => {

    await test.step("Goto to page", async () => {
        await page.goto("https://letcode.in/waits")
    })
    await test.step("Accept the alert", async () => {
        page.on("dialog", async (alert) => {
            console.log('Alert message: ' + alert.message());
            await alert.accept();
        });
        // await page.click("#accept")
        await page.waitForEvent("dialog");
    })
})