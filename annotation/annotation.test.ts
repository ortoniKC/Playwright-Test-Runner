import { expect, test } from "@playwright/test";

// test.only("first test", async ({ page }) => {
//     // test.fail();
//     test.slow()
//     // test.setTimeout(10000)
//     console.log("first test running");
//     await page.goto("https://letcode.in")
//     // expect(await page.title()).toBe("LetCode with")
//     console.log("first test completed");
// });
test("second test", async ({ page }) => {
    console.log("second test running");
    await page.goto("https://playwright.dev")
    console.log("second test completed");
});
test("third test", async ({ page, browserName }) => {
    console.log("Name: " + browserName);
    // test.fixme()
    // if (browserName === "firefox") {
    //     test.skip()
    // }

    console.log("third test running");
    await page.goto("https://letcode.in")
    console.log("third test completed");
    // wrong
});