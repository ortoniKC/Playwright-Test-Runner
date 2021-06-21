import { test } from "@playwright/test";

// test("Interact with shadow DOM", async ({ page }) => {
//     await page.goto("https://letcode.in/shadow");
//     await page.fill("#fname", "koushik");
//     await page.waitForTimeout(3000);
// });



test("chromium bug App", async ({ page }) => {
    await page.goto("https://bugs.chromium.org/p/chromium/issues/list");
    // select dropdown
    const ele = await page.$("#can")
    if (ele) {
        await ele.selectOption({
            label: "Issues to verify"
        })
    } else throw new Error("Eleemnt not found")

    // input data

    await page.fill("#searchq", "some bug");
    await page.waitForTimeout(3000);
})