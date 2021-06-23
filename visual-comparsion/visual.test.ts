import { expect, test } from "@playwright/test";

test("Visual comparsion", async ({ page }) => {
    await page.goto("https://letcode.in");

    expect(await page.screenshot({
        fullPage: true
    })).toMatchSnapshot("letcode.png")

})

test('example test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    expect(await page.screenshot()).toMatchSnapshot('snapshot-name.png');
});