import { expect, test } from "@playwright/test";


test("Goto Sign up page", async ({ page }) => {

    await page.goto("/signup");
    expect(page.url()).toBe("https://letcode.in/signup")

});

test("Goto Login up page", async ({ page }) => {
    await page.goto("/signin");
    expect(page.url()).toBe("https://letcode.in/signin")
});

test("Goto workspace up page", async ({ page }) => {
    await page.goto("/test");
    expect(page.url()).toBe("https://letcode.in/test")
});
