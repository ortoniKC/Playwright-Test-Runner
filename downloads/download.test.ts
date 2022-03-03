import { expect, test } from "@playwright/test";

test("Download file", async ({ page }, testInfo) => {

    await test.step("Goto the application", async () => {
        await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
        expect(await page.title()).toContain("Selenium");
    })
    await test.step("Enter test data", async () => {
        await page.locator("#textbox").type("Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis earum itaque assumenda doloribus reprehenderit, laborum, cum eaque dolor ducimus quos ad, quibusdam blanditiis. Architecto animi eligendi vero necessitatibus quasi rem quis quod eaque eius iste officiis nostrum id quae, est dolores, saepe perferendis quo! Doloremque neque quos rerum harum esse.");
        await page.locator("#create").click();
    })
    await test.step("Download file", async () => {
        const [download] = await Promise.all([
            page.waitForEvent('download'),
            page.click("text='Download'")
        ]);
        const path = download.suggestedFilename();
        await download.saveAs(path);
        await testInfo.attach('downloaded', { path: path });
    })
})