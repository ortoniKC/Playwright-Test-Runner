import { test } from "@fixtures/myFixtures";
import { expect } from "@playwright/test";
const computerData = [{
    name: "Comp A",
    manufacture: "Tandy Corporation"
},
{
    name: "Comp B",
    manufacture: "Commodore International"
},
{
    name: "Comp C",
    manufacture: "Thinking Machines"
},
{
    name: "Comp D",
    manufacture: "Nokia"
}
]
computerData.forEach(data => {

    test(`Parameterized test ${data.name}`, async ({ page }) => {
        await page.goto("https://computer-database.gatling.io/computers");
        await page.click("#add");
        await page.fill("#name", data.name);
        await page.selectOption("#company", {
            label: data.manufacture
        });
        await page.click("input[type='submit']");
        expect(page.locator("div.alert-message.warning")).toContainText("Done")
    })
})