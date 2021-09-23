import { test } from "@playwright/test";

test("Color Scheme", async ({ page }) => {
    await page.goto("https://playwright.dev")
    console.log(await page.title());
    let git = page.locator("text=GitHub");
    const box = await git.boundingBox();
    if (box) {
        const y = box.y;
        await page.mouse.wheel(0, y);
    }
    // await git.scrollIntoViewIfNeeded();
    // await page.waitForTimeout(3000);
})
