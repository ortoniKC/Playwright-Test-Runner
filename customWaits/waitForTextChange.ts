import { expect, test } from "@playwright/test";

test("Wait for text change", async ({ page }) => {

    await page.goto("http://127.0.0.1:5500/customWaits/index.html");
    const text = await page.locator("#change").innerText();
    await page.waitForFunction("document.querySelector('#change').innerText != 'Loading..'")
    expect(page.locator("#change")).toHaveText("Welcome")

})