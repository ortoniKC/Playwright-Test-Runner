import { expect, test } from "@playwright/test";
test("open letcode and verify title", async ({ page }) => {
    await page.goto("https://letcode.in");
    const title = await page.title();
    expect(title).toBe("LetCode with Koushik");
});
test("open letcode and login", async ({ page }) => {
    await page.goto("https://letcode.in");
    const title = await page.title();
    expect(title).toBe("LetCode with Koushik");
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://letcode.in/signin' }*/),
        page.click('text=/.*Log in.*/')
    ]);
    await page.click('input[name="email"]');
    await page.fill('input[name="email"]', 'koushik350@gmail.com');
    await page.fill('input[name="password"]', 'Pass123$');
    await Promise.all([
        page.waitForNavigation(/*{ url: 'https://letcode.in/' }*/),
        page.click('//button[normalize-space(.)=\'LOGIN\']')
    ]);
    expect(page.url()).toBe("https://letcode.in");
});