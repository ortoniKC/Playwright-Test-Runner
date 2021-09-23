import { expect, test } from "@playwright/test";

test.describe.parallel("Parallel", () => {
    test("goto letcode", async ({ page }) => {
        await page.goto("https://letcode.in")
        console.log(await page.title());
    });
    test("goto letcode", async ({ page }) => {
        await page.goto("https://playwright.dev")
        console.log(await page.title());
    });
    test("goto google.com", async ({ page }) => {
        await page.goto("https://google.com")
        console.log(await page.title());
    });
})