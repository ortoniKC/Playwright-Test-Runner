import { test } from "@playwright/test";

test("canva login", async ({ browser }) => {

    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    const ctxt = page.context();
    ctxt.storageState()
    await page.goto("https://www.canva.com/");
    await page.waitForTimeout(5000);
})