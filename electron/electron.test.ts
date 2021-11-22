import { test, _electron } from "@playwright/test";

test("Electron app automation demo", async ({ }) => {

    const electronApp = await _electron.launch({
        executablePath: "./Prices.exe"
    })
    const appPath = await electronApp.evaluate(async ({ app }) => {
        // This runs in the main Electron process, parameter here is always
        // the result of the require('electron') in the main app script.
        return app.getAppPath();
    });
    console.log(appPath);
    const window = await electronApp.firstWindow();
    // Print the title.
    console.log(await window.title());
    // Capture a screenshot.
    await window.screenshot({ path: 'intro.png' });
    // Direct Electron console to Node terminal.
    window.on('console', console.log);
    await electronApp.close();
})