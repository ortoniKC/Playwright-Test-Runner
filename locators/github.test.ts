import { expect, test } from "@playwright/test";


test("Signin into Git", async ({ page }) => {
    await page.goto("https://github.com/login");
    await page.fill("input:below(:text('Username or'))", "ortoniKC");
    await page.fill("#password:above(:text('Sign in'))", "password");
    await page.click("a:near(:text('Password'))");
    expect(page.url()).toBe("https://github.com/password_reset")

    // thread.sleep();
    // await page.waitForTimeout(3000);

})

test("In depth", async ({ page }) => {
    await page.goto('https://opengiro.ing.de/pub/girokonto-einzelkonto');
    await page.pause();
    await page.fill("input:below(:text('Prof.')):right-of(:text('Vorname'))",
        "koushik");
})