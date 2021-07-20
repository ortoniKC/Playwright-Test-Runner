import { test } from "@playwright/test";

test("first test", () => {
    console.log("first test running");
    console.log("first test completed");
});
test("second test", async ({ page }) => {
    await page.goto("https://letcode.in")
    console.log("second test running");
    console.log("second test completed");
});
test("third test", async () => {
    console.log("third test running");
    console.log("third test completed");
});