import { chromium, test } from "@playwright/test";

test("Handle Chrome Extension", async () => {
    const pathToExtension = "Y://my-code-base//Playwright-Test-Runner//my-ext"
    console.log(pathToExtension);

    const userDataDir = pathToExtension;
    const browserContext = await chromium.launchPersistentContext(userDataDir, {
        headless: false,
        args: [
            `--disable-extensions-except=${pathToExtension}`,
            `--load-extension=${pathToExtension}`
        ]
    });
    const backgroundPage = browserContext.backgroundPages()[0];
    await backgroundPage.waitForTimeout(10000)
    // Test the background page as you would any other page.
    // backgroundPage.$("");
    // await browserContext.close();
})