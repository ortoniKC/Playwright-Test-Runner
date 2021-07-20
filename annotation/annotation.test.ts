import { test } from "@playwright/test";

test("second test", async ({ page }) => {
    console.log("second test running");
    await page.goto("https://letcode.in")
    console.log("second test completed");
});