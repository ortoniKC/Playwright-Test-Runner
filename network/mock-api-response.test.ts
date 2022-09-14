import { expect, test } from "@playwright/test";
test("Mock API Response", async ({ page }) => {

    await page.route("**/Book", (route) => {
        route.fulfill({
            status: 200,
            contentType: "application/json",
            path: "booksAPI.json"
        })
    })
    await page.goto("http://localhost:4200/books/home");
    const titles = page.locator(".title.is-4")
    const count = await titles.count();
    expect(count).toBeGreaterThan(0);
    for (let index = 0; index < count; index++) {
        console.log(await titles.nth(index).textContent());
    }
})

