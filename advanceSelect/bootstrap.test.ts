// https://zetcode.com/javascript/regex/ - reference to learn Regex
import { Page, test } from "@playwright/test";

test.use({
    viewport: {
        height: 824,
        width: 1536
    }
})
test("Select from bootstrap dropdown", async ({ page }) => {

    await page.goto("file:///Y:/my-code-base/Playwright-Test-Runner/advanceSelect/index.html");
    // await page.locator(".selectpicker")
    //     .selectOption({
    //         label: "Playwright"
    //     })
    await selectOption(page, /^Playwright$/g);
    await selectOption(page, /^Cypress$/g);
    await page.waitForTimeout(5000)
})

async function selectOption(page: Page, data: RegExp) {
    await page.locator(".filter-option").click();
    await page.locator(".dropdown-menu")
        .locator("li", {
            has: page.locator("a span"),
            hasText: data
        }).click();
}
