import { test } from "@playwright/test";

test("Track all Request", async ({ page }) => {


    await page.routeFromHAR("har/booksapi.har", {
        update: false
    })
   
    await page.goto("https://bookcart.azurewebsites.net/", {
        waitUntil:"domcontentloaded"
    })
    await page.fill("input[type='search']", "HP7")
    await page.click("span.mat-option-text")
    await page.waitForTimeout(5000)
})
