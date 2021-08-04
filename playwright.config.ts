import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {
    use: {
        headless: !true,
        browserName: "chromium",
        screenshot: "on",
        trace: "retain-on-failure",
        baseURL: "https://letcode.in",

    },
    // timeout: 5000,
    // grep: [new RegExp("@smoke"), new RegExp("@reg")],
    testMatch: ["apiresponse.test.ts"],
    retries: 0,
    reporter: [["dot"], ["json", { outputFile: "test-result.json" }],
    ['experimental-allure-playwright']],
}
export default config;