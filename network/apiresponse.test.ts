import { test } from "@playwright/test";

test("Read API response", async ({ page }) => {
    await page.goto("https://letcode.in/elements");
    // verify response status | URL | Body


    const [response] = await Promise.all([
        page.waitForResponse(res =>
            res.status() == 200
            &&
            res.url() == "https://api.github.com/users/ortonikc"
            &&
            res.body().then(b => {
                console.log(b);
                return b.includes("Koushik letcode")
            })
        ),
        page.fill("input[name='username']", "ortonikc"),
        page.click("button")
    ])
    console.log(await response.json());

})