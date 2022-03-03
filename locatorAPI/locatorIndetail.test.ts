import { test } from "@playwright/test"
test.describe("My awesome report suite", () => {

    test("Locator in detail", async ({ page }, testInfo) => {

        await test.step("Login", async () => {
            await page.goto("https://www.saucedemo.com/");
            const user = page.locator("input[placeholder='Username']")
            await user.fill("standard_user");
            const pass = page.locator("input[placeholder='Password']")
            await pass.fill("secret_sauce");
            await page.click("#login-button");
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
            })
        })
        await test.step("Change price", async () => {
            const priceSelect = page.locator("select.product_sort_container")
            await priceSelect.selectOption({ value: "lohi" })
            await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: await page.screenshot()
            })
            const firstProduct = page.locator("#inventory_container div.inventory_item_label a div")
            console.log(await firstProduct.first().textContent());
            await priceSelect.selectOption({ value: "hilo" })
            await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: await page.screenshot()
            })
            console.log(await firstProduct.first().textContent());
        })
    })
})