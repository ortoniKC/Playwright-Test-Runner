import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        browserName: "firefox",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        // trace: "on",
    },

    workers: 2,
    testMatch: ["annotation.test.ts"],
    retries: 0,
    reporter: [["dot"], ["json", { outputFile: "test-result.json" }]],
}
export default config;