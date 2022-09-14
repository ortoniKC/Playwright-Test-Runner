import { test } from "@playwright/test";
test("Block images - Network Intercept", async ({ page }) => {


    await page.route("**/*", request => {

        return request.request().url()
            .startsWith("https://googleads.g.doubleclick.net/pagead/ads")
            ? request.abort() :
            request.continue();

        // return request.request().resourceType() === "image"
        //     ? request.abort() :
        //     request.continue();
    })
    await page.goto("https://letcode.in/test")
    await page.waitForTimeout(5000);
})

