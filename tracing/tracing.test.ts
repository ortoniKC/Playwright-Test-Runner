import { test } from "@playwright/test";
test("", async ({ browser }) => {
    const context = await browser.newContext();
    // start tracing
    await context.tracing.start(
        {
            screenshots: true, snapshots: true
        }
    );
    const page = await context.newPage();
    await page.goto('https://playwright.dev');

    // Stop tracing and export it into a zip archive.
    await context.tracing.stop({ path: 'trace.zip' });
})