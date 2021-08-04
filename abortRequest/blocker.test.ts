import { test } from "@playwright/test";
test("Block images", async ({ page }) => {
    await page.route('**/*', route => {
        // route.request().url().startsWith("https://googleads.g.doubleclick.net/pagead/ads") ? route.abort() : route.continue()
        return route.request().resourceType() === 'image' ?
            route.abort() : route.continue();
    });
    // await route
    await page.goto("https://unsplash.com/t/people")
    await page.goto("https://letcode.in/test")
    await page.waitForTimeout(5000);
})

