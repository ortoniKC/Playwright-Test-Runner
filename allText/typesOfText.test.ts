import { test } from "@playwright/test";

test("Type of text", async ({ page }) => {
    await page.goto("http://127.0.0.1:5500/allText/index.html");
    await test.step("Inner HTML", async () => {
        await page.click("#innerHTML");
        let txt = await page.locator("#attach").innerHTML();
        console.log('Inner HTML: ' + txt);
    });
    await test.step("Inner Text", async () => {
        await page.click("#innerHTML");
        let txt = await page.locator("#attach").innerText();
        console.log('Inner Text: ' + txt);
    });
    await test.step("Text Content", async () => {
        await page.click("#innerHTML");
        let txt = await page.locator("#attach").textContent();
        console.log('Text Content: ' + txt);
    })
})