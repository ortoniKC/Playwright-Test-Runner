import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        channel: "chrome",
        screenshot: "on",
        video: "on"
    },
    testMatch: ["shadow.test.ts"],
    retries: 0,
    reporter: [["dot"], ["json", { outputFile: "test-result.json" }]]

}
export default config;