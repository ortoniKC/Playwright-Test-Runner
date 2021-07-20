import { expect, test } from "@playwright/test";

test("Basic UI verification", async ({ page }) => {

    // isDisabled()?
    await page.goto("https://letcode.in/edit_");
    expect(await page.isDisabled("#noEdit")).toBe(false);

    // isEditable()?
    const edit = await page.isEditable("#dontwrite");
    console.log("is edit? " + edit);
    expect(edit).not.toBe(true);


    // isEnabled()?
    await page.goto("https://letcode.in/buttons");
    const ele = await page.$("#isDisabled");
    console.log(await ele?.isEnabled());

    // isHidden()?
    // isVisible()?
    console.log(await ele?.isVisible());

    // checkbox/radio check/uncheck
    // checkbox/radio isChecked?
    await page.goto("https://letcode.in/radio");
    await page.waitForSelector("input:below(:text('Find if the checkbox is selected?'))")
    const checkBox = await page.$("input:below(:text('Find if the checkbox is selected?'))")
    if (checkBox) {
        expect(await checkBox.isChecked()).toBe(true);
        await checkBox.uncheck();
    }
    else { throw new Error("Elementnd"); }
})
