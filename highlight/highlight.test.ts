import { expect, test } from "@playwright/test";


test("Highlight elements", async ({ page }, testInfo) => {

    await page.goto("https://letcode.in/edit");
    let signup = page.locator("text='Sign up'")
    let login = page.locator("text='Log in'")
    let sc = await page.screenshot(
        {
            path: "./img.png",
            mask: [signup, login]
        });
    await testInfo.attach("highlighted screenshot", {
        body: sc,
        contentType: "image/png"
    })
    let ele = page.locator("#fullName");
    expect.soft(await ele.getAttribute("placeholder")).toBe("Enter first & last");
    console.log(await page.title());


})