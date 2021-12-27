import { test } from "@playwright/test";
test("New Frame API", async ({ page }) => {

    await page.goto("/frame");
    const frame = page.frameLocator("#firstFr");
    await frame.locator("input[name='fname']").type("koushik")
    const lname = frame.locator("input[name='lname']");
    await lname.type("chatterjee")
    const text = await frame.locator("p.title.has-text-info").textContent();
    console.log(text);
});
test("Inner frame", async ({ page }) => {
    await page.goto("/frame");
    const frame = page.frameLocator("#firstFr");
    const innerFrame = frame.frameLocator("iframe.has-background-white");
    await innerFrame.locator("input[name='email']").type("koushik@letcode.in")
    await frame.locator("input[name='fname']").type("koushik");
    await page.click("'Log in'");
})