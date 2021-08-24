import { test } from "@playwright/test";
// Update:
// Instead of this, we can directly use it in the playwright.config.ts
test("Conetext tracing", async ({ browser }) => {
    const context = await browser.newContext();
    // start tracing
    await context.tracing.start(
        {
            screenshots: true, snapshots: true
        }
    );
    const page = await context.newPage();
    await page.goto('https://letcode.in');
    // Stop tracing and export it into a zip archive.
    await context.tracing.stop({ path: 'trace0.zip' });
})
// for other browser
// test("Browser tracing", async ({ page, browser }) => {
//     await browser.startTracing(page, { path: "./trace1.zip" });
//     await page.goto('https://letcode.in');
//     await browser.stopTracing();
// })