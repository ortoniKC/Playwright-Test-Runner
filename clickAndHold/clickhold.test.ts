import { test, expect } from "@playwright/test";
test("Click and hold", async ({ page }) => {


    // Go to https://letcode.in/
    await page.goto('https://letcode.in/');

    // Click text=Explore Workspace
    await page.click('text=Explore Workspace');
    await expect(page).toHaveURL('https://letcode.in/test');

    // Click text=Click
    await page.click('text=Click');
    await expect(page).toHaveURL('https://letcode.in/buttons');

    // Click button:has-text("Button Hold!")
    await page.click('button:has-text("Button Hold!")', {
        delay: 3000
    })
    const ele = await page.$("h2")
    expect(await ele?.textContent()).toContain('long pressed')
})
