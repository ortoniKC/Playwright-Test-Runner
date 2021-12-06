import { test } from "@playwright/test";
const clipboard = require("clipboardy");
var url: any;
test("Access clipboard", async ({ page }) => {
    await test.step("Goto the https://clipboardjs.com/", async () => {
        await page.goto("https://clipboardjs.com/");
    });
    await test.step("click to copy", async () => {
        await page.click("//button[@data-clipboard-action='copy']", { force: true });
    });
    await test.step("access the clipboard", async () => {
        let text = await clipboard.read();
        console.log('From clipboard: ' + text);
        await page.click("button[data-clipboard-target='#foo']")
        url = await clipboard.read();
        console.log('From clipboard URL: ' + url);
        const newPage = await page.context().newPage();
        await newPage.goto(url);
        console.log("Title from new tab: " + await newPage.title());

    });
})
test("Open url from clipboard", async ({ page }) => {
    await page.goto(url);
    console.log(await page.title());
})