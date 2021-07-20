import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {
    use: {
        headless: false,
        browserName: "chromium"
    },
    testMatch: ["basicVerification.test.ts"],
    retries: 0,
    reporter: [["dot"], ["json", { outputFile: "test-result.json" }]],
}
export default config;