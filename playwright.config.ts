import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {
    use: {
        headless: true,
        channel: "chrome",
        screenshot: "only-on-failure",
        video: "retain-on-failure",
        // slowMo: 1000
    },
    testMatch: ["**.test.ts"],
    retries: 0,
    reporter: [["dot"], ["json", { outputFile: "test-result.json" }]]

}
export default config;