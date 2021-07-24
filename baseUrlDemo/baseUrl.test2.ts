import { expect, test } from "@playwright/test";

// local config

test.use({
    baseURL: "https://play.letcode.in/"
})

test("Goto Sign up page", async ({ page }) => {
    await page.goto("/edit");
    expect(page.url()).toBe("https://play.letcode.in/edit")

});

// test("Goto Login up page", async ({ page }) => {
//     await page.goto("/signin");
//     expect(page.url()).toBe("https://letcode.in/signin")
// });

// test("Goto workspace up page", async ({ page }) => {
//     await page.goto("/test");
//     expect(page.url()).toBe("https://letcode.in/test")
// });
