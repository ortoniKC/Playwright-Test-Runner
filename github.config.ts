import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {
    use: {
        headless: true,
        browserName: "chromium"
    },
    testMatch: ["amazonprice.test.ts"],
    retries: 1
}
export default config;